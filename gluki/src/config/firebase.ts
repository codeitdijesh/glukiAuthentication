import { initializeApp, getApps, getApp, FirebaseOptions } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';


// Firebase configuration from your GoogleService-Info.plist
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBSpLJmbbIMVJMH2YIKRggx0RVBq3i8NDg",
  authDomain: "gluki-93f82.firebaseapp.com",
  projectId: "gluki-93f82",
  storageBucket: "gluki-93f82.firebasestorage.app",
  messagingSenderId: "924408071481",
  appId: "1:924408071481:ios:a72f406f5160c5522d54e8",
  databaseURL: "https://gluki-93f82-default-rtdb.firebaseio.com"
}; 

// Initialize Firebase App
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// Initialize Firebase Auth
const auth = getAuth(app);
console.log('Firebase Auth initialized');

// Initialize Firestore
const firestore: Firestore = getFirestore(app);
console.log('Firestore initialized');


export { auth, firestore };
export default app;
