import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/types',
    name: 'Types',
    component: () => import(/* webpackChunkName: "about" */ '../views/Types.vue')
  },
  {
    path: '/texture',
    name: 'Texture',
    component: () => import(/* webpackChunkName: "about" */ '../views/Texture.vue')
  },
  {
    path: '/shader',
    name: 'Shader',
    component: () => import(/* webpackChunkName: "about" */ '../views/Shader.vue')
  },
  {
    path: '/scene',
    name: 'Scene',
    component: () => import(/* webpackChunkName: "about" */ '../views/Scene.vue')
  },
  {
    path: '/property',
    name: 'Property',
    component: () => import(/* webpackChunkName: "about" */ '../views/Property.vue')
  },
  {
    path: '/physics',
    name: 'Physics',
    component: () => import(/* webpackChunkName: "about" */ '../views/Physics.vue')
  },
  {
    path: '/observable',
    name: 'Observable',
    component: () => import(/* webpackChunkName: "about" */ '../views/Observable.vue')
  },
  {
    path: '/mesh',
    name: 'Mesh',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mesh.vue')
  },
  {
    path: '/material',
    name: 'Material',
    component: () => import(/* webpackChunkName: "about" */ '../views/Material.vue')
  },
  {
    path: '/light',
    name: 'Light',
    component: () => import(/* webpackChunkName: "about" */ '../views/Light.vue')
  },
  {
    path: '/entity',
    name: 'Entity',
    component: () => import(/* webpackChunkName: "about" */ '../views/Entity.vue')
  },
  {
    path: '/camera',
    name: 'Camera',
    component: () => import(/* webpackChunkName: "about" */ '../views/Camera.vue')
  },
  {
    path: '/assets',
    name: 'Assets',
    component: () => import(/* webpackChunkName: "about" */ '../views/Assets.vue')
  },
  {
    path: '/animation',
    name: 'Animation',
    component: () => import(/* webpackChunkName: "about" */ '../views/Animation.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
