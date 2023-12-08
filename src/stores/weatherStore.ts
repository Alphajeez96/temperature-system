import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import { type LocationData } from '@/types/authInterface'

export const useWeatherStore = defineStore(
  'weatherStore',
  () => {
    const locationData: Ref<LocationData> = ref({
      latitude: 0,
      longitude: 0
    })

    const weatherData: Ref<Record<string, any>> = ref({})
    return { locationData, weatherData }
  },

  { persist: true }
)
