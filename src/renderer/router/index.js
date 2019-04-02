import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'System',
      component: require('@/components/System').default
    },
    {
      path: '/System',
      name: 'System',
      component: require('@/components/System').default
    },
    {
      path: '/Cpu',
      name: 'Cpu',
      component: require('@/components/Cpu').default
    },
    {
      path: '/Memory',
      name: 'Memory',
      component: require('@/components/Memory').default
    }
  ]
})
