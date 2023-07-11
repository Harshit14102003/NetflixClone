
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAcUGS4RwVmnnQyP9Y7z61fCMdw90e3ez4",
  authDomain: "netflix-clone-665ed.firebaseapp.com",
  projectId: "netflix-clone-665ed",
  storageBucket: "netflix-clone-665ed.appspot.com",
  messagingSenderId: "1098791960336",
  appId: "1:1098791960336:web:c0beb7863a3db132d8ef95"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);