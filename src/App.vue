<template>
  <div class="full-page">
    <main>
      <!-- <v-card class="overflow-hidden"> -->

      <v-app-bar
        :collapse="false"
        style="background-color: rgb(35, 35, 35); z-index: 1"
        :collapse-on-scroll="true"
        color="deep-purple accent-4"
        dark
        scroll-target="#scrolling-techniques-6"
      >
        <v-app-bar-nav-icon>
          <!-- <v-img  src="./assets/logo.webp"> </v-img> -->
        </v-app-bar-nav-icon>
        <v-app-bar-icon>
          <img
            style="height: 50px; margin-right: 10px"
            src="./assets/logo.webp"
            alt="logo"
          />
        </v-app-bar-icon>
        <v-toolbar-title>djdiox Homepage</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn>Home</v-btn>
        <!-- <v-btn>About me</v-btn>
        <v-btn>My music</v-btn>
        <v-btn>Gigs!</v-btn>
        <v-btn>Contact!</v-btn> -->
      </v-app-bar>
      <v-container style="z-index: 10">
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <router-view></router-view>
      </v-container>
    </main>
    <footer style="padding-top: 150px">
      <!-- <v-card class="mx-auto overflow-hidden" height="200" max-width="500"> -->
      <v-bottom-navigation
        fixed
        style="bottom: 0"
        color="white"
        hide-on-scroll
        horizontal
        scroll-target="#scroll-threshold-example"
        scroll-threshold="500"
      >
        <v-btn>
          <router-link :to="'/home'" custom>
            <span>Home</span>
            <v-icon>mdi-home</v-icon>
          </router-link>
        </v-btn>
        <v-btn>
          <router-link :to="'/about'" custom>
            <span>About me</span>
            <v-icon>mdi-heart</v-icon>
          </router-link>
        </v-btn>
        <v-btn>
          <router-link :to="'/music'" custom>
            <span>Music</span>
            <v-icon>mdi-music</v-icon>
          </router-link>
        </v-btn>
        <v-btn>
          <router-link :to="'/gigs'" custom>
            <span>Gigs</span>
            <v-icon>mdi-map-marker</v-icon>
          </router-link>
        </v-btn>
        <v-btn>
          <router-link :to="'/crypto'" custom>
            <span>Crypto</span>
            <v-icon>mdi-cash</v-icon>
          </router-link>
        </v-btn>
      </v-bottom-navigation>

      <!-- </v-card> -->
    </footer>
    <video
      class="bg-vid"
      v-if="$route.name == 'music'"
      autoplay
      loop
      muted
      style="position: absolute; top: 0"
    >
      <source src="./assets/loop.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>
<script>
export default {
  model: () => {
    return {
      collapseOnScroll: false,
    };
  },
};
</script>
<style lang="scss">
.page {
  z-index: 10;
}
.bg-vid {
  z-index: -1;
}
body {
  /* position: relative; */
  /* z-index: 1; */
  height: 100vh;
  background-image: url("~@/assets/crowd_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>