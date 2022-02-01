<template>
  <v-layout column justify-center align-center class="mt-4 pt-2">
    
    <a href="https://imgbb.com/"><img src="https://i.ibb.co/nMX10ZK/fotosito.jpg" alt="fotosito" border="0"></a>
    
    <vue-typer class="headline" :repeat="0" text="Giuseppe Nappo"></vue-typer>
    <vue-typer
      :text="text1"
      :repeat="Infinity"
      :shuffle="false"
      initial-action="erasing"
      :pre-type-delay="70"
      :type-delay="70"
      :pre-erase-delay="1980"
      :erase-delay="150"
      erase-style="select-back"
      :erase-on-complete="false"
      caret-animation="smooth"
    ></vue-typer>
    <br>
    <v-flex xs12 sm6 md4 lg4 xl4>
      <v-card flat color="transparent" max-width="500">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">
              <span>Su </span>
              <span class="orange--text">Di me</span>
            </h3>
            <div>
              <p>
                Scrivi Qui qualocosa su di me
              </p>
            </div>
          </div>
        </v-card-title>

        <v-card-actions class="hidden-sm-and-down">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            fab
            dark
            outline
            color="orange"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{icon.icon}}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-card-actions class="hidden-md-and-up justify-center">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            small
            fab
            dark
            outline
            color="orange"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{icon.icon}}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { VueTyper } from "vue-typer";
import VueCompareImage from "vue-compare-image";

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
    VueCompareImage
  },
  data() {
    return {
      icons: [
        { href: "https://github.com/Giuzas", icon: "fab fa-github" },
        {
          href: "https://www.linkedin.com/in/giuseppenappo97/",
          icon: "fab fa-linkedin-in"
        },
        {
          href: "https://www.facebook.com/giuseppe.nappo.737",
          icon: "fab fa-facebook-f"
        },
        { href: "https://www.instagram.com/giuzas/", icon: "fab fa-instagram" }
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
</style>

