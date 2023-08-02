<template>
  <div class="projects">
    <div class="projects__wrapper">
      <div class="animate__animated animate__jackInTheBox animate__slow">
        <p class="projects__header__text">Projects,</p>
      </div>
      <div class="projects__content">
        <div
          class="projects__content__card__container animate__animated animate__jackInTheBox animate__delay-1s"
        >
          <div class="projects__content__card--first">
            <Card />
          </div>
        </div>
        <div
          class="projects__content__card__container animate__animated animate__jackInTheBox animate__delay-2s"
        >
          <div class="projects__content__card--second">
            <Card>
              <div class="projects__state">WORK IN PROGRESS</div>
            </Card>
          </div>
        </div>
        <div class="projects__content__information--first">
          <h1
            class="animate__animated animate__fadeIn animate__delay-2s animate__slow projects__content__information__title"
          >
            <a
              class="projects__content__information__title__text"
              href="https://mgracesb.github.io/desescalada-covid/"
            >
              <span class="projects__content__information__title__icon">🦠</span> Desescalada Covid
            </a>
          </h1>
          <p
            class="animate__animated animate__fadeIn animate__delay-2s animate__slow projects__content__information__description"
          >
            Due to the situation of confinement caused by the coronavirus pandemic in 2020, the
            Government implemented a 4-phase de-escalation plan that varied according to the
            healthcare district. <i>Desescalada covid</i> provided information to the user depending
            on the date and the selected city.
          </p>
        </div>
        <div class="projects__content__information--second">
          <h1
            class="animate__animated animate__fadeIn animate__delay-3s animate__slow projects__content__information__title"
          >
            <p class="projects__content__information__title__text">
              <img
                class="projects__content__information__title__logo"
                src="@/assets/projects/queryquarry.png"
              />
              QueryQuarry
            </p>
          </h1>
          <p
            class="animate__animated animate__fadeIn animate__delay-3s animate__slow projects__content__information__description"
          >
            Embrace the magic of shared wisdom. QueryQuarry is a student platform where exam
            questions are saved and shared, fostering a collaborative learning environment. Students
            engage with one another, contributing valuable insights and solutions to enrich their
            understanding.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import Card from './molecules/Card.vue'

export default defineComponent({
  name: 'ProjectSection',
  components: { Card },
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
@import "@/styles/_breakpoints.sass"


.projects
  position: relative
  color: $c-clear
  display: flex
  flex-direction: column

  &__state
    @include textSmall
    position: absolute
    right: 0
    bottom: 0
    color: $c-caution
    text-shadow: 1px 1px $c-dark
    transform: rotate(-90deg) translateX(5rem) translateY(3rem)

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
        height: 12rem
        transform: rotate(-4deg)
      &--second
        margin-top: 3rem
        margin-left: 0.5rem
        width: 28.5rem
        height: 12rem
        transform: rotate(4deg)

    &__information
      &--first
        width: 24rem
        position: absolute
        top: 4.8rem
        left: 7rem
        display: flex
        flex-direction: column
        transform: rotate(-4deg)
      &--second
        width: 24rem
        position: absolute
        top: 20rem
        left: 8rem
        display: flex
        flex-direction: column
        transform: rotate(4deg)

      &__title
        &__text
          @include textDefault
          text-decoration: none
          color: $c-clear
          font-weight: 600
          display: flex
          flex-direction: row
          align-items: flex-end

        &__icon
          font-size: 2rem
          padding-right: 0.75rem

        &__logo
          height: 2rem
          weight: 2rem
          padding-right: 0.75rem

      &__description
        @include textSmall
        width: 85%
        margin-top: 1rem

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

      &--first
        width: 100%
        transform: rotate(0deg)
      &--second
        margin-top: 2rem
        margin-left: 0
        width: 100%
        transform: rotate(0deg)

    &__information
      &--first
        width: 100%
        left: 2rem
        transform: rotate(0deg)
      &--second
        width: 100%
        position: absolute
        top: 18.5rem
        left: 2rem
        transform: rotate(0deg)

      &__description
        width: 80%
</style>
