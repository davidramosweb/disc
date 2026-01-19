/**
 * Mock test data extracted from ODAT item screening data
 * Source: odat-item-screening-data1.ods from OpenPsychometrics
 * 
 * Original dataset has 10 questions per category (D1-D10, I1-I10, S1-S10, C1-C10)
 * Our app uses 4 questions per category (16 total) matching the final ODAT version:
 * 
 * Mapping from original to our questions:
 * - D: D3, D9, D10, D5 → Questions 1-4
 * - I: I1, I2, I3, I7 → Questions 5-8  
 * - S: S1, S7, S2, S8 → Questions 9-12
 * - C: C1, C2, C8, C9 → Questions 13-16
 */

/**
 * Extract relevant answers from full 40-question response
 * @param {Array} fullD - D1-D10 responses (indices 0-9)
 * @param {Array} fullI - I1-I10 responses (indices 0-9)
 * @param {Array} fullS - S1-S10 responses (indices 0-9)
 * @param {Array} fullC - C1-C10 responses (indices 0-9)
 * @returns {Object} - Answers object for our 16-question test
 */
function extractAnswers(fullD, fullI, fullS, fullC) {
  return {
    // D questions: D3, D9, D10, D5
    1: parseInt(fullD[2]),   // D3: I put people under pressure
    2: parseInt(fullD[8]),   // D9: I have a strong need for power
    3: parseInt(fullD[9]),   // D10: I try to outdo others
    4: parseInt(fullD[4]),   // D5: I am always on the look out for ways to make money
    
    // I questions: I1, I2, I3, I7
    5: parseInt(fullI[0]),   // I1: I enjoy being part of a loud crowd
    6: parseInt(fullI[1]),   // I2: I want strangers to love me
    7: parseInt(fullI[2]),   // I3: I joke around a lot
    8: parseInt(fullI[6]),   // I7: I make lots of noise
    
    // S questions: S1, S7, S2, S8
    9: parseInt(fullS[0]),   // S1: I hesitate to criticize other people's ideas
    10: parseInt(fullS[6]),  // S7: I value cooperation over competition
    11: parseInt(fullS[1]),  // S2: I just want everyone to be equal
    12: parseInt(fullS[7]),  // S8: I seldom toot my own horn
    
    // C questions: C1, C2, C8, C9
    13: parseInt(fullC[0]),  // C1: I am emotionally reserved
    14: parseInt(fullC[1]),  // C2: I read the fine print
    15: parseInt(fullC[7]),  // C8: I love order and regularity
    16: parseInt(fullC[8])   // C9: My first reaction to an idea is to see its flaws
  }
}

/**
 * Real participant data from ODAT screening dataset
 * Each entry includes:
 * - fullResponses: All 40 responses (D1-10, I1-10, S1-10, C1-10)
 * - knownType: The participant's self-reported DISC type
 * - answers: Extracted 16-question answers for our test
 */
export const participantData = [
  {
    id: 1,
    description: 'Participant self-identified as C type',
    knownType: 'C',
    fullResponses: {
      D: ['4', '3', '1', '2', '1', '3', '1', '1', '1', '1'],
      I: ['1', '2', '5', '4', '5', '5', '1', '3', '5', '5'],
      S: ['3', '5', '4', '5', '5', '5', '5', '4', '5', '3'],
      C: ['2', '1', '3', '5', '3', '5', '2', '5', '1', '5']
    },
    get answers() {
      return extractAnswers(this.fullResponses.D, this.fullResponses.I, this.fullResponses.S, this.fullResponses.C)
    }
  },
  {
    id: 2,
    description: 'Participant self-identified as D type',
    knownType: 'D',
    fullResponses: {
      D: ['3', '4', '2', '4', '1', '5', '1', '5', '2', '3'],
      I: ['5', '3', '3', '3', '2', '4', '2', '5', '1', '4'],
      S: ['1', '2', '4', '2', '3', '3', '3', '4', '1', '5'],
      C: ['5', '1', '5', '1', '4', '2', '4', '3', '2', '5']
    },
    get answers() {
      return extractAnswers(this.fullResponses.D, this.fullResponses.I, this.fullResponses.S, this.fullResponses.C)
    }
  },
  {
    id: 3,
    description: 'Participant self-identified as S type',
    knownType: 'S',
    fullResponses: {
      D: ['4', '2', '2', '2', '2', '4', '2', '2', '2', '2'],
      I: ['2', '2', '4', '4', '4', '4', '2', '3', '2', '4'],
      S: ['4', '3', '3', '2', '4', '4', '3', '3', '3', '4'],
      C: ['3', '2', '4', '3', '3', '2', '2', '5', '2', '2']
    },
    get answers() {
      return extractAnswers(this.fullResponses.D, this.fullResponses.I, this.fullResponses.S, this.fullResponses.C)
    }
  },
  {
    id: 4,
    description: 'Participant self-identified as I type',
    knownType: 'I',
    fullResponses: {
      D: ['4', '2', '1', '1', '3', '3', '2', '2', '2', '3'],
      I: ['2', '4', '5', '5', '3', '4', '1', '4', '4', '4'],
      S: ['5', '4', '5', '4', '4', '3', '5', '4', '4', '3'],
      C: ['1', '5', '3', '1', '4', '2', '4', '3', '1', '3']
    },
    get answers() {
      return extractAnswers(this.fullResponses.D, this.fullResponses.I, this.fullResponses.S, this.fullResponses.C)
    }
  },
  {
    id: 5,
    description: 'Participant self-identified as S type (second)',
    knownType: 'S',
    fullResponses: {
      D: ['3', '3', '3', '1', '1', '1', '1', '1', '1', '1'],
      I: ['5', '1', '4', '5', '5', '1', '1', '3', '1', '1'],
      S: ['3', '4', '1', '3', '3', '5', '5', '5', '5', '1'],
      C: ['4', '1', '1', '5', '1', '3', '5', '5', '3', '3']
    },
    get answers() {
      return extractAnswers(this.fullResponses.D, this.fullResponses.I, this.fullResponses.S, this.fullResponses.C)
    }
  }
]

/**
 * Synthetic test cases with extreme/clear profiles
 * These are designed to have very clear dominant types
 */
export const syntheticTestCases = [
  {
    id: 'synthetic-D',
    description: 'Clear D type profile (high D, low others)',
    expectedType: 'D',
    answers: {
      // D questions: all high (5)
      1: 5, 2: 5, 3: 5, 4: 5,
      // I questions: all low (1)
      5: 1, 6: 1, 7: 1, 8: 1,
      // S questions: all low (1)
      9: 1, 10: 1, 11: 1, 12: 1,
      // C questions: all low (1)
      13: 1, 14: 1, 15: 1, 16: 1
    },
    expectedScores: { D: 20, I: 4, S: 4, C: 4 }
  },
  {
    id: 'synthetic-I',
    description: 'Clear I type profile (high I, low others)',
    expectedType: 'I',
    answers: {
      // D questions: all low (1)
      1: 1, 2: 1, 3: 1, 4: 1,
      // I questions: all high (5)
      5: 5, 6: 5, 7: 5, 8: 5,
      // S questions: all low (1)
      9: 1, 10: 1, 11: 1, 12: 1,
      // C questions: all low (1)
      13: 1, 14: 1, 15: 1, 16: 1
    },
    expectedScores: { D: 4, I: 20, S: 4, C: 4 }
  },
  {
    id: 'synthetic-S',
    description: 'Clear S type profile (high S, low others)',
    expectedType: 'S',
    answers: {
      // D questions: all low (1)
      1: 1, 2: 1, 3: 1, 4: 1,
      // I questions: all low (1)
      5: 1, 6: 1, 7: 1, 8: 1,
      // S questions: all high (5)
      9: 5, 10: 5, 11: 5, 12: 5,
      // C questions: all low (1)
      13: 1, 14: 1, 15: 1, 16: 1
    },
    expectedScores: { D: 4, I: 4, S: 20, C: 4 }
  },
  {
    id: 'synthetic-C',
    description: 'Clear C type profile (high C, low others)',
    expectedType: 'C',
    answers: {
      // D questions: all low (1)
      1: 1, 2: 1, 3: 1, 4: 1,
      // I questions: all low (1)
      5: 1, 6: 1, 7: 1, 8: 1,
      // S questions: all low (1)
      9: 1, 10: 1, 11: 1, 12: 1,
      // C questions: all high (5)
      13: 5, 14: 5, 15: 5, 16: 5
    },
    expectedScores: { D: 4, I: 4, S: 4, C: 20 }
  },
  {
    id: 'synthetic-neutral',
    description: 'Neutral profile (all answers = 3)',
    expectedType: null, // Any type could win, scores should be equal
    answers: {
      1: 3, 2: 3, 3: 3, 4: 3,
      5: 3, 6: 3, 7: 3, 8: 3,
      9: 3, 10: 3, 11: 3, 12: 3,
      13: 3, 14: 3, 15: 3, 16: 3
    },
    expectedScores: { D: 12, I: 12, S: 12, C: 12 }
  },
  {
    id: 'synthetic-mixed-DI',
    description: 'Mixed D-I profile (high D and I)',
    expectedType: 'D', // D wins by 1 point
    answers: {
      // D questions: high
      1: 5, 2: 5, 3: 4, 4: 4,
      // I questions: almost as high
      5: 5, 6: 4, 7: 4, 8: 4,
      // S questions: low
      9: 2, 10: 2, 11: 2, 12: 2,
      // C questions: low
      13: 2, 14: 2, 15: 2, 16: 2
    },
    expectedScores: { D: 18, I: 17, S: 8, C: 8 }
  }
]

/**
 * Edge cases for testing
 */
export const edgeCases = [
  {
    id: 'edge-incomplete',
    description: 'Incomplete answers (some missing)',
    answers: {
      1: 3, 2: 3, 3: 3, 4: 3,
      5: 3, 6: 3, 7: 3, 8: 3
      // Questions 9-16 missing
    },
    expectedComplete: false
  },
  {
    id: 'edge-empty',
    description: 'No answers',
    answers: {},
    expectedComplete: false
  },
  {
    id: 'edge-all-minimum',
    description: 'All minimum answers (1)',
    answers: {
      1: 1, 2: 1, 3: 1, 4: 1,
      5: 1, 6: 1, 7: 1, 8: 1,
      9: 1, 10: 1, 11: 1, 12: 1,
      13: 1, 14: 1, 15: 1, 16: 1
    },
    expectedScores: { D: 4, I: 4, S: 4, C: 4 },
    expectedPercentages: { D: 0, I: 0, S: 0, C: 0 }
  },
  {
    id: 'edge-all-maximum',
    description: 'All maximum answers (5)',
    answers: {
      1: 5, 2: 5, 3: 5, 4: 5,
      5: 5, 6: 5, 7: 5, 8: 5,
      9: 5, 10: 5, 11: 5, 12: 5,
      13: 5, 14: 5, 15: 5, 16: 5
    },
    expectedScores: { D: 20, I: 20, S: 20, C: 20 },
    expectedPercentages: { D: 100, I: 100, S: 100, C: 100 }
  }
]

export default {
  participantData,
  syntheticTestCases,
  edgeCases
}
