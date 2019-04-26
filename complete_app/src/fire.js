import firebase from 'firebase';
const config = {
    apiKey: "xxxx",
    authDomain: "xxxx",
    databaseURL: "xxxx",
    projectId: "xxxx",
    storageBucket: "xxxx",
    messagingSenderId: "xxxx"
};
const fire = firebase.initializeApp(config)
export { fire }