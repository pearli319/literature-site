import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Conrad from '@/components/pages/Conrad'
import Woolf from '@/components/pages/woolf'
import Orwell from '@/components/pages/orwell'
import Yeats from '@/components/pages/yeats'
import Game from '@/components/pages/Game'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/conrad',
      name: 'Conrad',
      component: Conrad,
    },
    {
      path: '/woolf',
      name: 'Woolf',
      component: Woolf,
    },
    {
      path: '/orwell',
      name: 'Orwell',
      component: Orwell,
    },
    {
      path: '/yeats',
      name: 'Yeats',
      component: Yeats,
    },
    {
      path: '/game',
      name: 'Game',
      component: Game,
    },
  ]
})
