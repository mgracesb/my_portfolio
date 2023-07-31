<template>
  <div class="hero">
    <div class="hero__wrapper">
      <div class="animate__animated animate__jackInTheBox animate__slow">
        <p class="hero__header__text">Hello,</p>
      </div>
      <div class="hero__content">
        <div class="hero__spinner">
          <SpiningName />
        </div>

        <div class="animate__animated animate__jackInTheBox">
          <div class="hero__content__card">
            <Card />
          </div>
        </div>
        <div class="hero__content__information">
          <h1 class="animate__animated animate__fadeIn animate__delay-1s hero__content__information__title">
            I'm Mercy Shyu,
          </h1>
          <p class="animate__animated animate__fadeIn animate__delay-2s hero__content__information__description">
            a Frontend Developer driven by the art of crafting <br />
            user friendly and visually engaging web and mobile applications with a focus on
            responsive design.
          </p>
          <p class="animate__animated animate__fadeIn animate__delay-3s hero__content__information__description">
            I have been honing my skills in HTML5, CSS3, and JavaScript, working with frameworks
            like ReactJs, Vue, and React Native for seamless web and mobile development experiences
          </p>
          <p class="animate__animated animate__fadeIn animate__delay-4s hero__content__information__description">
            Feel free to CHECK MY PORTFOLIO!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from './molecules/Card.vue'
import SpiningName from './molecules/SpiningName.vue'

export default defineComponent({
  components: { Card, SpiningName },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="sass">
@import "@/styles/_colors.sass"
@import "@/styles/_base.sass"
@import "@/styles/_fonts.sass"


.hero
  position: relative
  color: $c-clear
  display: flex
  flex-direction: column

  &__spinner
    position: absolute
    width: 28.5rem
    height: 16.5rem
    bottom: 0
    left: 18.5rem

  &__wrapper
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    display: flex
    flex-direction: column
    width: 100vw
    height: 100vh
    padding: 4rem


  &__header
    &__text
      @include titleDefault
      width: 15rem
      color: $c-clear
      font-family: $font-title

  &__content
    position: relative
    padding-left: 5rem
    padding-top: 3rem
    height: 100%
    width: 80%
    display: flex
    flex-direction: column
    align-items: flex-start

    &__card
      width: 28.5rem
      height: 20rem
      transform: rotate(-4deg)

    &__information
      position: absolute
      top: 5.5rem
      left: 7rem
      display: flex
      flex-direction: column
      transform: rotate(-3.9deg)

      &__title
        @include textStandard

      &__description
        @include textDefault
        width: 24rem
        margin-top: 1rem
</style>
