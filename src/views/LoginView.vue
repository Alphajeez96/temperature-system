<template>
  <div class="section-holdder">
    <div class="form-holder">
      <div class="text-center text-primary-white">
        <h2 class="text-2xl md:text-4xl">Log In</h2>
        <p class="pt-2 text-base md:text-lg">Nice to see you again! Log In with your details.</p>
      </div>

      <form class="mt-10">
        <!-- Email Here -->
        <div class="form-group">
          <input type="email" placeholder="Email Address" v-model="payload.email" />
        </div>

        <!-- Password Here -->
        <div class="form-group">
          <input type="password" placeholder="Password" v-model="payload.password" />
        </div>

        <a href="#">Forgot Password?</a>

        <button>Login</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'

interface AuthPayload {
  email: string
  password: string
}

const payload: Ref<AuthPayload> = ref({
  email: '',
  password: ''
})
</script>

<style scoped lang="scss">
.section-holdder {
  @apply h-screen flex justify-center items-center flex-col bg-auth-background bg-no-repeat bg-cover bg-center;
  .form-holder {
    @apply bg-primary-black rounded-xl md:w-9/12 lg:w-[759px] p-6 md:p-12 lg:p-24 filter backdrop-blur-xl;

    .form-group {
      @apply mb-3 relative;

      input {
        @apply rounded-[4px] w-full h-14 p-4 focus:outline-none text-sm md:text-base text-primary-white;
        background: rgba(255, 255, 255, 0.1);
      }
    }

    a {
      @apply text-sm md:text-base text-primary-white text-right block;
    }

    button {
      @apply mt-6 h-14 bg-[#6877D5] rounded-[4px] text-base md:text-xl text-primary-white w-full p-4 focus:outline-none;
    }
  }
}
</style>
