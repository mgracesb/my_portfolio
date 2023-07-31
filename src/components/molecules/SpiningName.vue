<template>
  <div class="fold">
    <div class="title">
      <p class="letter letter-1"><span>M</span></p>
      <p class="letter letter-2"><span>E</span></p>
      <p class="letter letter-3"><span>R</span></p>
      <p class="letter letter-4"><span>C</span></p>
      <p class="letter letter-5"><span>Y</span></p>
      <p class="letter letter-6"><span>_</span></p>
      <p class="letter letter-7"><span>S</span></p>
      <p class="letter letter-8"><span>H</span></p>
      <p class="letter letter-9"><span>Y</span></p>
      <p class="letter letter-10"><span>U</span></p>
      <p class="letter letter-11 red"><span>·</span></p>
      <p class="letter letter-12"><span>f</span></p>
      <p class="letter letter-13"><span>r</span></p>
      <p class="letter letter-14"><span>o</span></p>
      <p class="letter letter-15"><span>n</span></p>
      <p class="letter letter-16"><span>t</span></p>
      <p class="letter letter-17"><span>e</span></p>
      <p class="letter letter-18"><span>n</span></p>
      <p class="letter letter-19"><span>d</span></p>
      <p class="letter letter-20 red"><span>·</span></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scope lang="sass">
@import "@/styles/_colors.sass"

$full-circle: 360

.fold
  display: flex
  justify-content: center
  align-items: center
  height: 100vh
  width: 100%
  .title
    width: 7vw
    height: 7vw
    position: relative
    transform: rotate(0deg)
    animation: spinningTitle 10s infinite linear
    color: white
    line-height: 0

    @for $i from 1 through 20
      .letter-#{$i}
        text-align: center
        font-family: Helvetica
        transform-origin: center
        position: absolute
        transform: rotate(#{round(($full-circle / 20) * $i)}deg) translate(#{round((21 / 20))}vw)
        font-size: 1rem
        top: 0
        bottom: 0
        left: 0
        right: 0
        margin: auto

      .letter
        span
          display: inline-block
          transform: rotate(-#{($full-circle / 14) + 11}deg)
          position: absolute
          top: 0
          left: 0
.red
  color: $c-red

@keyframes spinningTitle
  0%
    transform: rotate(0deg)

  100%
    transform: rotate(360deg)
</style>
