<template>
  <div class="results-display">
    <!-- Primary Type Card -->
    <v-card 
      class="primary-type-card mb-6" 
      elevation="4"
      :style="{ borderTop: `4px solid ${primaryDescription.color}` }"
    >
      <v-card-text class="text-center py-8">
        <div class="type-badge mb-4">
          <v-avatar 
            :color="primaryDescription.color" 
            size="80"
          >
            <span class="text-h3 font-weight-bold white--text">
              {{ results.primaryType }}
            </span>
          </v-avatar>
        </div>
        <h2 class="text-h4 font-weight-bold mb-2">
          {{ primaryDescription.name }}
        </h2>
        <p class="text-h6 text-grey-darken-1 mb-4">
          {{ primaryDescription.shortDescription }}
        </p>
        <v-chip 
          :color="primaryDescription.color" 
          variant="tonal"
          size="large"
        >
          Votre type principal
        </v-chip>
      </v-card-text>
    </v-card>

    <!-- Score Bars -->
    <v-card class="scores-card mb-6" elevation="2">
      <v-card-title class="text-h6">
        <v-icon start>mdi-chart-bar</v-icon>
        Vos scores DISC
      </v-card-title>
      <v-card-text>
        <div 
          v-for="item in sortedScores" 
          :key="item.type"
          class="score-item mb-4"
        >
          <div class="d-flex justify-space-between align-center mb-1">
            <div class="d-flex align-center">
              <v-avatar 
                :color="allDescriptions[item.type].color" 
                size="32"
                class="mr-2"
              >
                <span class="text-body-2 font-weight-bold">{{ item.type }}</span>
              </v-avatar>
              <span class="text-body-1 font-weight-medium">
                {{ allDescriptions[item.type].name }}
              </span>
            </div>
            <span class="text-body-2 font-weight-bold">
              {{ results.percentages[item.type] }}%
            </span>
          </div>
          <v-progress-linear
            :model-value="results.percentages[item.type]"
            :color="allDescriptions[item.type].color"
            height="12"
            rounded
          />
        </div>
      </v-card-text>
    </v-card>

    <!-- Detailed Description -->
    <v-card class="description-card mb-6" elevation="2">
      <v-card-title class="text-h6">
        <v-icon start>mdi-account-details</v-icon>
        Profil détaillé : {{ primaryDescription.name }}
      </v-card-title>
      <v-card-text>
        <p class="text-body-1 mb-6">
          {{ primaryDescription.fullDescription }}
        </p>

        <v-row>
          <!-- Strengths -->
          <v-col cols="12" md="6">
            <div class="strengths-section">
              <h4 class="text-subtitle-1 font-weight-bold mb-3 d-flex align-center">
                <v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
                Points forts
              </h4>
              <v-list density="compact" class="bg-transparent">
                <v-list-item 
                  v-for="(strength, index) in primaryDescription.strengths" 
                  :key="index"
                  class="px-0"
                >
                  <template #prepend>
                    <v-icon color="success" size="small">mdi-plus</v-icon>
                  </template>
                  <v-list-item-title class="text-body-2">
                    {{ strength }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </div>
          </v-col>

          <!-- Challenges -->
          <v-col cols="12" md="6">
            <div class="challenges-section">
              <h4 class="text-subtitle-1 font-weight-bold mb-3 d-flex align-center">
                <v-icon color="warning" class="mr-2">mdi-alert-circle</v-icon>
                Points d'amélioration
              </h4>
              <v-list density="compact" class="bg-transparent">
                <v-list-item 
                  v-for="(challenge, index) in primaryDescription.challenges" 
                  :key="index"
                  class="px-0"
                >
                  <template #prepend>
                    <v-icon color="warning" size="small">mdi-minus</v-icon>
                  </template>
                  <v-list-item-title class="text-body-2">
                    {{ challenge }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- All Types Overview -->
    <v-card class="all-types-card mb-6" elevation="2">
      <v-card-title class="text-h6">
        <v-icon start>mdi-view-grid</v-icon>
        Les 4 types DISC
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col 
            v-for="type in ['D', 'I', 'S', 'C']" 
            :key="type"
            cols="12" 
            sm="6"
          >
            <v-card 
              variant="outlined"
              :class="{ 'primary-highlight': type === results.primaryType }"
              :style="type === results.primaryType ? { borderColor: allDescriptions[type].color, borderWidth: '2px' } : {}"
            >
              <v-card-text class="pa-3">
                <div class="d-flex align-center mb-2">
                  <v-avatar 
                    :color="allDescriptions[type].color" 
                    size="36"
                    class="mr-2"
                  >
                    <span class="text-body-1 font-weight-bold">{{ type }}</span>
                  </v-avatar>
                  <span class="text-body-1 font-weight-bold">
                    {{ allDescriptions[type].name }}
                  </span>
                  <v-chip 
                    v-if="type === results.primaryType"
                    size="x-small"
                    color="primary"
                    class="ml-auto"
                  >
                    Vous
                  </v-chip>
                </div>
                <p class="text-body-2 text-grey-darken-1 mb-0">
                  {{ allDescriptions[type].shortDescription }}
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Action Buttons -->
    <div class="actions text-center mt-8">
      <v-btn
        color="primary"
        size="large"
        variant="outlined"
        @click="$emit('restart')"
        rounded="lg"
        class="mr-4"
      >
        <v-icon start>mdi-refresh</v-icon>
        Refaire le test
      </v-btn>
      <v-btn
        color="primary"
        size="large"
        @click="shareResults"
        rounded="lg"
      >
        <v-icon start>mdi-share-variant</v-icon>
        Partager
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  results: {
    type: Object,
    required: true
  }
})

defineEmits(['restart'])

const primaryDescription = computed(() => props.results.primaryDescription)
const allDescriptions = computed(() => props.results.allDescriptions)
const sortedScores = computed(() => props.results.sortedTypes)

function shareResults() {
  const text = `Mon profil DISC : ${primaryDescription.value.name} (${props.results.primaryType})\n${primaryDescription.value.shortDescription}`
  
  if (navigator.share) {
    navigator.share({
      title: 'Mon résultat au Test DISC',
      text: text,
      url: window.location.href
    }).catch(() => {
      // Fallback to clipboard
      copyToClipboard(text)
    })
  } else {
    copyToClipboard(text)
  }
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Résultat copié dans le presse-papiers !')
  }).catch(() => {
    alert('Impossible de partager les résultats.')
  })
}
</script>

<style scoped>
.results-display {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.primary-type-card {
  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
}

.type-badge {
  display: inline-block;
}

.score-item:last-child {
  margin-bottom: 0 !important;
}

.primary-highlight {
  background-color: rgba(25, 118, 210, 0.05);
}

.v-avatar span {
  color: white;
}
</style>
