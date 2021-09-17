<template>
  <div>
    <main>
      <!-- <v-card class="overflow-hidden"> -->
      <v-app-bar
        dense
        :collapse="false"
        :collapse-on-scroll="true"
        color="deep-purple accent-4"
        dark
        scroll-target="#scrolling-techniques-6"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>djdiox Homepage</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-app-bar>
      <v-container>
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <router-view></router-view>
      </v-container>
    </main>
    <footer>
      <!-- <v-card class="mx-auto overflow-hidden" height="200" max-width="500"> -->
        <v-bottom-navigation
          fixed
          style="bottom:0"
          color="white"
          hide-on-scroll
          horizontal
          scroll-target="#scroll-threshold-example"
          scroll-threshold="500"
        >
          <v-btn >
            <span>Home</span>

            <v-icon>mdi-history</v-icon>
          </v-btn>

          <v-btn>
            <span>About me</span>

            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn>
            <span>Music</span>

            <v-icon>mdi-music</v-icon>
          </v-btn>
          <v-btn>
            <span>Gigs</span>

            <v-icon>mdi-map-marker</v-icon>
          </v-btn>
        </v-bottom-navigation>

        <v-sheet
          id="scroll-threshold-example"
          class="overflow-y-auto pb-16"
          max-height="600"
        >
          <v-responsive height="1500"></v-responsive>
        </v-sheet>
      <!-- </v-card> -->
    </footer>
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