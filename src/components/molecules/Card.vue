<template>
  <div class="Card">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="sass">
.Card
  width: 100%
  height: 100%
  background: rgba(255, 255, 255, 0.2)
  border-radius: 16px
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1)
  backdrop-filter: blur(5px)
  -webkit-backdrop-filter: blur(5px)
  border: 1px solid rgba(255, 255, 255, 0.3)
</style>
