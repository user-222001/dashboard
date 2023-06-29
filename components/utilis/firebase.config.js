// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8qHnY0q-O8kcEVyf2Tuas74n-4tCR1_M",
  authDomain: "dashboard-nextjs-a8eac.firebaseapp.com",
  databaseURL: "https://dashboard-nextjs-a8eac-default-rtdb.firebaseio.com",
  projectId: "dashboard-nextjs-a8eac",
  storageBucket: "dashboard-nextjs-a8eac.appspot.com",
  messagingSenderId: "912836650214",
  appId: "1:912836650214:web:00b3f7d88395efcbd48727",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
