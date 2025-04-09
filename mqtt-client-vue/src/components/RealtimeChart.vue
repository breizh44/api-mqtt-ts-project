<!-- src/components/RealtimeChart.vue -->
<template>
  <div>
    <Line :data="chartData" :options="chartOptions" :height="chartHeight" :width="chartWidth" />
  </div>
</template>

<script setup lang="ts">
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  CategoryScale,
} from 'chart.js'
import 'chartjs-adapter-date-fns'

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  CategoryScale,
)

import { computed } from 'vue'
import type { MeasureData } from './WeldingControl.vue'
import type { ChartOptions } from 'chart.js'

interface Props {
  label: string
  unit: string
  color: string
  history: MeasureData[]
}

const props = defineProps<Props>()

// Définir la taille du graphique
const chartWidth = 400 // largeur en pixels
const chartHeight = 200 // hauteur en pixels

const chartData = computed(() => ({
  labels: props.history.map((m) => new Date(m.timestamp)), // On utilise le timestamp pour les dates
  datasets: [
    {
      label: props.label,
      data: props.history.map((m) => m.value),
      borderColor: props.color,
      tension: 0.2,
      fill: false,
    },
  ],
}))

const chartOptions: ChartOptions<'line'> = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: props.unit,
      },
    },
    x: {
      type: 'time', // Correction du type pour l'axe des abscisses
      time: {
        unit: 'second', // Unité à afficher en secondes (pour des intervalles très courts)
        tooltipFormat: 'll HH:mm:ss', // Format de l'info-bulle (affiche la date entière)
        displayFormats: {
          second: 'HH:mm:ss', // Affichage des heures, minutes et secondes
        },
      },
      ticks: {
        maxTicksLimit: 10,
      },
    },
  },
}
</script>
