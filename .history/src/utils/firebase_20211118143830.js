import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from '@firebase/auth'
import {getFirestore}  from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCQYVBaz_sJ5KHmLydvvED0ehbpsDNAJ9w",
  authDomain: "crypto-3a19a.firebaseapp.com",
  projectId: "crypto-3a19a",
  storageBucket: "crypto-3a19a.appspot.com",
  messagingSenderId: "710227207145",
  appId: "1:710227207145:web:9744f7c0d350369cfd2178"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app)
const provider = new GoogleAuthProvider()