<template>
  <div class="projects">
    <div class="projects__wrapper">
      <div class="animate__animated animate__jackInTheBox animate__slow">
        <p class="projects__header__text">Projects,</p>
      </div>
      <div class="projects__content">
        <div class="animate__animated animate__jackInTheBox animate__delay-1s">
          <div class="projects__content__card--first">
            <Card />
          </div>
        </div>
        <div class="animate__animated animate__jackInTheBox animate__delay-2s">
          <div class="projects__content__card--second">
            <Card>
              <div class="projects__spinner">
                <SpinningText />
              </div>
            </Card>
          </div>
        </div>
        <div class="projects__content__information--first">
          <h1
            class="animate__animated animate__fadeIn animate__delay-2s animate__slow projects__content__information__title"
          >
            Desescalada Covid-19
          </h1>
          <p
            class="animate__animated animate__fadeIn animate__delay-2s animate__slow projects__content__information__description"
          >
            descripcion
          </p>
        </div>
        <div class="projects__content__information--second">
          <h1
            class="animate__animated animate__fadeIn animate__delay-3s animate__slow projects__content__information__title"
          >
            Desescalada Covid-19
          </h1>
          <p
            class="animate__animated animate__fadeIn animate__delay-3s animate__slow projects__content__information__description"
          >
            descripcion
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import Card from './molecules/Card.vue'
import SpinningText from './molecules/SpinningText.vue'

export default defineComponent({
  components: { Card, SpinningText },
  setup() {
    onMounted(() => {
      console.log('mounted')
    })
    return {}
  }
})
</script>

<style scoped lang="sass">
@import "@/styles/_colors.sass"
@import "@/styles/_base.sass"
@import "@/styles/_fonts.sass"


.projects
  position: relative
  color: $c-clear
  display: flex
  flex-direction: column

  &__spinner
    padding-right: 5%
    padding-top: 5%
    position: absolute
    right: 0
    top: 0
    width: 28.5rem
    height: 16.5rem
    z-index: 2

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
      &--first
        width: 28.5rem
        height: 10rem
        transform: rotate(-4deg)
      &--second
        margin-top: 3rem
        margin-left: 5rem
        width: 28.5rem
        height: 10rem
        transform: rotate(4deg)

    &__information
      &--first
        position: absolute
        top: 4.5rem
        left: 7rem
        display: flex
        flex-direction: column
        transform: rotate(-3.9deg)
      &--second
        position: absolute
        top: 17.5rem
        left: 12.5rem
        display: flex
        flex-direction: column
        transform: rotate(3.9deg)

      &__title
        @include textStandard

      &__description
        @include textDefault
        width: 24rem
        margin-top: 1rem
</style>
