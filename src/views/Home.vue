<template>
  <div class="home page">
    <v-container>
      <v-row>
        <h1>Welcome to my page!</h1>
        <p>Enjoy the best beats, and feel welcomed!</p>
      </v-row>
      <v-container
        style="justify-content: center; margin-top: 20px; margin-bottom: 50px;"
      >
        <v-row>
          <v-col style="padding-right: 0;">
            <v-img
              style="object-fit: contains;"
              height="400px"
              src="@/assets/dioxdj.webp"
            ></v-img>
          </v-col>
          <v-col style="padding: 10px 0;">
            <v-img
              style="object-fit: contains;"
              height="401px"
              src="@/assets/producing.webp"
            ></v-img>
          </v-col>
          <v-col style="padding-left: 0;">
            <v-img
              style="object-fit: contains;"
              height="600px"
              src="@/assets/party.webp"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  // components: {
  //   HelloWorld
  // }
}
</script>
