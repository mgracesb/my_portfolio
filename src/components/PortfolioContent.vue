<template>
  <div class="container">
    <vue-scroll-snap :fullscreen="true">
      <div class="item">
        SLIDE 1
        <p>HELLo</p>
      </div>
      <div class="item">
        SLIDE 2
        <p>dksjndksjfksjkfns</p>
      </div>
    </vue-scroll-snap>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VueScrollSnap from 'vue-scroll-snap'

export default defineComponent({
  components: { VueScrollSnap }
})
</script>

<style scoped lang="sass">
.item
   /* Set the minimum height of the items to be the same as the height of the scroll-snap-container.*/
   min-height: 500px
   &:first-child
    background: linear-gradient(-45deg, #ECA3F5, #FDBAF8, #B0EFEB, #EDFFA9)
    background-size: 400% 400%
    animation: gradient 15s ease infinite
   &:nth-child(2)
    background: linear-gradient(45deg, #FAAFFF, #BBCFFF, #9399FF, #192965)
    background-size: 400% 400%
    animation: gradient 15s ease infinite

.scroll-snap-container
  height: 500px
  width: 500px

@keyframes gradient
  0%
    background-position: 0% 50%
  50%
    background-position: 100% 50%
  100%
    background-position: 0% 50%
</style>
