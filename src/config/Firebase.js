// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARUf-hIU-w7_93TSqbFiv1jllkCJztDEc",
  authDomain: "fir-react-crud-efe22.firebaseapp.com",
  projectId: "fir-react-crud-efe22",
  storageBucket: "fir-react-crud-efe22.appspot.com",
  messagingSenderId: "261353429695",
  appId: "1:261353429695:web:cc63c4726bf54b9031040a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase();
export const auth = getAuth();
