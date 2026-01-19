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
        class="options-group"
      >
        <v-radio
          v-for="option in question.options"
          :key="option.id"
          :value="option.id"
          class="option-radio mb-3"
          color="primary"
        >
          <template #label>
            <span class="option-label">
              <span class="option-letter">{{ option.id }}.</span>
              {{ option.text }}
            </span>
          </template>
        </v-radio>
      </v-radio-group>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, watch } from 'vue'

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
    type: String,
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

.options-group {
  margin-top: 16px;
}

.option-radio {
  align-items: flex-start;
  min-height: 48px;
}

.option-radio :deep(.v-selection-control__wrapper) {
  margin-top: 2px;
}

.option-label {
  display: block;
  line-height: 1.5;
  padding: 4px 0;
}

.option-letter {
  font-weight: 600;
  margin-right: 8px;
  color: #1976D2;
}

/* Highlight selected option */
.option-radio:has(input:checked) .option-label {
  color: #1976D2;
  font-weight: 500;
}
</style>
