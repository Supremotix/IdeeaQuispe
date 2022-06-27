import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAnnyVSQfU4w13OtKqR48jetF3APArHO0g",
    authDomain: "backend-react-ed97e.firebaseapp.com",
    projectId: "backend-react-ed97e",
    storageBucket: "backend-react-ed97e.appspot.com",
    messagingSenderId: "972488336822",
    appId: "1:972488336822:web:d5aec518d30ce27015cd17"
  };



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)