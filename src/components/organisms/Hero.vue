<template>
  <div class="hero">
    <div class="hero__wrapper">
      <div class="animate__animated animate__jackInTheBox animate__slow">
        <p class="hero__header__text">{{ $t('sections.hello') }}</p>
      </div>
      <div class="hero__content">
        <div
          class="animate__animated animate__jackInTheBox animate__delay-1s hero__content__card__container"
        >
          <div class="hero__content__card">
            <Card />
          </div>
        </div>
        <div class="hero__content__information">
          <h1
            class="animate__animated animate__fadeIn animate__delay-2s hero__content__information__title"
          >
            {{ $t('hero.title') }}
          </h1>
          <p
            class="animate__animated animate__fadeIn animate__delay-2s animate__slow hero__content__information__description"
          >
            {{ $t('hero.description__one') }}
          </p>
          <p
            class="animate__animated animate__fadeIn animate__delay-3s hero__content__information__description"
          >
            {{ $t('hero.description__two') }}
          </p>
          <p
            class="animate__animated animate__fadeIn animate__delay-3s animate__slow hero__content__information__description"
          >
            {{ $t('hero.description__three') }}
          </p>

          <div class="animate__animated animate__fadeIn animate__delay-4s hero__projects">
            <img
              src="@/assets/projects/sonora.svg"
              class="hero__projects__logo"
              alt="sonora logo"
            />
            <img
              src="@/assets/projects/vidasprime.svg"
              class="hero__projects__logo"
              alt="vidasprime logo"
            />
            <img src="@/assets/projects/cf.svg" class="hero__projects__logo" alt="cf logo" />
            <img src="@/assets/projects/o2.svg" class="hero__projects__logo" alt="O2 logo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../molecules/Card.vue'

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
@import "@/styles/_text.sass"
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
    padding: 1rem
    padding-top: 3rem

  &__header
    &__text
      @include titleSmall
      width: 15rem
      color: $c-clear
      font-family: $font-title

  &__content
    width: 100%
    padding-left: 0
    position: relative
    padding-top: 2rem
    height: 100%
    display: flex
    flex-direction: column
    align-items: flex-start

    &__card
      width: 100%
      height: 30rem
      transform: rotate(0deg)

      &__container
        width: 100%

    &__information
      position: absolute
      top: 4.5rem
      left: 2rem
      display: flex
      flex-direction: column
      transform: rotate(0deg)

      &__title
        @include textStandard

      &__description
        @include textDefault
        max-width: 20rem
        margin-top: 1rem

  &__projects
    margin-top: 2rem
    flex-wrap: wrap
    display: flex
    flex-direction: row
    justify-content: space-around
    align-items: flex-start

    &__logo
      margin-bottom: 0.25rem
      height: 2rem
      width: auto
      &:first-child
        height: 1.5rem

  @include pc-min
    &__wrapper
      padding: 4rem

    &__header
      &__text
        @include titleDefault

    &__content
      width: 80%
      padding-left: 2rem

      &__card
        width: 30.5rem
        height: 24rem
        transform: rotate(-4deg)

      &__information
        left: 4.5rem
        transform: rotate(-3.9deg)

        &__description
          max-width: 24rem

    &__projects
      margin-top: 1rem
      justify-content: space-between
      align-items: flex-end

      &__logo
        height: 1.5rem
        &:first-child
          height: 1rem

  @include pc-xl
    &__content
      &__card
        width: 35rem
        height: 30rem

      &__information
        top: 5.5rem
        &__description
          max-width: 27rem

</style>
