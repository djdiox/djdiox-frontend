<template>
  <div>
    <v-container style="">
      <div style="position: relative; margin: 0 auto;">
        <v-img
          class="anim-image-bg"
          style="position: absolute; top: 50%; left: 43%; opacity: 0.7;"
          src="@/assets/dancing.webp"
        ></v-img>
        <img
          class="anim-image"
          src="@/assets/festival_lights.webp"
          style="width: 100%;"
          alt="Festival Lights"
        />
        <v-card
          style="
            position: absolute;
            top: 20px;
            left: 27%;
            padding: 20px;
            opacity: 0.7;
          "
        >
          My goal is to always challenge my self and react to the crowd or
          <br />
          creating scenes with light/video and music. Full immersive experience
          guaranteed!
        </v-card>
      </div>
    </v-container>
  </div>
</template>
<script>
import anime from 'animejs/lib/anime.es.js'
export default {
  mounted() {
    setTimeout(() => {
      anime({
        targets: '.anim-image-bg',
        opacity: 0.8,
        easing: 'easeInOutQuad',
      })
      anime({
        targets: '.anim-image',
        opacity: 0.6,
        easing: 'easeInOutQuad',
      })
    }, 100)
  },
}
</script>
