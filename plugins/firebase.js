// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize storage
const storage = getStorage();

// Initialize auth
const auth = getAuth(app);

export default (ctx, inject) => {
  inject('db', db);
  inject('fireStorage', storage) 
  inject('auth', auth) 
}
