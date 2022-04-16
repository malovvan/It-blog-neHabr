// Import the functions you need from the SDKs you need
import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp8FeoTpbGVLvbkp6Vk9aIy9CiTrS6rS0",
  authDomain: "it-blog-nehabr.firebaseapp.com",
  projectId: "it-blog-nehabr",
  storageBucket: "it-blog-nehabr.appspot.com",
  messagingSenderId: "942931705100",
  appId: "1:942931705100:web:a8ea6fcd4536a5a0f9dd29",
  measurementId: "G-XS2P4NHJSJ"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

let app = null
// prevent initializing firebase more than once
if (!firebase.apps.length) { 
  app = firebase.initializeApp(firebaseConfig)
}
export default (ctx, inject) => {
  inject('firebase', firebase)
}