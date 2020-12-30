import Vue from 'vue'
import App from './App.vue'
import { VueEmotion } from '@egoist/vue-emotion'

Vue.use(VueEmotion)

Vue.config.productionTip = false

new Vue({
  render() {
    return <App />
  },
}).$mount('#app')
