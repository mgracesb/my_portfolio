<template>
  <div class="container">
    <div class="container__photo">
      <img class="container__photo__item--one" src="@/assets/fish_one.png" alt="fish_decoration" />
      <img class="container__photo__item--two" src="@/assets/fish_two.png" alt="fish_decoration" />
      <img
        class="container__photo__item--three"
        src="@/assets/fish_three.png"
        alt="fish_decoration"
      />

      <img class="container__photo__item" src="@/assets/mercy.png" alt="Mercy Shyu's picture" />
    </div>

    <vue-scroll-snap :fullscreen="true">
      <div class="item">
        <Hero />
      </div>
      <div class="item">
        SLIDE 2
        <p>Portfolio</p>
      </div>
      <div class="item">
        SLIDE 3
        <p>Contact</p>
        <p></p>
      </div>
    </vue-scroll-snap>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VueScrollSnap from 'vue-scroll-snap'
import Hero from './Hero.vue'

export default defineComponent({
  components: { VueScrollSnap, Hero }
})
</script>

<style scoped lang="sass">
@import "@/styles/_colors.sass"
@import "@/styles/_animations.sass"

.container
  position: relative
  width: 100vw
  height: 100vh
  // background: linear-gradient(-45deg, $c-dark--transparency, $c-purple--transparency, $c-turquoise--transparency,$c-blue--transparency, $c-pink--transparency)
  // background-size: 200% 200%
  // animation: gradient 15s ease infinite
  background-color: $c-dark

  &__photo
    position: sticky
    top: 0
    left: 0
    width: 100%
    height: 100%
    display: flex
    flex-direction: row
    justify-content: flex-end
    align-items: flex-end

    &__item
      width: auto
      height: 85%
      &--one
        position: absolute
        top: 5%
        left: 55%
        width: 13%
        height: auto
        animation: float 4s ease-in-out infinite
      &--two
        position: absolute
        top: 25%
        right: 5%
        width: 15%
        height: auto
        animation: float 6s ease-in-out infinite
      &--three
        position: absolute
        bottom: -8%
        left: 37%
        width: 23%
        height: auto
        transform: rotateY(180deg) rotate(12deg)
        animation: float 8s ease-in-out infinite

.item
   min-height: 500px

.scroll-snap-container
  height: 500px
  width: 500px


</style>
