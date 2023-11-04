<template>
    <div id="login-view">
        <form class="login-form">
            <div class="wrapper-logo">
                <img src="@/assets/logo.svg" />
                <div>KRAKEN.FM</div>
            </div>
            <input id="input-email" v-model="userEmail" placeholder="E-mail" />
            <input id="input-password" v-model="userPassword" placeholder="Password" />
            <button id="btn-submit" @click="login" :disabled="isNotSubmitted">LOGIN</button>
        </form>
    </div>
</template>
<script>
import { useAuthStore } from '../auth';

export default {
    data() {
        return {
            userEmail: '',
            userPassword: '',

        };
    },
    computed: {
        isNotSubmitted() {
            return !(this.userEmail && this.userPassword.length >= 6);
        },
    },
    methods: {
        login() {
            const email = this.userEmail;
            const password = this.userPassword;
            const authStore = useAuthStore();
            authStore.authenticate(email,password);
          //  authStore.setUserData('NAME', 'Surname', 'IT1234');
        }
    }
}
</script>