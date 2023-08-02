<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
  </header>
  <PortfolioContent />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PortfolioContent from './components/PortfolioContent.vue'
import 'animate.css'

export default defineComponent({
  components: { PortfolioContent }
})
</script>

<style scoped lang="sass">
header
  position: absolute
  z-index: 2
  line-height: 1.5
  height: 4rem
  top: 0
  right: 0


// @media (min-width: 1024px)
//   header
</style>
