<template>
     <!-- <nav  id="nav-main" class="wrapper-navigation"> -->
    <nav v-if="isAuthenticated"  id="nav-main" class="wrapper-navigation"> 
      <ol>
        
        <li>
          <!-- <a href="/">SONGS</a> -->
            <router-link to ='/'>SONGS</router-link>
        </li>
        <li>
         <!-- <a href="/albums">ALBUMS</a> -->
          <router-link to = '/albums'>ALBUMS</router-link>
        </li>
        <li>
           <!-- <a href="/about">ABOUT</a>  -->
          <router-link to = '/about'>ABOUT</router-link>
        </li>
      </ol>
    </nav>
  </template>
  
  <script>
   import { useAuthStore } from '../auth';
  export default {
    name: 'NavigationComponent',
  computed: {
    isAuthenticated() {
        const authStore = useAuthStore();
      return authStore.is_authenticated;
    }
  },
  
  }
  </script>
  
  