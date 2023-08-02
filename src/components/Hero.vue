<template>
  <div class="hero">
    <div class="hero__wrapper">
      <div class="animate__animated animate__jackInTheBox animate__slow">
        <p class="hero__header__text">Hello,</p>
      </div>
      <div class="hero__content">
        <div class="animate__animated animate__jackInTheBox animate__delay-1s hero__content__card__container">
          <div class="hero__content__card">
            <Card />
          </div>
        </div>
        <div class="hero__content__information">
          <h1
            class="animate__animated animate__fadeIn animate__delay-2s hero__content__information__title"
          >
            I'm Mercy Shyu,
          </h1>
          <p
            class="animate__animated animate__fadeIn animate__delay-2s animate__slow hero__content__information__description"
          >
            a Frontend Developer driven by the art of crafting <br />
            user friendly and visually engaging web and mobile applications with a focus on
            responsive design.
          </p>
          <p
            class="animate__animated animate__fadeIn animate__delay-3s hero__content__information__description"
          >
            I have been honing my skills in HTML5, CSS3, and JavaScript, working with frameworks
            like Vue, ReactJs and React Native for seamless web and mobile development experiences.
          </p>
          <p
            class="animate__animated animate__fadeIn animate__delay-3s animate__slow hero__content__information__description"
          >
            Some of the projects I had the privilage to contribute to are:
          </p>

          <div class="animate__animated animate__fadeIn animate__delay-4s hero__projects">
            <img src="@/assets/projects/sonora.svg" class="hero__projects__logo" />
            <img src="@/assets/projects/vidasprime.svg" class="hero__projects__logo" />
            <img src="@/assets/projects/cf.svg" class="hero__projects__logo" />
            <img src="@/assets/projects/o2.svg" class="hero__projects__logo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from './molecules/Card.vue'

export default defineComponent({
  name: 'HeroSection',
  components: { Card },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="sass">
@import "@/styles/_colors.sass"
@import "@/styles/_base.sass"
@import "@/styles/_fonts.sass"
@import "@/styles/_breakpoints.sass"


.hero
  position: relative
  color: $c-clear
  display: flex
  flex-direction: column

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
    padding-left: 2rem
    padding-top: 2rem
    height: 100%
    width: 80%
    display: flex
    flex-direction: column
    align-items: flex-start

    &__card
      width: 30.5rem
      height: 24rem
      transform: rotate(-4deg)

    &__information
      position: absolute
      top: 4.5rem
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
        
  &__projects
    margin-top: 1rem
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: flex-end

    &__logo
      height: 1.5rem
      width: auto
      &:first-child
        height: 1rem

  @include tablet-max
    &__wrapper
      padding: 1rem

    &__header
      &__text
        @include titleSmall

    &__content
      width: 100%
      padding-left: 0

      &__card
        width: 100%
        height: 30rem
        transform: rotate(0deg)

        &__container
          width: 100%

      &__information
        left: 2rem
        transform: rotate(0deg)

        &__description
          max-width: 20rem

    &__projects
      margin-top: 2rem
      flex-wrap: wrap
      justify-content: space-around
      align-items: flex-start

      &__logo
        margin-bottom: 0.25rem
        height: 2rem
        width: auto
        &:first-child
          height: 1.5rem
</style>
