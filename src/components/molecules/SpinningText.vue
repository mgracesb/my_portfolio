<template>
  <div class="fold">
    <div class="title">
      <p class="letter letter-1"><span>W</span></p>
      <p class="letter letter-2"><span>O</span></p>
      <p class="letter letter-3"><span>R</span></p>
      <p class="letter letter-4"><span>K</span></p>
      <p class="letter letter-5 red"><span>•</span></p>
      <p class="letter letter-6"><span>I</span></p>
      <p class="letter letter-7"><span>N</span></p>
      <p class="letter letter-8 red"><span>•</span></p>
      <p class="letter letter-9"><span>P</span></p>
      <p class="letter letter-10"><span>R</span></p>
      <p class="letter letter-11"><span>O</span></p>
      <p class="letter letter-12"><span>G</span></p>
      <p class="letter letter-13"><span>R</span></p>
      <p class="letter letter-14"><span>E</span></p>
      <p class="letter letter-15"><span>S</span></p>
      <p class="letter letter-16"><span>S</span></p>
      <p class="letter letter-17 red"><span>•</span></p>
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
  justify-content: flex-end
  align-items: flex-start
  height: 100%
  width: 100%

  .title
    width: 5vw
    height: 5vw
    position: relative
    transform: rotate(0deg)
    animation: spinningTitle 10s infinite linear
    color: white
    line-height: 0

    @for $i from 1 through 17
      .letter-#{$i}
        text-align: center
        transform-origin: center
        position: absolute
        transform: rotate(#{round(($full-circle / 17) * $i)}deg) translate(#{round((18 / 17))}vw)
        font-size: 0.65rem
        top: 0
        bottom: 0
        left: 0
        right: 0
        margin: auto
        filter: drop-shadow(4px 5px 10px #000)

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
