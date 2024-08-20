
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


  import {getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"


  const firebaseConfig = {
    apiKey: "AIzaSyClT8IjP2BsEc0O8ijN2NYjmjAjGpV4ZKQ",
    authDomain: "sell-and-buy-corner.firebaseapp.com",
    projectId: "sell-and-buy-corner",
    storageBucket: "sell-and-buy-corner.appspot.com",
    messagingSenderId: "423733583272",
    appId: "1:423733583272:web:cfec095e4146b87154d19d",
    measurementId: "G-ST8TKF1GM3"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);