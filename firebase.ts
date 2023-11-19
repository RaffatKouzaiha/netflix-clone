// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmIfS3DZMwvNo2TEOXGuosYwAAZQaIdsc",
    authDomain: "netflix-clone-real-13567.firebaseapp.com",
    projectId: "netflix-clone-real-13567",
    storageBucket: "netflix-clone-real-13567.appspot.com",
    messagingSenderId: "91886789979",
    appId: "1:91886789979:web:7c34532e78912c09f4a67e"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }