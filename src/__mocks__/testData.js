/**
 * Mock test data for Situation-Based DISC Assessment
 * 28 questions with 4 options each (A, B, C, D)
 * Each option maps to a DISC type
 */

/**
 * DISC type mapping per question (from the scoring table)
 * Format: { questionId: { A: type, B: type, C: type, D: type } }
 */
export const questionMapping = {
  1: { A: 'D', B: 'I', C: 'S', D: 'C' },
  2: { A: 'I', B: 'D', C: 'S', D: 'C' },
  3: { A: 'S', B: 'D', C: 'I', D: 'C' },
  4: { A: 'S', B: 'C', C: 'I', D: 'D' },
  5: { A: 'C', B: 'S', C: 'D', D: 'I' },
  6: { A: 'C', B: 'S', C: 'I', D: 'D' },
  7: { A: 'D', B: 'S', C: 'C', D: 'I' },
  8: { A: 'I', B: 'C', C: 'S', D: 'D' },
  9: { A: 'C', B: 'D', C: 'S', D: 'I' },
  10: { A: 'D', B: 'S', C: 'I', D: 'C' },
  11: { A: 'C', B: 'S', C: 'I', D: 'D' },
  12: { A: 'C', B: 'S', C: 'I', D: 'D' },
  13: { A: 'D', B: 'C', C: 'I', D: 'S' },
  14: { A: 'I', B: 'C', C: 'D', D: 'S' },
  15: { A: 'D', B: 'S', C: 'I', D: 'C' },
  16: { A: 'C', B: 'D', C: 'I', D: 'S' },
  17: { A: 'D', B: 'C', C: 'I', D: 'S' },
  18: { A: 'D', B: 'C', C: 'S', D: 'I' },
  19: { A: 'D', B: 'C', C: 'S', D: 'I' },
  20: { A: 'C', B: 'I', C: 'D', D: 'S' },
  21: { A: 'S', B: 'D', C: 'C', D: 'I' },
  22: { A: 'I', B: 'D', C: 'C', D: 'S' },
  23: { A: 'C', B: 'S', C: 'I', D: 'D' },
  24: { A: 'I', B: 'D', C: 'C', D: 'S' },
  25: { A: 'D', B: 'C', C: 'S', D: 'I' },
  26: { A: 'C', B: 'I', C: 'D', D: 'S' },
  27: { A: 'I', B: 'C', C: 'D', D: 'S' },
  28: { A: 'I', B: 'C', C: 'S', D: 'D' }
}

/**
 * Generate answers that all map to a specific DISC type
 * @param {string} targetType - The DISC type (D, I, S, or C)
 * @returns {Object} - Answers object
 */
export function generateAnswersForType(targetType) {
  const answers = {}
  
  for (const [questionId, mapping] of Object.entries(questionMapping)) {
    // Find the option that maps to the target type
    for (const [optionId, type] of Object.entries(mapping)) {
      if (type === targetType) {
        answers[parseInt(questionId)] = optionId
        break
      }
    }
  }
  
  return answers
}

/**
 * Synthetic test cases with clear profiles
 */
export const syntheticTestCases = [
  {
    id: 'synthetic-D',
    description: 'All D answers - Pure Dominance profile',
    expectedType: 'D',
    answers: generateAnswersForType('D'),
    expectedScores: { D: 28, I: 0, S: 0, C: 0 }
  },
  {
    id: 'synthetic-I',
    description: 'All I answers - Pure Influence profile',
    expectedType: 'I',
    answers: generateAnswersForType('I'),
    expectedScores: { D: 0, I: 28, S: 0, C: 0 }
  },
  {
    id: 'synthetic-S',
    description: 'All S answers - Pure Steadiness profile',
    expectedType: 'S',
    answers: generateAnswersForType('S'),
    expectedScores: { D: 0, I: 0, S: 28, C: 0 }
  },
  {
    id: 'synthetic-C',
    description: 'All C answers - Pure Conscientiousness profile',
    expectedType: 'C',
    answers: generateAnswersForType('C'),
    expectedScores: { D: 0, I: 0, S: 0, C: 28 }
  },
  {
    id: 'synthetic-mixed-DI',
    description: 'Mixed D-I profile (14 D, 14 I)',
    expectedType: 'D', // D wins by alphabetical order in case of tie
    answers: (() => {
      const answers = {}
      let dCount = 0
      let iCount = 0
      
      for (const [questionId, mapping] of Object.entries(questionMapping)) {
        if (dCount < 14) {
          // Find D option
          for (const [optionId, type] of Object.entries(mapping)) {
            if (type === 'D') {
              answers[parseInt(questionId)] = optionId
              dCount++
              break
            }
          }
        } else if (iCount < 14) {
          // Find I option
          for (const [optionId, type] of Object.entries(mapping)) {
            if (type === 'I') {
              answers[parseInt(questionId)] = optionId
              iCount++
              break
            }
          }
        }
      }
      
      return answers
    })(),
    expectedScores: { D: 14, I: 14, S: 0, C: 0 }
  }
]

/**
 * Realistic test case - balanced profile
 */
export const realisticTestCase = {
  id: 'realistic-balanced',
  description: 'Realistic balanced profile',
  answers: {
    1: 'A',  // D
    2: 'B',  // D
    3: 'C',  // I
    4: 'A',  // S
    5: 'D',  // I
    6: 'B',  // S
    7: 'A',  // D
    8: 'C',  // S
    9: 'D',  // I
    10: 'B', // S
    11: 'D', // D
    12: 'C', // I
    13: 'D', // S
    14: 'A', // I
    15: 'D', // C
    16: 'A', // C
    17: 'B', // C
    18: 'B', // C
    19: 'A', // D
    20: 'D', // S
    21: 'A', // S
    22: 'D', // S
    23: 'A', // C
    24: 'D', // S
    25: 'C', // S
    26: 'D', // S
    27: 'D', // S
    28: 'C'  // S
  }
}

/**
 * Edge cases for testing
 */
export const edgeCases = [
  {
    id: 'edge-incomplete',
    description: 'Incomplete answers (only 14 questions)',
    answers: {
      1: 'A', 2: 'B', 3: 'C', 4: 'D',
      5: 'A', 6: 'B', 7: 'C', 8: 'D',
      9: 'A', 10: 'B', 11: 'C', 12: 'D',
      13: 'A', 14: 'B'
    },
    expectedComplete: false
  },
  {
    id: 'edge-empty',
    description: 'No answers',
    answers: {},
    expectedComplete: false,
    expectedScores: { D: 0, I: 0, S: 0, C: 0 }
  },
  {
    id: 'edge-all-A',
    description: 'All A answers',
    answers: Object.fromEntries(
      Array.from({ length: 28 }, (_, i) => [i + 1, 'A'])
    ),
    expectedComplete: true
  },
  {
    id: 'edge-all-B',
    description: 'All B answers',
    answers: Object.fromEntries(
      Array.from({ length: 28 }, (_, i) => [i + 1, 'B'])
    ),
    expectedComplete: true
  },
  {
    id: 'edge-all-C',
    description: 'All C answers',
    answers: Object.fromEntries(
      Array.from({ length: 28 }, (_, i) => [i + 1, 'C'])
    ),
    expectedComplete: true
  },
  {
    id: 'edge-all-D',
    description: 'All D answers',
    answers: Object.fromEntries(
      Array.from({ length: 28 }, (_, i) => [i + 1, 'D'])
    ),
    expectedComplete: true
  }
]

export default {
  questionMapping,
  generateAnswersForType,
  syntheticTestCases,
  realisticTestCase,
  edgeCases
}
