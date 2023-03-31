// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAPiYLp3C7xSEKYi-lDn6Yv-xOTDRrqngU",
	authDomain: "chat-app-cb818.firebaseapp.com",
	projectId: "chat-app-cb818",
	storageBucket: "chat-app-cb818.appspot.com",
	messagingSenderId: "483491928087",
	appId: "1:483491928087:web:6c0cd2a0d075a9d136a452",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
