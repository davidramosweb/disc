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
  getTotalQuestions
} from '../utils/scoring'
import { participantData, syntheticTestCases, edgeCases } from '../__mocks__/testData'

describe('Scoring Utilities', () => {
  
  describe('calculateScores', () => {
    it('should calculate correct scores for synthetic D profile', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-D')
      const scores = calculateScores(testCase.answers)
      
      expect(scores.D).toBe(testCase.expectedScores.D)
      expect(scores.I).toBe(testCase.expectedScores.I)
      expect(scores.S).toBe(testCase.expectedScores.S)
      expect(scores.C).toBe(testCase.expectedScores.C)
    })

    it('should calculate correct scores for synthetic I profile', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-I')
      const scores = calculateScores(testCase.answers)
      
      expect(scores.D).toBe(testCase.expectedScores.D)
      expect(scores.I).toBe(testCase.expectedScores.I)
      expect(scores.S).toBe(testCase.expectedScores.S)
      expect(scores.C).toBe(testCase.expectedScores.C)
    })

    it('should calculate correct scores for synthetic S profile', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-S')
      const scores = calculateScores(testCase.answers)
      
      expect(scores.D).toBe(testCase.expectedScores.D)
      expect(scores.I).toBe(testCase.expectedScores.I)
      expect(scores.S).toBe(testCase.expectedScores.S)
      expect(scores.C).toBe(testCase.expectedScores.C)
    })

    it('should calculate correct scores for synthetic C profile', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-C')
      const scores = calculateScores(testCase.answers)
      
      expect(scores.D).toBe(testCase.expectedScores.D)
      expect(scores.I).toBe(testCase.expectedScores.I)
      expect(scores.S).toBe(testCase.expectedScores.S)
      expect(scores.C).toBe(testCase.expectedScores.C)
    })

    it('should calculate equal scores for neutral profile', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-neutral')
      const scores = calculateScores(testCase.answers)
      
      expect(scores.D).toBe(12)
      expect(scores.I).toBe(12)
      expect(scores.S).toBe(12)
      expect(scores.C).toBe(12)
    })

    it('should calculate correct scores for mixed D-I profile', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-mixed-DI')
      const scores = calculateScores(testCase.answers)
      
      expect(scores.D).toBe(testCase.expectedScores.D)
      expect(scores.I).toBe(testCase.expectedScores.I)
      expect(scores.S).toBe(testCase.expectedScores.S)
      expect(scores.C).toBe(testCase.expectedScores.C)
    })

    it('should handle empty answers', () => {
      const scores = calculateScores({})
      
      expect(scores.D).toBe(0)
      expect(scores.I).toBe(0)
      expect(scores.S).toBe(0)
      expect(scores.C).toBe(0)
    })
  })

  describe('calculatePercentages', () => {
    it('should return 0% for minimum scores', () => {
      const testCase = edgeCases.find(tc => tc.id === 'edge-all-minimum')
      const scores = calculateScores(testCase.answers)
      const percentages = calculatePercentages(scores)
      
      expect(percentages.D).toBe(0)
      expect(percentages.I).toBe(0)
      expect(percentages.S).toBe(0)
      expect(percentages.C).toBe(0)
    })

    it('should return 100% for maximum scores', () => {
      const testCase = edgeCases.find(tc => tc.id === 'edge-all-maximum')
      const scores = calculateScores(testCase.answers)
      const percentages = calculatePercentages(scores)
      
      expect(percentages.D).toBe(100)
      expect(percentages.I).toBe(100)
      expect(percentages.S).toBe(100)
      expect(percentages.C).toBe(100)
    })

    it('should return 50% for neutral scores', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-neutral')
      const scores = calculateScores(testCase.answers)
      const percentages = calculatePercentages(scores)
      
      expect(percentages.D).toBe(50)
      expect(percentages.I).toBe(50)
      expect(percentages.S).toBe(50)
      expect(percentages.C).toBe(50)
    })
  })

  describe('getPrimaryType', () => {
    it('should return D for synthetic D profile', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-D')
      const scores = calculateScores(testCase.answers)
      const primaryType = getPrimaryType(scores)
      
      expect(primaryType).toBe('D')
    })

    it('should return I for synthetic I profile', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-I')
      const scores = calculateScores(testCase.answers)
      const primaryType = getPrimaryType(scores)
      
      expect(primaryType).toBe('I')
    })

    it('should return S for synthetic S profile', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-S')
      const scores = calculateScores(testCase.answers)
      const primaryType = getPrimaryType(scores)
      
      expect(primaryType).toBe('S')
    })

    it('should return C for synthetic C profile', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-C')
      const scores = calculateScores(testCase.answers)
      const primaryType = getPrimaryType(scores)
      
      expect(primaryType).toBe('C')
    })

    it('should return D for mixed D-I profile (D slightly higher)', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-mixed-DI')
      const scores = calculateScores(testCase.answers)
      const primaryType = getPrimaryType(scores)
      
      expect(primaryType).toBe('D')
    })
  })

  describe('getTypesByScore', () => {
    it('should return types sorted by score (highest first)', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-D')
      const scores = calculateScores(testCase.answers)
      const sortedTypes = getTypesByScore(scores)
      
      expect(sortedTypes[0].type).toBe('D')
      expect(sortedTypes[0].score).toBe(20)
      expect(sortedTypes.length).toBe(4)
    })

    it('should correctly sort mixed profile', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-mixed-DI')
      const scores = calculateScores(testCase.answers)
      const sortedTypes = getTypesByScore(scores)
      
      expect(sortedTypes[0].type).toBe('D')
      expect(sortedTypes[1].type).toBe('I')
      expect(sortedTypes[0].score).toBeGreaterThan(sortedTypes[1].score)
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
    })

    it('should return description for S type', () => {
      const description = getTypeDescription('S')
      
      expect(description).not.toBeNull()
      expect(description.name).toBe('Stabilité')
    })

    it('should return description for C type', () => {
      const description = getTypeDescription('C')
      
      expect(description).not.toBeNull()
      expect(description.name).toBe('Conformité')
    })

    it('should return null for invalid type', () => {
      const description = getTypeDescription('X')
      
      expect(description).toBeNull()
    })
  })

  describe('isTestComplete', () => {
    it('should return true when all 16 questions are answered', () => {
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
    it('should return 16 for complete answers', () => {
      const testCase = syntheticTestCases.find(tc => tc.id === 'synthetic-D')
      const count = getAnsweredCount(testCase.answers)
      
      expect(count).toBe(16)
    })

    it('should return 8 for partially complete answers', () => {
      const testCase = edgeCases.find(tc => tc.id === 'edge-incomplete')
      const count = getAnsweredCount(testCase.answers)
      
      expect(count).toBe(8)
    })

    it('should return 0 for empty answers', () => {
      const count = getAnsweredCount({})
      
      expect(count).toBe(0)
    })
  })

  describe('getTotalQuestions', () => {
    it('should return 16', () => {
      expect(getTotalQuestions()).toBe(16)
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
      expect(results.scores.D).toBe(20)
      expect(results.percentages.D).toBe(100)
    })
  })
})

describe('Real Participant Data Validation', () => {
  
  describe('Participant responses from ODAT dataset', () => {
    participantData.forEach(participant => {
      it(`should calculate scores for participant ${participant.id} (${participant.description})`, () => {
        const scores = calculateScores(participant.answers)
        
        // Verify all scores are within valid range (4-20)
        expect(scores.D).toBeGreaterThanOrEqual(4)
        expect(scores.D).toBeLessThanOrEqual(20)
        expect(scores.I).toBeGreaterThanOrEqual(4)
        expect(scores.I).toBeLessThanOrEqual(20)
        expect(scores.S).toBeGreaterThanOrEqual(4)
        expect(scores.S).toBeLessThanOrEqual(20)
        expect(scores.C).toBeGreaterThanOrEqual(4)
        expect(scores.C).toBeLessThanOrEqual(20)
      })

      it(`should get valid primary type for participant ${participant.id}`, () => {
        const scores = calculateScores(participant.answers)
        const primaryType = getPrimaryType(scores)
        
        expect(['D', 'I', 'S', 'C']).toContain(primaryType)
      })

      it(`should generate complete results for participant ${participant.id}`, () => {
        const results = getCompleteResults(participant.answers)
        
        expect(results.primaryType).toBeTruthy()
        expect(results.primaryDescription).toBeTruthy()
        expect(results.sortedTypes.length).toBe(4)
      })
    })
  })

  describe('Score consistency checks', () => {
    it('should have consistent score totals for all participants', () => {
      participantData.forEach(participant => {
        const scores = calculateScores(participant.answers)
        const total = scores.D + scores.I + scores.S + scores.C
        
        // Total should be between 16 (all 1s) and 80 (all 5s)
        expect(total).toBeGreaterThanOrEqual(16)
        expect(total).toBeLessThanOrEqual(80)
      })
    })
  })
})

describe('Edge Case Handling', () => {
  
  it('should handle null values in answers gracefully', () => {
    const answers = {
      1: 3, 2: 3, 3: null, 4: 3,
      5: 3, 6: 3, 7: 3, 8: 3,
      9: 3, 10: 3, 11: 3, 12: 3,
      13: 3, 14: 3, 15: 3, 16: 3
    }
    
    const scores = calculateScores(answers)
    
    // Should still work, treating null as 0
    expect(scores.D).toBe(9) // 3 + 3 + 0 + 3 = 9
  })

  it('should handle undefined values in answers gracefully', () => {
    const answers = {
      1: 3, 2: 3, 3: undefined, 4: 3,
      5: 3, 6: 3, 7: 3, 8: 3,
      9: 3, 10: 3, 11: 3, 12: 3,
      13: 3, 14: 3, 15: 3, 16: 3
    }
    
    const scores = calculateScores(answers)
    
    expect(scores.D).toBe(9)
  })
})
