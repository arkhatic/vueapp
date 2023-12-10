import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'ComandasView',
      component: () => import('@/views/ComandasView.vue'),
    },
    {
      path: '/produtos',
      name: 'ProdutosView',
      component: () => import('@/views/ProdutosView.vue'),
    },
    {
      path: '/historico',
      name: 'HistoricoView',
      component: () => import('@/views/HistoricoView.vue'),
    },
    {
      path: '/config',
      name: 'Configuracoes',
      component: () => import('@/views/ConfiguracoesView.vue'),
    },
  ],
})

export default router