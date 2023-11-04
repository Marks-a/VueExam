<template>
    <div id="about-view">
    <div class="wrapper-header">
        <h1>ABOUT ME</h1>
        <div class="settings">

            <button  v-if="!isEditMode"
          id="btn-edit" @click="toggleEditForm" 
          :class="{ active: isEditMode }"> Edit Form</button>
            
          <button v-if="isEditMode"
          id="btn-edit"
          @click="saveUserData"
           >Save Form</button>
        </div>
    </div>
    <form>

        <div class="wrapper-input">

            <label>NAME</label>
            <input id="input-name" v-model="user.name"
                               :readonly="!isEditMode" />

            <p id="txt-name">{{ user.name }}</p>

        </div>
        <div class="wrapper-input">

            <label>SURNAME</label>
            <input id="input-surname" v-model="user.surname"
                               :readonly="!isEditMode"/>
            <p id="txt-surname">{{ user.surname }}</p>
        </div>
        <div class="wrapper-input">

            <label>STUDENT CODE</label>
            <input id="input-code" v-model="user.code"
                               :readonly="!isEditMode"/>
            <p id="txt-code">{{ user.code }}</p>
        </div>


        <div class="wrapper-songs">
            <label>FAVORITE SONGS</label>
            <ul>
                <li>
                    <img id="img-album" src="https://i.scdn.co/image/ab67616d00001e02980c9d288a180838cd12ad24" />
                    <div class="song-info">
                        <p id="txt-song" class="song-name">DEEP (feat. Nonô)</p>
                        <p id="txt-artist" class="song-artists">Example</p>
                    </div>
                </li>
            </ul>
            <div id="txt-empty" class="empty">NO SONGS FOUND</div>
        </div>
    </form>
</div>
</template>

<script>
import { useAuthStore } from '../auth.js'
export default {
    name: 'About',
  data() {
    return {
      isEditMode: false, // Initialize form editing as not active
    };
  },
  computed: {
    user: {
      get() {
        const auth = useAuthStore();
        return auth.user;
      },
    },
  },
  methods: {
    toggleEditForm() {
      this.isEditMode = !this.isEditMode;
    },
    saveUserData() {
      if (this.isEditMode) {
        const auth = useAuthStore();
        auth.setUserData(this.user.name,this.user.surname,this.user.code,
        );

        this.isEditMode = false; 
      }
    },
  },
};





</script>
<style>


</style>