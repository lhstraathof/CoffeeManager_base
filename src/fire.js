import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDJZE-9tRzzDMiHf-K4H-UnbMZvh_YYHSQ",
    authDomain: "q-it-coffee.firebaseapp.com",
    databaseURL: "https://q-it-coffee.firebaseio.com",
    projectId: "q-it-coffee",
    storageBucket: "q-it-coffee.appspot.com",
    messagingSenderId: "261956676170"
};
const fire = firebase.initializeApp(config)
export { fire }