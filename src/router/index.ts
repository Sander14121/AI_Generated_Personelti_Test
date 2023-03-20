import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/Personeleti-test',
        name: 'Personeleti-test',
        component: () => import('@/views/personnaleti_test.vue'),
      },
      {
        path: '/AboutUs',
        name: 'AboutUs',
        component: () => import('@/views/About_US.vue'),
      },
      {
        path: '/Contact',
        name: 'Contact',
        component: () => import('@/views/Contact.vue'),
      },
      {
        path: '/Privacy',
        name: 'Privacy',
        component: () => import('@/views/Privacy.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
