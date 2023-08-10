<template>
  <label class="langSwitch">
    <input type="checkbox" class="langSwitch__input" :value="modelValue" @click="onSwitch" />
    <div class="langSwitch__slide round" :class="{ en: !modelValue }"></div>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LangSwitch',
  props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  setup(_, { emit }) {
    const onSwitch = () => {
      emit('switch')
    }

    return { onSwitch }
  }
})
</script>

<style scoped lang="sass">
@import "@/styles/_colors.sass"

.langSwitch
  position: relative
  display: inline-block
  width: 5rem
  height: 2rem

  &__text
    place-self: center

  &__input
    display: none
    &:checked + .langSwitch__slide
      background-color: $c-white--transparency
      padding-left: 40px
    &:focus + .langSwitch__slide
      box-shadow: 0 0 1px #01aeed
    &:checked + .langSwitch__slide:before
      -webkit-transform: translateX(26px)
      -ms-transform: translateX(26px)
      transform: translateX(26px)
      left: -20px

  &__slide
    position: absolute
    cursor: pointer
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-color: $c-white--transparency
    -webkit-transition: 0.4s
    transition: 0.4s
    padding: 0.5rem
    color: $c-clear

    &.round
      border-radius: 2rem
      &:before
        border-radius: 50%

    &:before
      /* Specific styles for .langSwitch__slide without 'en' class */
      position: absolute
      content: ''
      height: 1.5rem
      width: 1.5rem
      left: 3.2rem
      bottom: 4px
      background-color: $c-clear
      -webkit-transition: 0.4s
      transition: 0.4s
      background-image: url('@/assets/es.png')
      background-size: cover
    &.en:before
      /* Specific styles for .langSwitch__slide with 'en' class */
      background-image: url('@/assets/en.png')
      background-size: cover

</style>
