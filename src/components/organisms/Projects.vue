<template>
  <div class="projects">
    <div class="projects__wrapper">
      <div class="animate__animated animate__jackInTheBox animate__slow">
        <p class="projects__header__text">{{ $t('sections.projects') }}</p>
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
            <Card />
          </div>
        </div>
        <div
          class="projects__content__card__container animate__animated animate__jackInTheBox animate__delay-3s"
        >
          <div class="projects__content__card--third">
            <Card>
              <div class="projects__state">
                {{ $t('general.inprogress') }}
              </div>
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
              <span class="projects__content__information__title__icon">🦠</span>
              {{ $t('projects.project__one.title') }}
            </a>
          </h1>
          <p
            class="animate__animated animate__fadeIn animate__delay-2s animate__slow projects__content__information__description"
          >
            {{ $t('projects.project__one.description') }}
          </p>
        </div>
        <div class="projects__content__information--second">
          <h1
            class="animate__animated animate__fadeIn animate__delay-3s animate__slow projects__content__information__title"
          >
            <a
              class="projects__content__information__title__text"
              href="https://mgracesb.github.io/nasa-images/"
            >
              <img
                class="projects__content__information__title__logo"
                src="@/assets/projects/cosmicsnap.svg"
              />
              {{ $t('projects.project__two.title') }}
            </a>
          </h1>
          <p
            class="animate__animated animate__fadeIn animate__delay-3s animate__slow projects__content__information__description"
          >
            {{ $t('projects.project__two.description') }}
          </p>
        </div>
        <div class="projects__content__information--third">
          <h1
            class="animate__animated animate__fadeIn animate__delay-4s animate__slow projects__content__information__title"
          >
            <p class="projects__content__information__title__text">
              <img
                class="projects__content__information__title__logo"
                src="@/assets/projects/queryquarry.png"
              />
              {{ $t('projects.project__three.title') }}
            </p>
          </h1>
          <p
            class="animate__animated animate__fadeIn animate__delay-4s animate__slow projects__content__information__description"
          >
            {{ $t('projects.project__three.description') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import Card from '../molecules/Card.vue'

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
@import "@/styles/_text.sass"
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
    transform: rotate(-90deg) translateX(3.5rem) translateY(1.5rem)

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
    position: relative
    padding-left: 0
    padding-top: 1.5rem
    height: 100%
    width: 100%
    display: flex
    flex-direction: column
    align-items: flex-start

    &__card
      width: 100%
      height: 30rem
      transform: rotate(0deg)
      &__container
        width: 100%
      &--first
        width: 100%
        transform: rotate(0deg)
        height: 9.5rem
      &--second
        margin-top: 1.5rem
        margin-left: 0
        width: 100%
        height: 9.5rem
        transform: rotate(0deg)
      &--third
        margin-top: 1.5rem
        height: 8.5rem
        transform: rotate(0deg)

    &__information
      &--first
        width: 100%
        left: 1.5rem
        transform: rotate(0deg)
        position: absolute
        top: 3rem
        display: flex
        flex-direction: column
      &--second
        width: 100%
        position: absolute
        top: 13.5rem
        left: 1.5rem
        transform: rotate(0deg)
        display: flex
        flex-direction: column
      &--third
        width: 100%
        position: absolute
        top: 24.5rem
        left: 1.5rem
        transform: rotate(0deg)
        display: flex
        flex-direction: column

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
        width: 80%
        margin-top: 0.5rem

  @include pc-min
    &__wrapper
      padding: 3rem 4rem

    &__state
      transform: rotate(-90deg) translateX(3.8rem) translateY(1.5rem)

    &__header
      &__text
        @include titleDefault

    &__content
      width: 80%
      padding-left: 2rem
      padding-top: 2rem

      &__card
        &--first
          width: 29.5rem
          height: 9.5rem
          transform: rotate(-4deg)
        &--second
          margin-top: 3rem
          margin-left: 0.5rem
          width: 29.5rem
          height: 9rem
          transform: rotate(3deg)
        &--third
          margin-top: 3rem
          margin-left: 1.5rem
          width: 29.5rem
          height: 9rem
          transform: rotate(-4deg)


      &__information
        &--first
          top: 4.3rem
          width: 24rem
          left: 4rem
          transform: rotate(-4deg)
        &--second
          width: 24rem
          top: 16.2rem
          left: 4.5rem
          transform: rotate(3deg)
        &--third
          width: 24rem
          transform: rotate(-4deg)
          top: 28.3rem
          left: 5.5rem

        &__description
          width: 100%

  @include pc-xl
    &__content
      padding-top: 4rem
      &__card
        &--first
          width: 30rem
          height: 10rem
        &--second
          margin-top: 4rem
          margin-left: 0.5rem
          width: 30rem
          height: 9rem
        &--third
          margin-top: 4rem
          margin-left: 1.5rem
          width: 30rem
          height: 9rem

      &__information
        &--first
          top: 6.5rem
          width: 24rem
        &--second
          width: 24rem
          top: 19.7rem
        &--third
          width: 24rem
          top: 33rem
</style>
