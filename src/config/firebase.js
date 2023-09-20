import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA78ZSRQ8SJ_00s6CWHg3YROWgIZ7_Uilk",
    authDomain: "drag-drop-images.firebaseapp.com",
    projectId: "drag-drop-images",
    storageBucket: "drag-drop-images.appspot.com",
    messagingSenderId: "247046035536",
    appId: "1:247046035536:web:1d966f2c39c09e1c75d955",
    measurementId: "G-QFDN10YSPM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
