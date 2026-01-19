import { describe, it, expect } from 'vitest'
import {
  calculateScores,
  calculatePercentages,
  getPrimaryType,
  getTypesByScore,
  getTypeDescription,
  getCompleteResults,
  isTestComplete,
  getAnsweredCount,
  getTotalQuestions,
  getTypeForAnswer
} from '../utils/scoring'
import { 
  syntheticTestCases, 
  edgeCases, 
  realisticTestCase,
  generateAnswersForType,
  questionMapping
} from '../__mocks__/testData'

describe('Scoring Utilities - Situation-Based DISC', () => {
  
  describe('calculateScores', () => {
    it('should calculate correct scores for pure D profile', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-D')
      const scores = calculateScores(testCase.answers)
      
      expect(scores.D).toBe(28)
      expect(scores.I).toBe(0)
      expect(scores.S).toBe(0)
      expect(scores.C).toBe(0)
    })

    it('should calculate correct scores for pure I profile', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-I')
      const scores = calculateScores(testCase.answers)
      
      expect(scores.D).toBe(0)
      expect(scores.I).toBe(28)
      expect(scores.S).toBe(0)
      expect(scores.C).toBe(0)
    })

    it('should calculate correct scores for pure S profile', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-S')
      const scores = calculateScores(testCase.answers)
      
      expect(scores.D).toBe(0)
      expect(scores.I).toBe(0)
      expect(scores.S).toBe(28)
      expect(scores.C).toBe(0)
    })

    it('should calculate correct scores for pure C profile', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-C')
      const scores = calculateScores(testCase.answers)
      
      expect(scores.D).toBe(0)
      expect(scores.I).toBe(0)
      expect(scores.S).toBe(0)
      expect(scores.C).toBe(28)
    })

    it('should handle empty answers', () => {
      const scores = calculateScores({})
      
      expect(scores.D).toBe(0)
      expect(scores.I).toBe(0)
      expect(scores.S).toBe(0)
      expect(scores.C).toBe(0)
    })

    it('should calculate correct scores for mixed D-I profile', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-mixed-DI')
      const scores = calculateScores(testCase.answers)
      
      expect(scores.D).toBe(14)
      expect(scores.I).toBe(14)
      expect(scores.S).toBe(0)
      expect(scores.C).toBe(0)
    })

    it('should handle realistic balanced profile', () => {
      const scores = calculateScores(realisticTestCase.answers)
      const total = scores.D + scores.I + scores.S + scores.C
      
      expect(total).toBe(28)
      expect(scores.D).toBeGreaterThanOrEqual(0)
      expect(scores.I).toBeGreaterThanOrEqual(0)
      expect(scores.S).toBeGreaterThanOrEqual(0)
      expect(scores.C).toBeGreaterThanOrEqual(0)
    })
  })

  describe('calculatePercentages', () => {
    it('should return 100% for pure D profile', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-D')
      const scores = calculateScores(testCase.answers)
      const percentages = calculatePercentages(scores)
      
      expect(percentages.D).toBe(100)
      expect(percentages.I).toBe(0)
      expect(percentages.S).toBe(0)
      expect(percentages.C).toBe(0)
    })

    it('should return 50% for mixed D-I profile', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-mixed-DI')
      const scores = calculateScores(testCase.answers)
      const percentages = calculatePercentages(scores)
      
      expect(percentages.D).toBe(50)
      expect(percentages.I).toBe(50)
      expect(percentages.S).toBe(0)
      expect(percentages.C).toBe(0)
    })

    it('should return 0% for empty answers', () => {
      const scores = calculateScores({})
      const percentages = calculatePercentages(scores)
      
      expect(percentages.D).toBe(0)
      expect(percentages.I).toBe(0)
      expect(percentages.S).toBe(0)
      expect(percentages.C).toBe(0)
    })
  })

  describe('getPrimaryType', () => {
    it('should return D for pure D profile', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-D')
      const scores = calculateScores(testCase.answers)
      const primaryType = getPrimaryType(scores)
      
      expect(primaryType).toBe('D')
    })

    it('should return I for pure I profile', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-I')
      const scores = calculateScores(testCase.answers)
      const primaryType = getPrimaryType(scores)
      
      expect(primaryType).toBe('I')
    })

    it('should return S for pure S profile', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-S')
      const scores = calculateScores(testCase.answers)
      const primaryType = getPrimaryType(scores)
      
      expect(primaryType).toBe('S')
    })

    it('should return C for pure C profile', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-C')
      const scores = calculateScores(testCase.answers)
      const primaryType = getPrimaryType(scores)
      
      expect(primaryType).toBe('C')
    })

    it('should return a valid type for mixed profile', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-mixed-DI')
      const scores = calculateScores(testCase.answers)
      const primaryType = getPrimaryType(scores)
      
      expect(['D', 'I']).toContain(primaryType)
    })
  })

  describe('getTypesByScore', () => {
    it('should return types sorted by score (highest first)', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-D')
      const scores = calculateScores(testCase.answers)
      const sortedTypes = getTypesByScore(scores)
      
      expect(sortedTypes[0].type).toBe('D')
      expect(sortedTypes[0].score).toBe(28)
      expect(sortedTypes.length).toBe(4)
    })

    it('should correctly sort mixed profile', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-mixed-DI')
      const scores = calculateScores(testCase.answers)
      const sortedTypes = getTypesByScore(scores)
      
      // D and I should be first two (both with 14)
      expect(sortedTypes[0].score).toBe(14)
      expect(sortedTypes[1].score).toBe(14)
      expect(['D', 'I']).toContain(sortedTypes[0].type)
      expect(['D', 'I']).toContain(sortedTypes[1].type)
    })
  })

  describe('getTypeDescription', () => {
    it('should return description for D type', () => {
      const description = getTypeDescription('D')
      
      expect(description).not.toBeNull()
      expect(description.name).toBe('Dominance')
      expect(description.color).toBe('#E53935')
      expect(description.strengths).toBeInstanceOf(Array)
      expect(description.challenges).toBeInstanceOf(Array)
    })

    it('should return description for I type', () => {
      const description = getTypeDescription('I')
      
      expect(description).not.toBeNull()
      expect(description.name).toBe('Influence')
      expect(description.color).toBe('#FFB300')
    })

    it('should return description for S type', () => {
      const description = getTypeDescription('S')
      
      expect(description).not.toBeNull()
      expect(description.name).toBe('Stabilité')
      expect(description.color).toBe('#43A047')
    })

    it('should return description for C type', () => {
      const description = getTypeDescription('C')
      
      expect(description).not.toBeNull()
      expect(description.name).toBe('Conformité')
      expect(description.color).toBe('#1E88E5')
    })

    it('should return null for invalid type', () => {
      const description = getTypeDescription('X')
      
      expect(description).toBeNull()
    })
  })

  describe('isTestComplete', () => {
    it('should return true when all 28 questions are answered', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-D')
      const complete = isTestComplete(testCase.answers)
      
      expect(complete).toBe(true)
    })

    it('should return false when some questions are missing', () => {
      const testCase = edgeCases.find(tc => tc.id === 'edge-incomplete')
      const complete = isTestComplete(testCase.answers)
      
      expect(complete).toBe(false)
    })

    it('should return false for empty answers', () => {
      const testCase = edgeCases.find(tc => tc.id === 'edge-empty')
      const complete = isTestComplete(testCase.answers)
      
      expect(complete).toBe(false)
    })
  })

  describe('getAnsweredCount', () => {
    it('should return 28 for complete answers', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-D')
      const count = getAnsweredCount(testCase.answers)
      
      expect(count).toBe(28)
    })

    it('should return 14 for partially complete answers', () => {
      const testCase = edgeCases.find(tc => tc.id === 'edge-incomplete')
      const count = getAnsweredCount(testCase.answers)
      
      expect(count).toBe(14)
    })

    it('should return 0 for empty answers', () => {
      const count = getAnsweredCount({})
      
      expect(count).toBe(0)
    })
  })

  describe('getTotalQuestions', () => {
    it('should return 28', () => {
      expect(getTotalQuestions()).toBe(28)
    })
  })

  describe('getCompleteResults', () => {
    it('should return complete results object', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-D')
      const results = getCompleteResults(testCase.answers)
      
      expect(results).toHaveProperty('scores')
      expect(results).toHaveProperty('percentages')
      expect(results).toHaveProperty('primaryType')
      expect(results).toHaveProperty('sortedTypes')
      expect(results).toHaveProperty('primaryDescription')
      expect(results).toHaveProperty('allDescriptions')
      
      expect(results.primaryType).toBe('D')
      expect(results.scores.D).toBe(28)
      expect(results.percentages.D).toBe(100)
    })

    it('should return valid results for realistic profile', () => {
      const results = getCompleteResults(realisticTestCase.answers)
      
      expect(results.primaryType).toBeTruthy()
      expect(['D', 'I', 'S', 'C']).toContain(results.primaryType)
      expect(results.primaryDescription).toBeTruthy()
      expect(results.sortedTypes.length).toBe(4)
    })
  })

  describe('getTypeForAnswer', () => {
    it('should return correct type for question 1 option A', () => {
      const type = getTypeForAnswer(1, 'A')
      expect(type).toBe('D')
    })

    it('should return correct type for question 1 option B', () => {
      const type = getTypeForAnswer(1, 'B')
      expect(type).toBe('I')
    })

    it('should return null for invalid question', () => {
      const type = getTypeForAnswer(999, 'A')
      expect(type).toBeNull()
    })

    it('should return null for invalid option', () => {
      const type = getTypeForAnswer(1, 'X')
      expect(type).toBeNull()
    })
  })
})

describe('Question Mapping Validation', () => {
  
  it('should have mapping for all 28 questions', () => {
    expect(Object.keys(questionMapping).length).toBe(28)
  })

  it('each question should map all 4 options to DISC types', () => {
    for (const [questionId, mapping] of Object.entries(questionMapping)) {
      expect(Object.keys(mapping)).toHaveLength(4)
      expect(mapping).toHaveProperty('A')
      expect(mapping).toHaveProperty('B')
      expect(mapping).toHaveProperty('C')
      expect(mapping).toHaveProperty('D')
      
      // Each option should map to a valid DISC type
      for (const type of Object.values(mapping)) {
        expect(['D', 'I', 'S', 'C']).toContain(type)
      }
    }
  })

  it('generateAnswersForType should create valid answers for each type', () => {
    for (const targetType of ['D', 'I', 'S', 'C']) {
      const answers = generateAnswersForType(targetType)
      
      expect(Object.keys(answers).length).toBe(28)
      
      // Verify all answers map to the target type
      const scores = calculateScores(answers)
      expect(scores[targetType]).toBe(28)
    }
  })
})

describe('Edge Cases', () => {
  
  it('should handle all-A answers', () => {
    const testCase = edgeCases.find(tc => tc.id === 'edge-all-A')
    const scores = calculateScores(testCase.answers)
    const total = scores.D + scores.I + scores.S + scores.C
    
    expect(total).toBe(28)
    expect(isTestComplete(testCase.answers)).toBe(true)
  })

  it('should handle all-B answers', () => {
    const testCase = edgeCases.find(tc => tc.id === 'edge-all-B')
    const scores = calculateScores(testCase.answers)
    const total = scores.D + scores.I + scores.S + scores.C
    
    expect(total).toBe(28)
    expect(isTestComplete(testCase.answers)).toBe(true)
  })

  it('should handle all-C answers', () => {
    const testCase = edgeCases.find(tc => tc.id === 'edge-all-C')
    const scores = calculateScores(testCase.answers)
    const total = scores.D + scores.I + scores.S + scores.C
    
    expect(total).toBe(28)
    expect(isTestComplete(testCase.answers)).toBe(true)
  })

  it('should handle all-D answers', () => {
    const testCase = edgeCases.find(tc => tc.id === 'edge-all-D')
    const scores = calculateScores(testCase.answers)
    const total = scores.D + scores.I + scores.S + scores.C
    
    expect(total).toBe(28)
    expect(isTestComplete(testCase.answers)).toBe(true)
  })

  it('should handle null/undefined values gracefully', () => {
    const answers = {
      1: 'A',
      2: null,
      3: undefined,
      4: 'B'
    }
    
    const scores = calculateScores(answers)
    const total = scores.D + scores.I + scores.S + scores.C
    
    // Only questions 1 and 4 should be counted
    expect(total).toBe(2)
  })
})
