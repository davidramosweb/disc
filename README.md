# DISC App (Vue 3 + Vuetify + Vite)

Web app to run a **DISC personality test** using a **situation-based** questionnaire:

- **28 situational questions** (work scenarios).
- Each question has **4 answers** (A, B, C, D).
- Each answer adds **1 point** to one of the **DISC** styles (D / I / S / C).
- At the end, the app shows:
  - **Primary type** (highest score)
  - **Scores per type** and percentages
  - A **detailed profile description**

## Data source (questions, answers, and scoring map)

The questionnaire content and the scoring mapping are based on:

- [Situation-Based DISC Assessment (PDF)](https://www.teamazing.com/wp-content/uploads/2024/08/Situation-Based_DISC_Assessment.pdf)

This app includes a **natural French adaptation** of the questions and answers, while keeping the same structure and DISC mapping.

## How scoring works

- For each question, the user selects one option (A/B/C/D).
- Each option maps to a specific DISC type (D/I/S/C) according to the scoring table in the PDF.
- Scores are the counts per type:
  - `D = number of answers mapped to Dominance`
  - `I = number of answers mapped to Influence`
  - `S = number of answers mapped to Steadiness`
  - `C = number of answers mapped to Conscientiousness`

Relevant code:
- Questionnaire data: `src/data/questions.js`
- Scoring logic: `src/utils/scoring.js`

## Local development

```bash
npm install
npm run dev
```

## Tests

```bash
npm run test:run
```

## Build

```bash
npm run build
```

## Deploy on Netlify

This project includes Netlify configuration:

- `netlify.toml` (build + SPA redirects)
- `public/_redirects` (backup redirects)

Expected settings:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
