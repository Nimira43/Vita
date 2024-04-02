import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjdiVteMjmyJvUO-XpiM4ebQ0sc42npqA",
  authDomain: "win-s-fashions-db.firebaseapp.com",
  projectId: "win-s-fashions-db",
  storageBucket: "win-s-fashions-db.appspot.com",
  messagingSenderId: "961263746381",
  appId: "1:961263746381:web:cb78c2180d3b877e788b04"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)