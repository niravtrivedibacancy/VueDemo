import Vue from 'vue'
import VueRouter from 'vue-router'
import Router1 from './components/Router1.vue'
import HelloWorld from './components/HelloWorld.vue'

Vue.use(VueRouter);

const routers = new VueRouter({
  mode:"history",
  routes  : [ 
    { path: '/', component: HelloWorld },
  { path: '/route2', component: Router1 } 
]
});

export default routers;