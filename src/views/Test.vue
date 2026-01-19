<template>
  <v-container class="test-container py-8" max-width="800">
    <!-- Header -->
    <div class="text-center mb-6">
      <h1 class="text-h4 font-weight-bold mb-2">Test DISC</h1>
      <p class="text-body-1 text-grey-darken-1">
        Répondez honnêtement à chaque question selon votre premier ressenti.
      </p>
    </div>

    <!-- Show test or results -->
    <template v-if="!showResults">
      <!-- Progress Bar -->
      <ProgressBar
        :answered-count="answeredCount"
        :total-questions="totalQuestions"
      />

      <!-- Questions -->
      <div class="questions-list">
        <QuestionCard
          v-for="(question, index) in questions"
          :key="question.id"
          :question="question"
          :question-number="index + 1"
          :total-questions="totalQuestions"
          v-model="answers[question.id]"
        />
      </div>

      <!-- Submit Button -->
      <div class="text-center mt-6">
        <v-btn
          color="primary"
          size="x-large"
          :disabled="!isTestComplete"
          @click="submitTest"
          rounded="lg"
        >
          <v-icon start>mdi-check-circle</v-icon>
          Terminer le test
        </v-btn>
        <p v-if="!isTestComplete" class="text-caption text-grey mt-2">
          Veuillez répondre à toutes les questions pour terminer le test.
        </p>
      </div>
    </template>

    <!-- Results -->
    <ResultsDisplay
      v-else
      :results="results"
      @restart="restartTest"
    />
  </v-container>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { questions } from '../data/questions'
import QuestionCard from '../components/QuestionCard.vue'
import ProgressBar from '../components/ProgressBar.vue'
import ResultsDisplay from '../components/ResultsDisplay.vue'
import { 
  getCompleteResults, 
  isTestComplete as checkTestComplete,
  getAnsweredCount,
  getTotalQuestions
} from '../utils/scoring'

// Reactive state for answers
const answers = reactive({})
const showResults = ref(false)
const results = ref(null)

// Computed properties
const totalQuestions = computed(() => getTotalQuestions())
const answeredCount = computed(() => getAnsweredCount(answers))
const isTestComplete = computed(() => checkTestComplete(answers))

// Methods
function submitTest() {
  if (isTestComplete.value) {
    results.value = getCompleteResults(answers)
    showResults.value = true
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

function restartTest() {
  // Clear all answers
  Object.keys(answers).forEach(key => {
    delete answers[key]
  })
  results.value = null
  showResults.value = false
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.test-container {
  min-height: 100vh;
}

.questions-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
