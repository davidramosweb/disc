<template>
  <v-container class="home-container fill-height" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" md="8" lg="6">
        <!-- Hero Section -->
        <div class="text-center mb-8">
          <div class="disc-logo mb-6">
            <v-avatar 
              v-for="type in discTypes" 
              :key="type.letter"
              :color="type.color" 
              size="64"
              class="mx-1"
            >
              <span class="text-h5 font-weight-bold">{{ type.letter }}</span>
            </v-avatar>
          </div>
          <h1 class="text-h3 font-weight-bold mb-4">
            Test de Personnalité DISC
          </h1>
          <p class="text-h6 text-grey-darken-1 mb-6">
            Découvrez votre profil comportemental en quelques minutes
          </p>
        </div>

        <!-- Info Card -->
        <v-card class="info-card mb-8" elevation="2">
          <v-card-text class="pa-6">
            <h2 class="text-h5 font-weight-bold mb-4 text-center">
              Qu'est-ce que le modèle DISC ?
            </h2>
            <p class="text-body-1 mb-4">
              Le modèle DISC est un outil d'évaluation comportementale qui identifie 
              quatre styles de personnalité principaux. Il vous aide à mieux comprendre 
              vos forces, vos motivations et votre façon de communiquer avec les autres.
            </p>
            
            <v-row class="mt-6">
              <v-col 
                v-for="type in discTypes" 
                :key="type.letter"
                cols="6" 
                sm="3"
              >
                <div class="type-preview text-center">
                  <v-avatar 
                    :color="type.color" 
                    size="48"
                    class="mb-2"
                  >
                    <span class="text-h6 font-weight-bold">{{ type.letter }}</span>
                  </v-avatar>
                  <div class="text-body-2 font-weight-medium">{{ type.name }}</div>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Test Info -->
        <v-card class="test-info-card mb-8" variant="outlined">
          <v-card-text class="pa-6">
            <v-row>
              <v-col cols="12" sm="4" class="text-center">
                <v-icon color="primary" size="40" class="mb-2">mdi-clock-outline</v-icon>
                <div class="text-h6 font-weight-bold">3-5 min</div>
                <div class="text-body-2 text-grey">Durée du test</div>
              </v-col>
              <v-col cols="12" sm="4" class="text-center">
                <v-icon color="primary" size="40" class="mb-2">mdi-help-circle-outline</v-icon>
                <div class="text-h6 font-weight-bold">16 questions</div>
                <div class="text-body-2 text-grey">À répondre</div>
              </v-col>
              <v-col cols="12" sm="4" class="text-center">
                <v-icon color="primary" size="40" class="mb-2">mdi-chart-pie</v-icon>
                <div class="text-h6 font-weight-bold">Résultat détaillé</div>
                <div class="text-body-2 text-grey">À la fin</div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- CTA Button -->
        <div class="text-center">
          <v-btn
            color="primary"
            size="x-large"
            :to="{ name: 'Test' }"
            rounded="lg"
            elevation="2"
            class="start-btn"
          >
            <v-icon start size="large">mdi-play-circle</v-icon>
            Commencer le test
          </v-btn>
        </div>

        <!-- Footer Note -->
        <p class="text-caption text-grey text-center mt-8">
          Basé sur le test ODAT (Open DISC Assessment Test) de OpenPsychometrics.
          <br>
          Ce test est gratuit et vos réponses restent confidentielles.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const discTypes = [
  { letter: 'D', name: 'Dominance', color: '#E53935' },
  { letter: 'I', name: 'Influence', color: '#FFB300' },
  { letter: 'S', name: 'Stabilité', color: '#43A047' },
  { letter: 'C', name: 'Conformité', color: '#1E88E5' }
]
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%);
}

.disc-logo {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.disc-logo .v-avatar span {
  color: white;
}

.info-card {
  border-radius: 16px;
}

.test-info-card {
  border-radius: 16px;
}

.type-preview .v-avatar span {
  color: white;
}

.start-btn {
  padding: 16px 48px !important;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  transition: transform 0.2s ease;
}

.start-btn:hover {
  transform: scale(1.05);
}
</style>
