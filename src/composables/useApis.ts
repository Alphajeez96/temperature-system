import { ref, type Ref } from 'vue'
import $toast from '@/plugins/notificationToast'

export const useApis = () => {
  const loading: Ref<boolean> = ref(false)

  const fetchWeatherData = async (lat: number, lon: number): Promise<any> => {
    try {
      loading.value = true
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c8de53bec21fd6904f961b4f2759445a&units=metric`

      return new Promise((resolve, reject) => {
        fetch(apiUrl)
          .then(async (response) => {
            const data = await response.json()
            resolve(data)

            if (data.cod === '400') {
              $toast.error(data.message)
            }
          })
          .catch((error) => {
            $toast.error(error.message)
            reject(error)
          })
      })
    } finally {
      loading.value = false
    }
  }

  const getUserLocation = async () => {
    try {
      loading.value = true

      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude: lat, longitude: lon } = position.coords
            resolve({ latitude: lat, longitude: lon })
          },
          (error) => {
            $toast.error(error.message)
            loading.value = false
            reject(error)
          }
        )
      })
    } catch (error) {
    } finally {
      loading.value = false
    }
  }

  return { loading, fetchWeatherData, getUserLocation }
}
