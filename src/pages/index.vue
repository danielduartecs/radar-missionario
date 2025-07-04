<template>

    <h2 class="text-h5 font-weight-bold mb-6" width="100%">Avaliação de Modelos Missionários segundo a Missiologia Contemporânea Crítica </h2>
    <blockquote><p class="blockquote">Este formulário permite avaliar propostas missionárias com base na Missiologia Contemporânea Crítica inspirada em Paul Hiebert. Responda cada critério conforme a realidade do projeto analisado. A pontuação final revelará o grau de alinhamento com uma Missiologia fiel às Escrituras e sensível à cultura.</p></blockquote>
    <div v-for="(pergunta, idx) in perguntas" :key="pergunta.id" class="my-8" v-if="!finalizado">
      <div class="mb-2 font-weight-bold text-body-1" style="color: #157ac3;">{{ idx + 1 }}. {{ pergunta.titulo }}</div>
      <div class="mb-2" style="color: #00A551;">{{ pergunta.descricao }}</div>
      <v-radio-group
        v-model="respostas[pergunta.id]"
        :mandatory="true"
        :disabled="finalizado"
      >
        <v-radio
          v-for="(opcao, i) in pergunta.opcoes"
          :key="i"
          :label="opcao.texto"
          :value="opcao.valor"
          class="mb-1"
        />
      </v-radio-group>
    </div>

    <v-btn
      :disabled="!podeFinalizar"
      @click="finalizarQuiz"
      color="primary"
      size="large"
      rounded="xl"
      class="w-100"
      v-if="!finalizado"
    >
      Calcular Resultado
    </v-btn>

    <QuizResult v-if="finalizado && resultado" :resultado="resultado" @reiniciar="reiniciarQuiz" />

</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { perguntas } from '@/data/quizData'
import QuizResult from '@/components/QuizResult.vue'

const respostas = ref<Record<number, number>>({})
const finalizado = ref(false)
const resultado = ref<{ soma: number, classificacao: string } | null>(null)

const podeFinalizar = computed(() =>
  perguntas.every(q => respostas.value[q.id] !== undefined)
)

function finalizarQuiz() {
  const soma = perguntas.reduce(
    (acc, q) => acc + (respostas.value[q.id] ?? 0), 0
  )
  let classificacao = ""
  if (soma >= 90) classificacao = "Altamente Alinhado"
  else if (soma >= 75) classificacao = "Alinhado com Ajustes"
  else if (soma >= 60) classificacao = "Parcialmente Alinhado"
  else if (soma >= 40) classificacao = "Fraco Alinhamento"
  else classificacao = "Não Recomendado"
  resultado.value = { soma, classificacao }
  finalizado.value = true
}
function reiniciarQuiz() {
  respostas.value = {}
  resultado.value = null
  finalizado.value = false
}
</script>

<style scoped>

</style>