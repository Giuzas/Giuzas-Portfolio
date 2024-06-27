import Vue from 'vue'
import './plugins/vuetify'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import StoryblokVue from 'storyblok-vue'
import VueSession from 'vue-session'




Vue.config.productionTip = false
const isProd = process.env.NODE_ENV === "production"

Vue.use(StoryblokVue)
Vue.use(Vuetify)
Vue.use(VueSession)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


