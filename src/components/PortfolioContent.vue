<template>
  <div class="container">
    <div class="container__photo">
      <img
        class="container__photo__item--one"
        src="@/assets/bg/fish_one.png"
        alt="fish_decoration"
      />
      <img
        class="container__photo__item--two"
        src="@/assets/bg/fish_two.png"
        alt="fish_decoration"
      />
      <img
        class="container__photo__item--three"
        src="@/assets/bg/fish_three.png"
        alt="fish_decoration"
      />
      <img class="container__photo__item" src="@/assets/bg/mercy.png" alt="Mercy Shyu's picture" />
    </div>

    <vue-scroll-snap
      v-if="isDesktop"
      :fullscreen="true"
      :height="windowHeight"
      :width="windowWidth"
    >
      <div ref="hero" class="item">
        <div v-if="heroIsVisible">
          <Hero />
        </div>
      </div>
      <div ref="projects" class="item">
        <div v-if="projectsIsVisible">
          <Projects />
        </div>
      </div>
      <div ref="contact" class="item">
        <div v-if="contactIsVisible">
          <Contact />
        </div>
      </div>
    </vue-scroll-snap>

    <vue-scroll-snap v-else :fullscreen="true" :height="windowHeight" :width="windowWidth">
      <div ref="hero" class="item">
        <Hero />
      </div>
      <div ref="projects" class="item">
        <Projects />
      </div>
      <div ref="contact" class="item">
        <Contact />
      </div>
    </vue-scroll-snap>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount } from 'vue'
import VueScrollSnap from 'vue-scroll-snap'
import { useElementVisibility } from '@vueuse/core'
import Hero from './organisms/Hero.vue'
import Projects from './organisms/Projects.vue'
import Contact from './organisms/Contact.vue'

export default defineComponent({
  components: { VueScrollSnap, Hero, Projects, Contact },
  setup() {
    let windowWidth
    let windowHeight
    const isDesktop = window.innerWidth > 500

    onBeforeMount(() => {
      windowWidth = window.innerWidth
      windowHeight = window.innerHeight
    })

    const hero = ref(null)
    const heroIsVisible = useElementVisibility(hero)

    const projects = ref(null)
    const projectsIsVisible = useElementVisibility(projects)

    const contact = ref(null)
    const contactIsVisible = useElementVisibility(contact)

    return {
      hero,
      heroIsVisible,
      projects,
      projectsIsVisible,
      contact,
      contactIsVisible,
      windowWidth,
      windowHeight,
      isDesktop
    }
  }
})
</script>

<style scoped lang="sass">
@import "@/styles/_colors.sass"
@import "@/styles/_animations.sass"
@import "@/styles/_breakpoints.sass"

.container
  position: relative
  width: 100vw
  height: 100vh
  background-color: $c-dark

  &__photo
    overflow: hidden
    position: sticky
    top: 0
    left: 0
    width: 100%
    height: 100%
    display: flex
    flex-direction: row
    justify-content: flex-end
    align-items: flex-end

    &__item
      width: auto
      height: 30%
      &--one
        position: absolute
        top: 4%
        left: 55%
        width: 25%
        height: auto
        animation: float 4s ease-in-out infinite
      &--two
        position: absolute
        top: 55%
        right: 85%
        width: 25%
        height: auto
        animation: float 6s ease-in-out infinite
      &--three
        position: absolute
        bottom: -3%
        left: 16%
        width: 30%
        height: auto
        transform: rotateY(180deg) rotate(12deg)
        animation: float 8s ease-in-out infinite

  @include pc-min
    &__photo
      &__item
        width: auto
        height: 85%
        &--one
          top: 5%
          left: 50%
          width: 13%
        &--two
          top: 25%
          right: 4%
          width: 15%
          height: auto
          animation: float 6s ease-in-out infinite
        &--three
          bottom: -8%
          left: 38%
          width: 20%

.item
   min-height: 500px
</style>
