<template>
  <section class="relative">
    <aside class="absolute top-0 z-[500]">
      <SideBar :loading="loading" :data="locationData" @fetch-data="fetchData" />
    </aside>

    <div id="map"></div>
  </section>
</template>

<script setup lang="ts">
import { ref, type Ref, onMounted, watch, toRef } from 'vue'
import { useStorage } from '@vueuse/core'
import { useApis } from '@/composables/useApis'
import { useWeatherStore } from '@/stores/weatherStore'
import { type LocationData } from '@/types/authInterface'
import { getLocalTimeFromWeatherData } from '@/lib/utils'
import L from 'leaflet'
import layers from '@/lib/mapLayers'
import SideBar from '@/widgets/SideBar.vue'

const { loading, fetchWeatherData, getUserLocation } = useApis()

const map: Ref<Record<string, any>> = ref({})
const locationData = toRef(useWeatherStore(), 'locationData')
const storedLayer = useStorage('activeLayer', 3, sessionStorage)

watch(storedLayer, () => {
  setMapLayer()
})

onMounted(() => {
  handleUserLocation()
})

const handleUserLocation = async () => {
  const userLocationData = (await getUserLocation()) as LocationData
  const { latitude, longitude } = userLocationData

  if (userLocationData) {
    initMap(latitude, longitude)
  }
}

const initMap = async (latitude: number, longitude: number) => {
  if (map.value && map.value.remove) map.value.remove()

  const weatherData = await fetchWeatherData(latitude, longitude)
  const time = getLocalTimeFromWeatherData(weatherData.dt, weatherData.timezone)

  locationData.value = { latitude, longitude }
  map.value = L.map('map').setView([latitude, longitude], 5)
  map.value.zoomControl.setPosition('topright')

  setMapLayer()
  const marker = L.marker([latitude, longitude]).addTo(map.value)
  marker
    .bindPopup(`<b>Temperature: ${weatherData.main.temp} °C</b><br> <br>Time: ${time}`)
    .openPopup()
}

const setMapLayer = () => {
  const activeLayer = layers.find((layer) => layer.id === storedLayer.value)

  if (activeLayer) {
    L.tileLayer(activeLayer.url, {
      maxZoom: 18,
      attribution: activeLayer.attribution,
      ext: activeLayer.ext || ''
    }).addTo(map.value)
  }
}

const fetchData = (data: LocationData) => {
  const { latitude, longitude } = data
  initMap(+latitude, +longitude)
}
</script>

<style>
@import 'leaflet/dist/leaflet.css';

#map {
  @apply bg-[#112330] h-screen;
}
</style>
