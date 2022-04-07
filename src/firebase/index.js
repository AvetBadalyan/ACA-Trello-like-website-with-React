import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDg5SToiAeqYOtv6h4ZVhOy-uJ642ecqg0",
  authDomain: "task-management-3f585.firebaseapp.com",
  projectId: "task-management-3f585",
  storageBucket: "task-management-3f585.appspot.com",
  messagingSenderId: "611441892146",
  appId: "1:611441892146:web:aad678daf50fe6d712152b",
};

// init app

firebase.initializeApp(firebaseConfig);

// init services
const projectFireStore = firebase.firestore();

export { projectFireStore };
