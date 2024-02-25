import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfFKSmz9zmbeETiXoTjIaYJL9GJ4r0uy0",
  authDomain: "testing-bdd5f.firebaseapp.com",
  databaseURL: "https://testing-bdd5f-default-rtdb.firebaseio.com",
  projectId: "testing-bdd5f",
  storageBucket: "testing-bdd5f.appspot.com",
  messagingSenderId: "598939269148",
  appId: "1:598939269148:web:cbf56bc0add874973cc7d9",
  measurementId: "G-HQZPM3HK2G",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
export { app };
