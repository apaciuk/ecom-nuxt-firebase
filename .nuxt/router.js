import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _55d30bfc = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _d5e14b98 = () => interopDefault(import('../pages/blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _9daabd50 = () => interopDefault(import('../pages/blog-one.vue' /* webpackChunkName: "pages/blog-one" */))
const _17ac3abd = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _82b1013a = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _47c64f93 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _77da6354 = () => interopDefault(import('../pages/diction-three.vue' /* webpackChunkName: "pages/diction-three" */))
const _0efca7f8 = () => interopDefault(import('../pages/diction-two.vue' /* webpackChunkName: "pages/diction-two" */))
const _27f36c44 = () => interopDefault(import('../pages/gallery-one.vue' /* webpackChunkName: "pages/gallery-one" */))
const _6d4ec91c = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _b60676fe = () => interopDefault(import('../pages/products.vue' /* webpackChunkName: "pages/products" */))
const _ee377116 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _47310121 = () => interopDefault(import('../pages/products-details/_id.vue' /* webpackChunkName: "pages/products-details/_id" */))
const _b8b1b3f6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _55d30bfc,
    name: "admin"
  }, {
    path: "/blog-details",
    component: _d5e14b98,
    name: "blog-details"
  }, {
    path: "/blog-one",
    component: _9daabd50,
    name: "blog-one"
  }, {
    path: "/cart",
    component: _17ac3abd,
    name: "cart"
  }, {
    path: "/checkout",
    component: _82b1013a,
    name: "checkout"
  }, {
    path: "/contact",
    component: _47c64f93,
    name: "contact"
  }, {
    path: "/diction-three",
    component: _77da6354,
    name: "diction-three"
  }, {
    path: "/diction-two",
    component: _0efca7f8,
    name: "diction-two"
  }, {
    path: "/gallery-one",
    component: _27f36c44,
    name: "gallery-one"
  }, {
    path: "/login",
    component: _6d4ec91c,
    name: "login"
  }, {
    path: "/products",
    component: _b60676fe,
    name: "products"
  }, {
    path: "/signup",
    component: _ee377116,
    name: "signup"
  }, {
    path: "/products-details/:id?",
    component: _47310121,
    name: "products-details-id"
  }, {
    path: "/",
    component: _b8b1b3f6,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
