import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/sign-in',
    name: 'SignIn',
    component: () => import( '../pages/authentication/Index.vue')
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import( '../pages/signUp/Index.vue')
  },
  {
    path: '/',
    name: 'HomePage',
    component: () => import( '../pages/homePage/Index.vue')
  },
  {
    path: '/product-detail/:id',
    name: 'ProductDetail',
    component: () => import( '@/pages/productDetails/Index.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import( '@/pages/cart/Index.vue')
  },
  {
    path: '/wish-list',
    name: 'WishList',
    component: () => import( '@/pages/wishList/Index.vue')
  },
  {
    path: '/all-products/:type',
    name: 'AllProducts',
    component: () => import( '@/pages/allProducts/Index.vue'),
    props:true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
