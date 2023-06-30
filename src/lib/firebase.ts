import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDGV5-ZIlQCUCbNC06g2C2RxyYcWheQvgc",
    authDomain: "foo-app-d343c.firebaseapp.com",
    projectId: "foo-app-d343c",
    storageBucket: "foo-app-d343c.appspot.com",
    messagingSenderId: "777553720454",
    appId: "1:777553720454:web:ca6906003af4a073844d07",
    measurementId: "G-NQXP6K5YSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
