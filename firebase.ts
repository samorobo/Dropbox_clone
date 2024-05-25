import {getApp, getApps, initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "@firebase/firestore"
import { getFunctions } from "firebase/functions"
import { getStorage } from "firebase/storage"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFVWc96DMJ2BX2mtwlXKQU9jV3mZ2bzPM",
    authDomain: "dropbox-clone-88ccd.firebaseapp.com",
    projectId: "dropbox-clone-88ccd",
    storageBucket: "dropbox-clone-88ccd.appspot.com",
    messagingSenderId: "588611568043",
    appId: "1:588611568043:web:b772c002f00418e27b52ee"
  };


  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app)
  const storage = getStorage(app)

  export {db, storage}