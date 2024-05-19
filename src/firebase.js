import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAPZZa8AvrV-zHl2mWCq6iybeJqGzaMAUQ",
  authDomain: "react-auth-9e4f3.firebaseapp.com",
  projectId: "react-auth-9e4f3",
  storageBucket: "react-auth-9e4f3.appspot.com",
  messagingSenderId: "113996477878",
  appId: "1:113996477878:web:d8386d7ecc4d550202bd17"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)