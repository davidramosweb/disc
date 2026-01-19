<template>
  <div class="progress-container mb-6">
    <div class="d-flex justify-space-between align-center mb-2">
      <span class="text-body-2 text-grey-darken-1">Progression</span>
      <span class="text-body-2 font-weight-medium">
        {{ answeredCount }} / {{ totalQuestions }} questions
      </span>
    </div>
    <v-progress-linear
      :model-value="progressPercentage"
      color="primary"
      height="8"
      rounded
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  answeredCount: {
    type: Number,
    required: true
  },
  totalQuestions: {
    type: Number,
    required: true
  }
})

const progressPercentage = computed(() => {
  if (props.totalQuestions === 0) return 0
  return Math.round((props.answeredCount / props.totalQuestions) * 100)
})
</script>

<style scoped>
.progress-container {
  position: sticky;
  top: 0;
  background: white;
  padding: 16px 0;
  z-index: 10;
}
</style>
