import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faLanguage,faCode,faLaptopCode,faUserTie,faEnvelope,faPalette,faFileInvoice,faLaptop, faWifi, faServer, faCompass  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueParticles from 'vue-particles'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VScrollin from 'vue-scrollin'
import Language from './components/Language.vue'

library.add(faLanguage,faCode,faLaptopCode,faUserTie,faEnvelope,faPalette,faFileInvoice,faLaptop, faWifi, faServer, faCompass)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('VScrollin',VScrollin)
Vue.component('Language',Language)

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueParticles);



const router= new VueRouter({
	routes,
	mode:'history'
})

new Vue({
	created () {
    AOS.init()
  },
  el: '#app',
  router,  
  render: h => h(App)
})
