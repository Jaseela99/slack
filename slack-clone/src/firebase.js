import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDs_isgnxHWKAVQR1_afMGbftOQbEwM59U",
    authDomain: "slack-clone-4c046.firebaseapp.com",
    projectId: "slack-clone-4c046",
    storageBucket: "slack-clone-4c046.appspot.com",
    messagingSenderId: "493325919607",
    appId: "1:493325919607:web:cde116cf79b572b647ed72",
    measurementId: "G-0Q9HSLZ1X4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  export const db= firebaseApp.firestore()
  export  const auth= firebase.auth()

 export const provider = new firebase.auth.GoogleAuthProvider()
 provider.setCustomParameters({prompt:"select_account"})
  


  
  

   
  