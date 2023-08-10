<template>
  <header>
    <LangSwitch v-model="isES" @switch="onSwitch" />
  </header>
  <PortfolioContent :isES="isES" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import PortfolioContent from './components/PortfolioContent.vue'
import 'animate.css'
import LangSwitch from './components/molecules/LangSwitch.vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  components: { PortfolioContent, LangSwitch },
  setup() {
    const isES = ref(true)
    const { t, locale } = useI18n({ useScope: 'global' })

    onMounted(() => {
      const storedIsES = localStorage.getItem('isES')
      if (storedIsES !== null) {
        isES.value = JSON.parse(storedIsES)
        locale.value = isES.value ? 'es' : 'en'
      }
    })

    const onSwitch = () => {
      isES.value = !isES.value
      localStorage.setItem('isES', JSON.stringify(isES.value))
      locale.value = isES.value ? 'es' : 'en'
    }

    return { isES, onSwitch, t }
  }
})
</script>

<style scoped lang="sass">
header
  position: absolute
  z-index: 2
  top: 1rem
  right: 1rem
</style>
