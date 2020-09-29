import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
    apiKey: "AIzaSyD1ek82p7FrDcpFGnbQvSa6dVB48YeSNtM",
    authDomain: "in-69-days.firebaseapp.com",
    databaseURL: "https://in-69-days.firebaseio.com",
    projectId: "in-69-days",
    storageBucket: "in-69-days.appspot.com",
    messagingSenderId: "748235402567",
    appId: "1:748235402567:web:de454e2598ddc5c3ef7062"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
