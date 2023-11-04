import {createRouter, createWebHistory} from 'vue-router'
import { useAuthStore } from '../auth.js';
import Songs from '@/views/Songs.vue';
import Album from '@/views/Album.vue';
import About from '@/views/About.vue'
import Login from '../views/Login.vue'
import { useRouter } from 'vue-router';
const router = createRouter({
    history: createWebHistory(),
    routes : [{
        path: '/login',
      name: 'Login',
      component: Login,
    },
    {
        path:'/',
        name:'Songs',
        component:Songs,
    },
    {
        path:'/albums',
        name: "album",
        component: Album,
    },
    {
        path:'/about',
        name:'about',
        component:About,
    }

    ]
})


router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    const isAuth = authStore.is_authenticated;
    if (to.path === '/login') {
      if (isAuth==='true') {
        console.log('Redirecting to /');
        next({ name: '/' });
      } else {
        next(); 
      }
    } else {
      if (!isAuth) {
        console.log('Redirecting to /login');
        next('/login'); 
      } else {
        next(); 
      }
   }
});

 

export default router


// LV
// Tiek izveidots middleware / starpprogrammatūra kura katru reizi veiks pārbaudi pirms tiks nomainīta rūtera adrese
// arguments to glabā adresi uz kurieni gribam iet
// arguments from glabā adresi no kurienes mēs nākam

// ENG
// Middleware is a function that is executed before the route is changed
// argument "to" stores the address where we want to navigate/go
// argument "from" stores the address from where we're coming from
