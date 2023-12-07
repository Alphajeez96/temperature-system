<template>
  <div class="section-holdder">
    <div class="form-holder">
      <div class="text-center text-primary-white">
        <h2 class="text-2xl md:text-4xl">Log In</h2>
        <p class="pt-2 text-base md:text-lg">Nice to see you again! Log In with your details.</p>
      </div>

      <form class="mt-10" @submit.prevent="handleLogin">
        <!-- Email Here -->
        <div class="form-group">
          <input
            type="email"
            :class="{ invalid: v$.email.$error }"
            placeholder="Email Address"
            v-model="payload.email"
          />
        </div>

        <!-- Password Here -->
        <div class="form-group">
          <input
            :type="isPassword ? 'password' : 'text'"
            :class="{ invalid: v$.password.$error }"
            placeholder="Password"
            v-model="payload.password"
          />

          <span class="absolute top-4 right-4" @click="isPassword = !isPassword">
            <Eye v-if="isPassword" />
            <EyeSlash v-else />
          </span>
        </div>

        <a href="#">Forgot Password?</a>

        <button :disabled="v$.$invalid || loading">
          <img v-if="loading" src="@/assets/images/button-loader.svg" alt="loader" />
          <span v-else> Login </span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { type AuthPayload } from '@/types/authInterface'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { useAuthentication } from '@/composables/useAuth'

const { loginUser, loading } = useAuthentication()

const isPassword: Ref<boolean> = ref(true)
const payload: Ref<AuthPayload> = ref({
  email: 'prince@amini.ai',
  password: 'password@123'
})

const validations = {
  email: { required, email },
  password: { required }
}

const v$ = useVuelidate(validations, payload.value)

const handleLogin = async () => {
  const isFormCorrect = await v$.value.$validate()
  if (!isFormCorrect) return

  loginUser(payload.value)
}
</script>

<style scoped lang="scss">
.section-holdder {
  @apply h-screen flex justify-center items-center flex-col bg-auth-background bg-no-repeat bg-cover bg-center;
  .form-holder {
    @apply bg-primary-black rounded-xl md:w-9/12 lg:w-[759px] p-6 md:p-12 lg:p-24 filter backdrop-blur-xl;

    .form-group {
      @apply mb-3 relative;

      input {
        @apply rounded-[4px] w-full h-14 p-4 focus:outline-none text-sm md:text-base text-primary-white transition-all duration-500;
        background: rgba(255, 255, 255, 0.1);

        &.invalid {
          @apply border-2 border-primary-red;
        }

        &:focus {
          outline: none;
        }
      }
    }

    a {
      @apply text-sm md:text-base text-primary-white text-right block;
    }

    button {
      @apply mt-6 h-14 bg-[#6877D5] rounded-[4px] text-base md:text-xl text-primary-white w-full p-4 focus:outline-none flex justify-center;

      &:disabled {
        @apply cursor-not-allowed opacity-50;
      }
    }
  }
}
</style>
