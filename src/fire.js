import firebase from 'firebase';
const config = {
    apiKey: "xxxxx",
    authDomain: "xxxxx",
    databaseURL: "xxxxx",
    projectId: "xxxxx",
    storageBucket: "xxxxx",
    messagingSenderId: "xxxxx"
};
const fire = firebase.initializeApp(config)
export { fire }