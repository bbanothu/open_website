// imports
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import main from './components/main'
import container from './components/container'
import class_description from './components/class_description'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import "normalize.css"


Vue.config.productionTip = false

// router config
Vue.use(VueRouter);
const routes = [
  {path: '/classes', component: container  },
  {path: '/', component: main  },
  {path: '/class_description', name: 'class_description', props: true, component: class_description}
];

const router = new VueRouter({
  routes: routes, mode: 'history'
});


// Render Config
new Vue({
  router: router,
  render: h => h(App ),  
}).$mount('#app')

