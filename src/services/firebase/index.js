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

 // const firebaseConfig = {
 //   apiKey: "AIzaSyDheLYue570fnGcQSWEXZnlmkcd9bYZzaI",
  //  authDomain: "backend31865.firebaseapp.com",
   // projectId: "backend31865",
  //  storageBucket: "backend31865.appspot.com",
  //  messagingSenderId: "616260344635",
  //  appId: "1:616260344635:web:4645fc9616ef411c09351e"
  //};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)