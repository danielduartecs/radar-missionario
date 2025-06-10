<template>
  <v-app>
    <v-main class="d-flex flex-column align-center justify-start" style="min-height: 100vh;">
      <img
        src="@/assets/logo.png"
        alt="Radar Missionário"
        style="max-width: 220px; margin: 40px auto 24px; display: block"
      />
      <v-card class="pa-6 mx-auto" style="max-width: 42rem;" elevation="16" rounded="lg">
        <router-view />
      </v-card>
      <img
        src="@/assets/logo-juvep.png"
        alt="Radar Missionário"
        style="max-width: 220px; margin: 40px auto 0px; display: block"
      />
      <div class="d-flex justify-center gap-2 mb-4">
        <v-btn variant="flat" to="/" size="x-small">Início</v-btn>
        <v-btn variant="flat" to="/politica" size="x-small">Política de Privacidade</v-btn>
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
</script>
