import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");


const firebaseConfig = {
  apiKey: "AIzaSyD4vvW1aZ0VGS3MIuxgImfLESIBKYNzuGc",
  authDomain: "crud-nuxt-vue.firebaseapp.com",
  databaseURL: "https://crud-nuxt-vue.firebaseio.com",
  projectId: "crud-nuxt-vue",
  storageBucket: "crud-nuxt-vue.appspot.com",
  messagingSenderId: "809178298742",
  appId: "1:809178298742:web:e2867e77a8c536b379a257"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {
  firebase,
  db,
  auth,
  storage
}
