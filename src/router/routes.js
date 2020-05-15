
export default [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/home'),
  },
  {
    path: '/detail/:slug',
    name: 'detail',
    props: true,
    component: () => import('./views/detail'),
  },
  {
    path: '/tentang-kami',
    name: 'tentang-kami',
    component: () => import('./views/about'),
  },
]
