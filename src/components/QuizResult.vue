<template>
  <div class="text-center my-8">
    <v-icon size="60" color="primary" class="mb-4">mdi-trophy</v-icon>
    <div class="text-h6 mb-1">Pontuação: <strong>{{ resultado.soma }}</strong></div>
    <div class="text-h5 font-weight-bold mb-4">Classificação: {{ resultado.classificacao }}</div>
    <v-btn color="secondary" variant="outlined" @click="$emit('reiniciar')" rounded="xl">
      Refazer Quiz
    </v-btn>
  </div>
</template>
<script setup lang="ts">
defineProps<{ resultado: { soma: number; classificacao: string } }>()
</script>
