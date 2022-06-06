import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import StoryblokVue from 'storyblok-vue'



Vue.config.productionTip = false
const isProd = process.env.NODE_ENV === "production"

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(StoryblokVue)

