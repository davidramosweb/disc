import { questions, discDescriptions } from '../data/questions'

/**
 * Calculate DISC scores from user answers
 * @param {Object} answers - Object with question IDs as keys and option IDs (A, B, C, D) as values
 * @returns {Object} - Object containing scores per DISC type
 */
export function calculateScores(answers) {
  // Initialize scores for each DISC category
  const scores = {
    D: 0,
    I: 0,
    S: 0,
    C: 0
  }

  // Count selections by DISC type
  questions.forEach(question => {
    const selectedOptionId = answers[question.id]
    if (selectedOptionId) {
      const option = question.options.find(o => o.id === selectedOptionId)
      if (option) {
        scores[option.type]++
      }
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
  // Max score per type is total questions (28) if all answers map to that type
  const maxScore = questions.length

  const percentages = {}
  
  for (const category in scores) {
    percentages[category] = Math.round((scores[category] / maxScore) * 100)
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

/**
 * Get the DISC type for a specific answer
 * @param {number} questionId - The question ID
 * @param {string} optionId - The selected option ID (A, B, C, D)
 * @returns {string|null} - The DISC type or null if not found
 */
export function getTypeForAnswer(questionId, optionId) {
  const question = questions.find(q => q.id === questionId)
  if (!question) return null
  
  const option = question.options.find(o => o.id === optionId)
  return option ? option.type : null
}
