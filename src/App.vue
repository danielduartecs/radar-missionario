<template>
  <v-app>
    <v-main class="d-flex flex-column align-center justify-start" style="min-height: 100vh;">
      <img
        src="@/assets/logo-juvep.png"
        alt="Radar Missionário"
        style="max-width: 220px; margin: 40px auto 24px; display: block"
      />
      <Quiz />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Quiz from './components/Quiz.vue'
</script>
