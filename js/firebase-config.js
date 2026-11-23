// CONFIGURACIÓN DE FIREBASE

const firebaseConfig = {
  apiKey: "AIzaSyABaiNno0pN1Kx1_0LMSrIJK69sIpB8Oew",
  authDomain: "lab-prog-iii-final.firebaseapp.com",
  projectId: "lab-prog-iii-final",
  storageBucket: "lab-prog-iii-final.firebasestorage.app",
  messagingSenderId: "500918995116",
  appId: "1:500918995116:web:2d238bdc6f3e147c863709"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Inicializar servicios
const auth = firebase.auth();
const db = firebase.firestore();

console.log("✅ Firebase inicializado correctamente");