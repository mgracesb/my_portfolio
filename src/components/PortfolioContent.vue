<template>
  <div class="container">
    <div class="container__photo">
      <img class="container__photo__item--one" src="@/assets/fish_one.png" alt="fish_decoration" />
      <img class="container__photo__item--two" src="@/assets/fish_two.png" alt="fish_decoration" />
      <img
        class="container__photo__item--three"
        src="@/assets/fish_three.png"
        alt="fish_decoration"
      />
      <img class="container__photo__item" src="@/assets/mercy.png" alt="Mercy Shyu's picture" />
    </div>

    <vue-scroll-snap :fullscreen="true">
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import VueScrollSnap from 'vue-scroll-snap'
import { useElementVisibility } from '@vueuse/core'
import Hero from './Hero.vue'
import Projects from './Projects.vue'
import Contact from './Contact.vue'

export default defineComponent({
  components: { VueScrollSnap, Hero, Projects, Contact },
  setup() {
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
      contactIsVisible
    }
  }
})
</script>

<style scoped lang="sass">
@import "@/styles/_colors.sass"
@import "@/styles/_animations.sass"

.container
  position: relative
  width: 100vw
  height: 100vh
  background-color: $c-dark

  &__photo
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
      height: 85%
      &--one
        position: absolute
        top: 5%
        left: 55%
        width: 13%
        height: auto
        animation: float 4s ease-in-out infinite
      &--two
        position: absolute
        top: 25%
        right: 5%
        width: 15%
        height: auto
        animation: float 6s ease-in-out infinite
      &--three
        position: absolute
        bottom: -8%
        left: 37%
        width: 23%
        height: auto
        transform: rotateY(180deg) rotate(12deg)
        animation: float 8s ease-in-out infinite

.item
   min-height: 500px

.scroll-snap-container
  height: 500px
  width: 500px
</style>
