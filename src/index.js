// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'
import { sync } from 'vuex-router-sync'

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router);

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
new Vue(Vue.util.extend({ el: '#root', router, store }, App));

router.push('/news');