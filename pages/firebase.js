// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAir2p09zvcMhTW87xX3MnNB-W0AnIyc0c",
  authDomain: "uber-next-clone-live-a5fc6.firebaseapp.com",
  projectId: "uber-next-clone-live-a5fc6",
  storageBucket: "uber-next-clone-live-a5fc6.appspot.com",
  messagingSenderId: "850222351668",
  appId: "1:850222351668:web:908cef25245f7b6aa75161",
  measurementId: "G-9JTJ8R4653"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth()
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { app, provider , auth, db } 