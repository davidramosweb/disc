import { questions, discDescriptions } from '../data/questions'

/**
 * Calculate DISC scores from user answers
 * @param {Object} answers - Object with question IDs as keys and Likert values (1-5) as values
 * @returns {Object} - Object containing scores per category and the primary type
 */
export function calculateScores(answers) {
  // Initialize scores for each DISC category
  const scores = {
    D: 0,
    I: 0,
    S: 0,
    C: 0
  }

  // Sum up answers by category
  questions.forEach(question => {
    const answer = answers[question.id]
    if (answer !== undefined && answer !== null) {
      scores[question.category] += answer
    }
  })

  return scores
}

/**
 * Calculate percentage scores (0-100) for each category
 * @param {Object} scores - Raw scores object
 * @returns {Object} - Percentage scores for each category
 */
export function calculatePercentages(scores) {
  // Each category has 4 questions with max score of 5 each = 20 max
  const maxScorePerCategory = 20
  const minScorePerCategory = 4 // Minimum is 1 per question

  const percentages = {}
  
  for (const category in scores) {
    // Normalize to 0-100 scale
    const normalizedScore = scores[category] - minScorePerCategory
    const normalizedMax = maxScorePerCategory - minScorePerCategory
    percentages[category] = Math.round((normalizedScore / normalizedMax) * 100)
  }

  return percentages
}

/**
 * Determine the primary DISC type
 * @param {Object} scores - Raw scores object
 * @returns {string} - The primary type (D, I, S, or C)
 */
export function getPrimaryType(scores) {
  let maxScore = -1
  let primaryType = null

  for (const category in scores) {
    if (scores[category] > maxScore) {
      maxScore = scores[category]
      primaryType = category
    }
  }

  return primaryType
}

/**
 * Get all types sorted by score (for displaying secondary types)
 * @param {Object} scores - Raw scores object
 * @returns {Array} - Array of types sorted by score (highest first)
 */
export function getTypesByScore(scores) {
  return Object.entries(scores)
    .map(([type, score]) => ({ type, score }))
    .sort((a, b) => b.score - a.score)
}

/**
 * Get the description for a DISC type
 * @param {string} type - DISC type (D, I, S, or C)
 * @returns {Object} - Description object for the type
 */
export function getTypeDescription(type) {
  return discDescriptions[type] || null
}

/**
 * Get complete results with all information
 * @param {Object} answers - User answers
 * @returns {Object} - Complete results object
 */
export function getCompleteResults(answers) {
  const scores = calculateScores(answers)
  const percentages = calculatePercentages(scores)
  const primaryType = getPrimaryType(scores)
  const sortedTypes = getTypesByScore(scores)
  const primaryDescription = getTypeDescription(primaryType)

  return {
    scores,
    percentages,
    primaryType,
    sortedTypes,
    primaryDescription,
    allDescriptions: discDescriptions
  }
}

/**
 * Check if all questions have been answered
 * @param {Object} answers - User answers
 * @returns {boolean} - True if all questions are answered
 */
export function isTestComplete(answers) {
  return questions.every(q => answers[q.id] !== undefined && answers[q.id] !== null)
}

/**
 * Get the number of answered questions
 * @param {Object} answers - User answers
 * @returns {number} - Number of answered questions
 */
export function getAnsweredCount(answers) {
  return Object.values(answers).filter(v => v !== undefined && v !== null).length
}

/**
 * Get total number of questions
 * @returns {number} - Total number of questions
 */
export function getTotalQuestions() {
  return questions.length
}
