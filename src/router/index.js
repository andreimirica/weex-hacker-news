// import Vue from 'vue'
import VueRouter from 'vue-router'
import Stories from '../Stories.vue'
import ItemComments from '../ItemComments.vue'
import User from '../User.vue'

Vue.use(VueRouter);

function fakeComponentGenerator (storiestype) {
  return {
    name: `${storiestype}-stories`,
    render (createElement) {
      return createElement(Stories, { props: { storiestype : storiestype}})
    }
  }
}

export default new VueRouter({
    routes: [
    {path: '/news', component: fakeComponentGenerator('news')},
    {path: '/newest', component: fakeComponentGenerator('newest')},
    {path: '/show', component: fakeComponentGenerator('show')},
    {path: '/ask', component: fakeComponentGenerator('ask')},
    {path: '/jobs', component: fakeComponentGenerator('jobs')},
    {path: '/item/:id', component: ItemComments},
    {path: '/user/:id', component: User},
    {
      path: '/',
      redirect: '/news'
    }
  ]
})
