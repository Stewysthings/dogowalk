import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase project config (replace with actual values from console.firebase.google.com)
const firebaseConfig = {
  apiKey: 'YOUR_ACTUAL_FIREBASE_API_KEY',
  authDomain: 'YOUR_ACTUAL_FIREBASE_AUTH_DOMAIN',
  projectId: 'YOUR_ACTUAL_FIREBASE_PROJECT_ID',
  storageBucket: 'YOUR_ACTUAL_FIREBASE_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_ACTUAL_FIREBASE_MESSAGING_SENDER_ID',
  appId: 'YOUR_ACTUAL_FIREBASE_APP_ID'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; // Export Firestore instance