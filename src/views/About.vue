<template>
  <div class="page about">
    <v-container>
      <h1>Who Am I?</h1>
      <h2 class="mb-3" style="text-align: center;">
        Worry Less, Dance & Celebrate More
      </h2>
      <v-row style="margin-bottom: 10px;">
        <v-col style="text-align: center;">
          Becoming a DJ has been easier than ever, real disk-jockeys are rare, I
          learned with 2 pioneer CDJ-800 + an old mixer. Today I am using
          technology as well, but only to create more complex levels! I am
          trying to make every gig as unique as my DNA, representing my style
          and beloved Genres like Deep-, Tech-House and Trap. For Private Events
          I let the host decide what to play, or in which direction it should
          go..
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-hover>
            <v-card style="margin-top: 150px;">
              <v-card-text>
                I started DJing 2014 and never stopped it ever since than. I
                love nearly any kind of music, so there is some kind of track for every musiclover! My signature mixes are Genre Cross-Over
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover>
            <v-img class="selfie" src="@/assets/selfie.jpg" alt="Selfie">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-hover>
        </v-col>
        <v-col cols="4" class="py-4">
          <v-card style="margin-top: 150px;">
            <v-card-text>
              <b>Q: What do I love the most about DJing or creating music?</b>
              A: Creating Emotions and Thrills
              <br />
              <br />
              I'm a 28-year-old web developer (this page is beta, brand new @
              11.09,2021) mainly working in the cloud/b2b sector.Employed since
              2015. Right now for
              <b><a href="www.zoi.de">zoi</a></b>
              since 2018
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss">
.page {
  color: white;
}
.selfie {
  max-height: 500px;
  border-radius: 50%;
}
</style>
