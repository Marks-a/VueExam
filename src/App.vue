<template>
    <!--  HEADER  -->
    <!-- -->
    <Header v-if="isAuthenticated"></Header>
    <!--  HEADER END  -->

    <!--  BODY  -->
    <div v-if="isAuthenticated" id="section-body">
        <NavigationComponent v-if="isAuthenticated" />
        <router-view class="section-router"></router-view>
    </div>
    <!--  BODY END  -->

    <!--  PLAYER  -->
    <div  v-if="isAuthenticated" id="section-player">
        <AudioPlayer/>
    </div>
    <!--  PLAYER END  -->
</template>

<script>
    import { useAuthStore } from './auth.js'
    import NavigationComponent from './components/NavigationComponent.vue';
    import Header from "/src/components/HeaderComponent.vue"
    import AudioPlayer from "/src/components/AudioPlayerComponent.vue"

    export default {
    components: {
    Header,
    AudioPlayer,
    NavigationComponent,
},
computed: {
    isAuthenticated() {
        const authStore = useAuthStore();
      return authStore.is_authenticated;
    }
}
    }
</script>
