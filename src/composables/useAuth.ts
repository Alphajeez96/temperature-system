import { ref, type Ref } from 'vue'
import { useRouter } from 'vue-router'
import { type AuthPayload } from '@/types/authInterface'

export const useAuthentication = () => {
  const router = useRouter()

  const loading: Ref<boolean> = ref(false)

  const loginUser = async (payload: AuthPayload) => {
    try {
      loading.value = true

      // Server Response Time ~ Simulated
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Credentials Check ~ Simulated
      if (payload.email !== 'prince@amini.ai' || payload.password !== 'password@123') {
        throw new Error('Invalid email or password')
      }

      // Generate and store token
      const token = generateToken()
      sessionStorage.setItem('accessToken', token)

      router.push('/dashboard')
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  const generateToken = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'
    let token = ''

    for (let i = 0; i < 32; i++) {
      token += characters[Math.floor(Math.random() * characters.length)]
    }
    return token
  }

  return {
    loading,
    loginUser
  }
}
