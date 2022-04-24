<template>
  <v-layout row justify-center align-center wrap class="mt-4 pt-2">
    <v-flex xs12 sm12 md5 lg6 xl6 class="mt-4 pt-4">
      <h2 class="mb-4 pl-4 pt-2">Education</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="orange" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold orange--text">
                  SETTEMBRE 2017 -
                </div>
                <div class="caption font-weight-bold orange--text">AD OGGI</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Laureando in informatica</strong>
                <div class="caption mb-2">
                  Universita degli studi di Napoli Parthenope
                </div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="orange" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold orange--text">
                  SETTEMBRE 2011 -
                </div>
                <div class="caption font-weight-bold orange--text">
                  LUGLIO 2016
                </div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Dimploma Finanza e Marketing</strong>
                <div class="caption mb-2">I.S.I.S Mario Pagano</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-flex xs12 sm12 md4 lg6 xl6 class="mt-4 pt-2">
      <h2 class="mb-4 pl-4">Experience</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="orange" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold orange--text">
                  SETTEMBRE 2021 -
                </div>
                <div class="caption font-weight-bold orange--text">AD OGGI</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Software Developer </strong>
                <div class="caption mb-2">Sipos S.r.l</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span>Coding</span>
          <span class="orange--text">Skills</span>
        </h2>
        <br />
        <br />
        <strong>VUE</strong>
        <v-progress-linear
          v-model="bufferVue"
          :buffer-value="bufferValue"
          color="orange"
          height="16"
        ></v-progress-linear>
        <strong>HTML/CSS</strong>
        <v-progress-linear
          v-model="bufferHtmlCss"
          :buffer-value="bufferValue"
          color="orange"
          height="16"
        ></v-progress-linear>
        <strong>JavaScript</strong>
        <v-progress-linear
          v-model="BufferJavaScript"
          :buffer-value="bufferValue"
          color="orange"
          height="16"
        ></v-progress-linear>
        <strong>Node.js</strong>
        <v-progress-linear
          v-model="BufferNode"
          :buffer-value="bufferValue"
          color="orange"
          height="16"
        ></v-progress-linear>
      </v-flex>
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <strong>C#</strong>
        <v-progress-linear
          v-model="bufferC"
          :buffer-value="bufferValue"
          color="orange"
          height="16"
        ></v-progress-linear>
        <strong>MongoDb</strong>
        <v-progress-linear
          v-model="bufferMongo"
          :buffer-value="bufferValue"
          color="orange"
          height="16"
        ></v-progress-linear>
        <strong>MySql</strong>
        <v-progress-linear
          v-model="bufferMySql"
          :buffer-value="bufferValue"
          color="orange"
          height="16"
        ></v-progress-linear>
      </v-flex>
      <div class="mt-4 pt-2">
        <v-btn
          href="https://docs.google.com/document/d/1WSR42FEgUahJuR_RArW1wz7TfUBlgj13zekRidmQgs4/edit?usp=sharing"
          target="_blank"
          color="orange"
          dark
          large
        >
          Download Resume
          <v-icon right dark>fas fa-file-download</v-icon>
        </v-btn>
      </div>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Resume",
    titleTemplate: "%s ← Giuseppe Nappo",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Vue NUXT HTML CSS JavaScript Design Adobe XD Photoshop Coding Skills Resume Work Web Developer Front-End"
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
        content:
          "Vue NUXT HTML CSS JavaScript Design Adobe XD Photoshop Coding Skills Resume Work Web Developer Front-End"
      }
    ]
  },
  data() {
    return {
      value: 0,
      BufferNode: 0,
      bufferC: 0,
      bufferMongo: 0,
      bufferVue: 0,
      bufferHtmlCss: 0,
      BufferJavaScript: 0,
      bufferMySql: 0,
      bufferValue: 100,
      interval: 0
    };
  },
  mounted() {
    this.startBuffer();
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    startBuffer() {
      this.interval = setInterval(() => {
        this.BufferNode = 70;
        this.bufferC = 60;
        this.bufferMongo = 40;
        this.bufferVue = 80;
        this.bufferHtmlCss = 60;
        this.BufferJavaScript = 80;
        this.bufferMySql = 60;
      }, 800);
    }
  }
};
</script>
<style></style>
