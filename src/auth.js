import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
export const useAuthStore = defineStore({
  id: 'auth', 

  state: () => ({
    user: {
      name: 'Mark',
      surname: 'A',
      code: 'IT1234',
      favorite_songs: [],
    },
    authenticated: true,
  }),
  mutations: {
    updateUser(user,sur,code) {
      this.user = user;
      this.surname = sur;
      this.code = code;
    },
  },
  getters: {
    is_authenticated: (state) => {
         const localVal = localStorage.getItem('is_authenticated');
         return localVal !== null? localVal === 'true' :state.authenticated; //By default I set it to true
        
    },
    getFavoriteSongs: (state) => {
      return state.user.favorite_songs;
    },
  },

  
  actions: {
    setUserData(name, surname, code) {
        this.user.name = name;
         this.user.surname = surname;
         this.user.code = code;
    },
    // setUser(updateUser) {
    //     this.user = { ...this.user, ...updatedUser };
      
    // }
    authenticate(email,password) {
        if (email === 'marks.auzins@va.lv' && password === '123456') {
            localStorage.setItem('is_authenticated', 'true');
            this.authenticated = true;
            console.log('Authenticated');
            const router = useRouter();
            router.push('/');
        }
    },
    

    logout() {
        localStorage.clear();
        this.authenticated = false;
        const router = useRouter();
        router.push('/login');
    
    },
    toggleFavorite(idSong) {
        const i = this.user.favorite_songs.indexOf(idSong);
        if(i===-1) {
            this.user.favorite_songs.push(idSong);
        }
        else {
            this.user.favorite_songs.splice(i,1);
        }
        localStorage.setItem('favortie_songs',JSON.stringify(this.user.favorite_songs)); //Prob
    },
  },
});
