<template>
  <div class="sidebar">
    <section>
      <!-- Top Region -->
      <div class="bg-[#29323C] p-5">
        <h1 class="text-primary-white text-2xl">Logo</h1>
      </div>

      <div class="p-5">
        <!-- Layers -->
        <div class="mb-8">
          <h4 class="caption">Layers</h4>

          <el-select v-model="activeLayer" class="m-2" placeholder="Select" size="large">
            <el-option
              v-for="layer in layers"
              :key="layer.id"
              :label="layer.label"
              :value="layer.id"
            />
          </el-select>
        </div>

        <div class="mb-5">
          <h4 class="caption mb-2">Coordinates</h4>

          <label for="latitude" class="text-primary-white block pb-1">Latitude</label>
          <input
            id="latitude"
            type="text"
            class="h-10 mb-4"
            :class="{ invalid: v$.latitude.$error }"
            v-model="data.latitude"
          />

          <label for="longitude" class="text-primary-white block pb-1">Longitude</label>
          <input
            id="longitude"
            type="text"
            class="h-10"
            :class="{ invalid: v$.longitude.$error }"
            v-model="data.longitude"
          />

          <div class="mt-5">
            <button
              class="h-10 bg-[#6877D5] rounded-[4px] text-sm w-full text-primary-white"
              @click="fetchData"
            >
              Fetch Data
            </button>
          </div>
        </div>
      </div>
    </section>

    <div class="px-5 pb-32">
      <button
        class="flex items-center gap-2 text-[#F83030] text-lg"
        @click="logout"
        :disabled="loading"
      >
        <span> Log Out</span>
        <Logout />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import { useStorage } from '@vueuse/core'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { type LocationData } from '@/types/authInterface'
import { useAuthentication } from '@/composables/useAuth'
import layers from '@/lib/mapLayers'

const { logout } = useAuthentication()

const emit = defineEmits(['fetchData'])
const props = defineProps<{ loading: boolean; data: LocationData }>()

const { data } = toRefs(props)
const activeLayer = useStorage('activeLayer', 3, sessionStorage)

const validations = {
  latitude: { required },
  longitude: { required }
}

const v$ = useVuelidate(validations, data.value)

const fetchData = async () => {
  const isFormCorrect = await v$.value.$validate()
  if (!isFormCorrect) return

  emit('fetchData', data.value)
}
</script>

<style scoped lang="scss">
.sidebar {
  @apply w-[320px] bg-primary-black m-6 flex flex-col justify-between;
  height: calc(100vh - 64px);

  .caption {
    @apply text-xl text-primary-white pb-3;
  }
}
</style>
