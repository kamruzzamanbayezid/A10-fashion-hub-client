
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
      apiKey: "AIzaSyA-YM-PsjwdpcqVe6ZUjAs2W1tlzpjJL-w",
      authDomain: "fashion-hub-fc527.firebaseapp.com",
      projectId: "fashion-hub-fc527",
      storageBucket: "fashion-hub-fc527.appspot.com",
      messagingSenderId: "1031081810345",
      appId: "1:1031081810345:web:eaf2bc6a232029f9848cb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;