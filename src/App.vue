<template>
  <div id="app" @androidback="back">
    <app-header></app-header>
      <router-view style="flex:1"></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppHeader from './AppHeader.vue'
  import AppFooter from './AppFooter.vue'
  export default {
    components: {
      AppHeader,
      AppFooter
    },
    name: 'app'
}
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Open%20Sans); #app { background-color: #F6F6EF; position: relative; width: 100%; min-height: 80px; margin: 0 auto; font-family: 'Open Sans', sans-serif; font-size: 15px; height: 100%; } @media only screen and (max-width: 768px) { #wrapper { width: 100%; background-color: #fff; } }
</style>
