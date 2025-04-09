<!-- src/components/WeldingControl.vue -->
<template>
  <div style="padding: 1rem; font-family: sans-serif">
    <h2>Mesure de courant</h2>

    <div v-if="currentMeasure" style="margin-bottom: 0.5rem">
      <strong>{{ currentMeasure.value.toFixed(2) }} A</strong>
      <div style="font-size: 0.9rem; color: gray">{{ currentMeasure.dateStr }}</div>
    </div>
    <div v-else style="margin-bottom: 0.5rem">En attente de mesure...</div>

    <RealtimeChart label="Courant" unit="A" color="rgb(75, 192, 192)" :history="currentHistory" />

    <h2>Mesure de vitesse</h2>
    <div v-if="speedMeasure" style="margin-bottom: 0.5rem">
      <strong>{{ speedMeasure.value.toFixed(2) }} mm/s</strong>
      <div style="font-size: 0.9rem; color: gray">{{ speedMeasure.dateStr }}</div>
    </div>
    <div v-else style="margin-bottom: 0.5rem">En attente de mesure...</div>

    <RealtimeChart label="Vitesse" unit="mm/s" color="rgb(255, 99, 132)" :history="speedHistory" />

    <button @click="sendCommand('start')" style="margin-right: 1rem">▶️ Start</button>
    <button @click="sendCommand('stop')">⏹️ Stop</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { io, Socket } from 'socket.io-client'
import axios from 'axios'
import RealtimeChart from './RealtimeChart.vue'

export interface MeasureData {
  value: number
  timestamp: number
  dateStr: string
}

const currentMeasure = ref<MeasureData | null>(null)
const speedMeasure = ref<MeasureData | null>(null)

// Historique des mesures
const currentHistory = ref<MeasureData[]>([])
const speedHistory = ref<MeasureData[]>([])

let socket: Socket

const pushHistory = (history: typeof currentHistory, data: MeasureData) => {
  history.value.push(data)
  if (history.value.length > 20) history.value.shift()
}

// Fonction utilitaire partagée pour traiter les données
const handleMeasureEvent = (
  event: 'measure' | 'speed',
  data: { value: number; timestamp: number },
) => {
  if (typeof data?.value === 'number' && typeof data?.timestamp === 'number') {
    const formatted: MeasureData = {
      ...data,
      dateStr: new Date(data.timestamp).toLocaleString('fr-FR'),
    }
    if (event === 'measure') {
      currentMeasure.value = formatted
      // Ajout de la mesure à l'historique
      pushHistory(currentHistory, formatted)
    } else if (event === 'speed') {
      speedMeasure.value = formatted
      // Ajout de la mesure à l'historique
      pushHistory(speedHistory, formatted)
    }
    console.log(`📡 ${event} reçue :`, data)
  } else {
    console.error(`📡 Données invalides pour ${event}`, data)
  }
}

onMounted(() => {
  socket = io('http://localhost:3001') // adapte si le port est différent

  socket.on('connect', () => {
    console.log('✅ WebSocket connecté')
  })

  socket.on('measure', (data) => handleMeasureEvent('measure', data))
  socket.on('speed', (data) => handleMeasureEvent('speed', data))
  // socket.on('measure', (data: { value: number; timestamp: number }) => {
  //   if (data && typeof data.value === 'number' && typeof data.timestamp === 'number') {
  //     currentMeasure.value = {
  //       ...data,
  //       dateStr: new Date(data.timestamp).toLocaleString('fr-FR'),
  //     }
  //     console.log('📡 Mesure reçue via WebSocket :', data)
  //   } else {
  //     console.error('📡 Données de mesure invalides reçues', data)
  //     if (data) {
  //       console.log('data OK')
  //     }
  //     if (typeof data.value === 'number') {
  //       console.log('data.value OK')
  //     }
  //     if (typeof data.timestamp === 'number') {
  //       console.log('data.timestamp OK')
  //     }
  //   }
  // })

  socket.on('disconnect', () => {
    console.warn('🔌 WebSocket déconnecté')
  })
})

onBeforeUnmount(() => {
  if (socket) {
    socket.disconnect()
  }
})

const sendCommand = async (cmd: 'start' | 'stop') => {
  try {
    const res = await axios.post(`http://localhost:3001/welding/${cmd}`)
    console.log(`✅ Commande envoyée : ${cmd}`, res.data)
    alert(`✅ ${cmd.toUpperCase()} : ${JSON.stringify(res.data, null, 2)}`)
  } catch (err) {
    console.error(err)
    alert(`❌ Erreur lors de l'envoi de la commande ${cmd}`)
  }
}
</script>
