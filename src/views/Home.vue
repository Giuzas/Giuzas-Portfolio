<template>
  <v-layout column justify-center align-center class="mt-4 pt-2">

    <v-flex xs12 sm6 md4 lg4 xl4>
      <v-card flat color="transparent">


        <v-card-title primary-title>
          <Resume></Resume>
        </v-card-title>
        <v-container fluid>
          <v-layout row wrap>
            <!-- Colonna sinistra: Education -->
            <v-flex xs12 sm12 md6 lg6 xl6 class="mt-4 pt-4">
              <v-card class="pa-4" flat color="transparent">
                <h2 class="mb-4">Education</h2>
                <v-card-text class="py-0">
                  <v-timeline align-top dense>
                    <v-timeline-item color="orange" small>
                      <v-layout row wrap pt-3>
                        <v-flex xs12 sm4 class="pb-2">
                          <div class="caption font-weight-bold orange--text">
                            SETTEMBRE 2017 -
                          </div>
                          <div class="caption font-weight-bold orange--text">PERCORSO NON TERMINATO</div>
                        </v-flex>
                        <v-flex xs12 sm8 class="pl-2">
                          <strong>Studente Informatica</strong>
                          <div class="caption mb-2">
                            Universita degli studi di Napoli Parthenope
                          </div>
                        </v-flex>
                      </v-layout>
                    </v-timeline-item>

                    <v-timeline-item color="orange" small>
                      <v-layout row wrap pt-3>
                        <v-flex xs12 sm4 class="pb-2">
                          <div class="caption font-weight-bold orange--text">
                            SETTEMBRE 2011 -
                          </div>
                          <div class="caption font-weight-bold orange--text">
                            LUGLIO 2016
                          </div>
                        </v-flex>
                        <v-flex xs12 sm8 class="pl-2">
                          <strong>Diploma Finanza e Marketing</strong>
                          <div class="caption mb-2">I.S.I.S Mario Pagano</div>
                        </v-flex>
                      </v-layout>
                    </v-timeline-item>
                  </v-timeline>
                </v-card-text>
              </v-card>
            </v-flex>

            <!-- Colonna destra: Experience -->
            <v-flex xs12 sm12 md6 lg6 xl6 class="mt-4 pt-4">
              <v-card class="pa-4" flat color="transparent">
                <h2 class="mb-4">Experience</h2>
                <v-card-text class="py-0">
                  <v-timeline align-top dense>
                    <v-timeline-item color="orange" small>
                      <v-layout row wrap pt-3>
                        <v-flex xs12 sm4 class="pb-2">
                          <div class="caption font-weight-bold orange--text">
                            SETTEMBRE 2021 -
                          </div>
                          <div class="caption font-weight-bold orange--text">AD OGGI</div>
                        </v-flex>
                        <v-flex xs12 sm8 class="pl-2">
                          <strong>Software Developer</strong>
                          <div class="caption mb-2">Sipos S.r.l</div>
                        </v-flex>
                      </v-layout>
                    </v-timeline-item>
                  </v-timeline>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>


        <v-card-actions class="justify-center">
          <v-tooltip v-for="icon in icons" :key="icon.icon" bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn fab dark outline color="orange" :href="icon.href" target="_blank" v-bind="attrs" v-on="on">
                <v-icon dark style="display: inherit;">{{ icon.icon }}</v-icon>
              </v-btn>
            </template>
            <span>{{ icon.description }}</span>
          </v-tooltip>
        </v-card-actions>
      </v-card>
    </v-flex>


  </v-layout>
</template>

<script>
import { VueTyper } from "vue-typer";
import VueCompareImage from "vue-compare-image";
import Resume from "./Resume.vue";

export default {
  metaInfo: {
    title: "Home",
    titleTemplate: "%s ← Giuseppe Nappo",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "Giuseppe Nappo Portfolio" },
      { charset: "utf-8" },
      { property: "og:title", content: "Giuseppe Nappo" },
      { property: "og:site_name", content: "Giuseppe Nappo" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://giuseppenappo.it" },
      { property: "og:description", content: "Giuseppe Nappo Portfolio" }
    ]
  },
  components: {
    "vue-typer": VueTyper,
    Resume: Resume,
    VueCompareImage
  },


  data() {
    return {
      icons: [
        { href: "/CV_GIUSEPPE_NAPPO.pdf", icon: "fas fa-file-download", description: "Scarica CV" },
        { href: "https://github.com/Giuzas", icon: "fab fa-github", description: "Github" },
        {
          href: "https://www.linkedin.com/in/gnappo97/",
          icon: "fab fa-linkedin-in",
          description: "Linkedin"
        },
        {
          href: "https://www.facebook.com/giuseppe.nappo.737",
          icon: "fab fa-facebook-f",
          description: "Facebook"
        },
        { href: "https://www.instagram.com/giuzas/", icon: "fab fa-instagram", description: "Instagram" },

      ],
      text1: ["Software Developer"],
      sliderLine: 0,
      hSize: 0,
      sliderPosition: 0.5
    };
  }
};
</script>
<style>
@keyframes rocking {

  0%,
  100% {
    transform: rotateZ(-10deg);
  }

  50% {
    transform: rotateZ(10deg);
  }
}

.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}

.vue-typer .custom.char.typed {
  color: orange;
}

.vue-typer .custom.char.selected {
  color: orange;
}

.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}

.vue-typer .custom.caret.typing {
  background-color: orange;
}

.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: orange;
}

#divImage {
  height: 80px;
  width: 80px;
}

html {
  min-height: 100%;
}

body {
  background: linear-gradient(to bottom,
      #e2e2e2 0%,
      #dbdbdb 30%,
      #d1d1d1 51%,
      #fefefe 100%) no-repeat;
}

#circle-1 {
  width: 200px;
  height: 200px;
  background: whitesmoke;
  border-radius: 50%;
  box-shadow: inset -5px -5px 15px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  top: 20px;
  left: 30px;
  animation: blur 10s infinite;
}

#circle-2 {
  width: 350px;
  height: 350px;
  background: whitesmoke;
  border-radius: 50%;
  box-shadow: inset -5px -5px 15px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  top: 250px;
  left: 250px;
  animation: blur-2 10s infinite;
}

#circle-3 {
  width: 100px;
  height: 100px;
  background: whitesmoke;
  border-radius: 50%;
  box-shadow: inset -5px -5px 15px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  top: 120px;
  left: 500px;
  animation: blur-3 10s infinite;
}

#circle-4 {
  width: 200px;
  height: 200px;
  background: whitesmoke;
  border-radius: 50%;
  box-shadow: inset -5px -5px 15px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  top: 150px;
  left: 700px;
  animation: blur-4 10s infinite;
}

@keyframes blur {

  0%,
  100% {
    filter: blur(0px);
    background-color: whitesmoke;
    transform: translate(50px, 20px);
  }

  20% {
    filter: blur(3px);
  }

  50% {
    filter: blur(15px);
    background-color: #e8e8e8;
    transform: scale(0.5);
  }
}

@keyframes blur-2 {

  0%,
  100% {
    filter: blur(16px);
    transform: scale(0.9);
    background-color: #e8e8e8;
    transform: translate(170px, -40px);
  }

  50% {
    filter: blur(0px);
    transform: scale(0.7);
    background-color: whitesmoke;
  }
}

@keyframes blur-3 {

  0%,
  100% {
    filter: blur(0px);
    background-color: whitesmoke;
    transform: translate(-50px, 20px);
  }

  20% {
    filter: blur(1px);
  }

  50% {
    filter: blur(3px);
    transform: scale(0.7);
    background-color: #e8e8e8;
  }
}

@keyframes blur-4 {

  0%,
  100% {
    filter: blur(9px);
    transform: scale(0.5);
    background-color: #e8e8e8;
  }

  50% {
    filter: blur(0px);
    transform: scale(0.9);
    background-color: whitesmoke;
    transform: translate(-50px, 0);
  }
}
</style>
