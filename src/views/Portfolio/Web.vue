<template>
  <v-container grid-list-xl>
    <h2 class="pl-4">
      <span>Web</span>
      <span class="orange--text">Portfolio</span>
    </h2>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-dialog
        v-model="project.dialog"
        lazy
        max-width="1000"
        v-for="project in projects"
        :key="project.title"
      >
        <v-card v-if="project.dialog">
          <v-img :src="project.poster"></v-img>
          <v-card-text>
            <h3 class="headline mb-0">
              <span>Technology</span>
            </h3>
            <v-chip color="orange" text-color="white">{{project.tech.tech1}}</v-chip>
            <v-chip color="orange" text-color="white">{{project.tech.tech2}}</v-chip>
            <v-chip color="orange" text-color="white">{{project.tech.tech3}}</v-chip>
            <v-chip color="orange" text-color="white">{{project.tech.tech4}}</v-chip>
          </v-card-text>
          <v-card-actions>
            <v-btn flat large dark color="orange" :href="project.git" target="_blank">
              <v-icon left>fab fa-github</v-icon>GitHub
            </v-btn>
            <v-btn large flat dark color="orange" :href="project.demo" target="_blank">
              <v-icon left>fas fa-desktop</v-icon>Demo
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: "Web Portfolio",
    titleTemplate: "%s ← Giuseppe Nappo",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content: ""
           
      },
      { charset: "utf-8" },
      { property: "og:title", content: " Giuseppe Nappo" },
      { property: "og:site_name", content: " Giuseppe Nappo" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://giuseppenappo.it" },
      {
        property: "og:image",
        content: " "
      },
      {
        property: "og:description",
        content: ""
      }
    ]
  },
  data() {
    return {
      dialog: false,
      projects: [
         {
         }
      ]
    };
  }
};
</script>

<style  scoped>
</style>