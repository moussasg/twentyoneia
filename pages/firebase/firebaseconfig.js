import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBby8w9LoEh2NLwJnA4w9cC51aLd3REp90",
    authDomain: "avidhilda-7f3aa.firebaseapp.com",
    projectId: "avidhilda-7f3aa",
    storageBucket: "avidhilda-7f3aa.appspot.com",
    messagingSenderId: "883569303161",
    appId: "1:883569303161:web:5cedde484753899987fea8",
    measurementId: "G-KPWGZF2VSV"
  }
  const app = initializeApp(firebaseConfig) /* firebase and keywordcontext default error*/
  export const auth = getAuth(app)

  const FirebaseModule = () => {
    // This can be an empty component or some description if needed
    return null;
  };
  
  export default FirebaseModule;