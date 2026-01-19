<template>
  <v-card class="question-card mb-4" elevation="2">
    <v-card-text>
      <div class="question-number text-caption text-grey mb-2">
        Question {{ questionNumber }} / {{ totalQuestions }}
      </div>
      <div class="question-text text-h6 mb-4">
        {{ question.text }}
      </div>
      <v-radio-group
        v-model="selectedValue"
        @update:model-value="handleChange"
        class="likert-group"
      >
        <div class="likert-scale d-flex flex-column flex-sm-row justify-space-between">
          <v-radio
            v-for="option in likertOptions"
            :key="option.value"
            :value="option.value"
            :label="option.label"
            class="likert-option"
            color="primary"
          />
        </div>
      </v-radio-group>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, watch } from 'vue'
import { likertOptions } from '../data/questions'

const props = defineProps({
  question: {
    type: Object,
    required: true
  },
  questionNumber: {
    type: Number,
    required: true
  },
  totalQuestions: {
    type: Number,
    required: true
  },
  modelValue: {
    type: Number,
    default: null
  }
})

const emit = defineEmits(['update:modelValue'])

const selectedValue = ref(props.modelValue)

// Watch for external changes to modelValue
watch(() => props.modelValue, (newVal) => {
  selectedValue.value = newVal
})

function handleChange(value) {
  emit('update:modelValue', value)
}
</script>

<style scoped>
.question-card {
  transition: all 0.3s ease;
}

.question-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
}

.question-text {
  line-height: 1.5;
  color: #333;
}

.likert-group {
  margin-top: 16px;
}

.likert-scale {
  gap: 8px;
}

.likert-option {
  flex: 1;
  min-width: 120px;
}

@media (max-width: 600px) {
  .likert-option {
    min-width: 100%;
  }
}
</style>
