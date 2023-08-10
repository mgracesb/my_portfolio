<template>
  <div class="contact">
    <div class="contact__wrapper">
      <div class="animate__animated animate__jackInTheBox animate__slow">
        <p class="contact__header__text">
          {{ $t('sections.contact') }}
        </p>
      </div>
      <div class="contact__content">
        <div
          class="animate__animated animate__jackInTheBox animate__delay-1s contact__content__card__container"
        >
          <div class="contact__content__card">
            <Card />
          </div>
        </div>
        <div class="contact__content__information">
          <p
            class="animate__animated animate__fadeIn animate__delay-2s contact__content__information__text"
          >
            📍
            <span class="contact__content__information__text--padding">
              {{ $t('contact.location') }}
            </span>
          </p>
          <p
            class="animate__animated animate__fadeIn animate__delay-2s animate__slow contact__content__information__text"
          >
            ✉️
            <a class="contact__content__information__email" href="mailto: mgrace.shyu@gmail.com">
              {{ $t('contact.email', { email: 'mgrace.shyu@gmail.com' }) }}
            </a>
          </p>
          <p
            class="animate__animated animate__fadeIn animate__delay-2s animate__slower contact__content__information__text"
          >
            📱
            <span class="contact__content__information__text--padding">
              {{ $t('contact.phone') }}
            </span>
          </p>
          <p
            class="animate__animated animate__fadeIn animate__delay-3s animate__faster contact__content__information__subtitle"
          >
            - {{ $t('contact.followMe') }} -
          </p>
          <div>
            <a
              href="https://www.linkedin.com/in/mgraceshyubarcel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="contact__content__logo animate__animated animate__rotateInDownLeft animate__delay-3s"
                src="@/assets/social-media/linkedin.png"
                alt="linkedin link"
              />
            </a>
            <a
              href="https://www.instagram.com/mercy_shyu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="contact__content__logo animate__animated animate__rotateInDownLeft animate__delay-3s animate__slow"
                src="@/assets/social-media/twitter.png"
                alt="twitter link"
              />
            </a>
            <a href="https://twitter.com/MercyShyu" target="_blank" rel="noopener noreferrer">
              <img
                class="contact__content__logo animate__animated animate__rotateInDownLeft animate__delay-3s animate__slower"
                src="@/assets/social-media/instagram.png"
                alt="instagram link"
              />
            </a>
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
  name: 'ContactSection',
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


.contact
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
    position: relative
    padding-left: 0
    padding-top: 3rem
    height: 100%
    width: 100%
    display: flex
    flex-direction: column
    align-items: flex-start

    &__card
      width: 100%
      height: 22rem
      &__container
        width: 100%

    &__information
      position: absolute
      top: 4.5rem
      left: 2rem
      display: flex
      flex-direction: column

      &__text
        @include textDefault
        max-width: 20rem
        margin-top: 1rem
        &--padding
          padding-left: 0.5rem

      &__email
        color: $c-clear
        text-decoration: none
        cursor: pointer
        padding-left: 0.5rem

      &__subtitle
        @include textStandard
        margin-top: 3rem
        margin-bottom: 1rem

    &__logo
      width: 50px
      height: 50px
      margin-right: 1rem

  @include pc-min
    &__wrapper
      padding: 4rem

    &__header
      &__text
        @include titleDefault

    &__content
      width: 80%
      padding-left: 5rem

      &__card
        width: 28.5rem
        height: 20rem

      &__information
        left: 7rem
        width: 24rem
</style>
