import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyDmHIaM14Ulj7TpTH0LxjiaCEnxBDaXqwE",
    authDomain: "certificados-5c31d.firebaseapp.com",
    databaseURL: "https://certificados-5c31d.firebaseio.com",
    projectId: "certificados-5c31d",
    storageBucket: "certificados-5c31d.appspot.com",
    messagingSenderId: "444123562220"
};
 let app =firebase.initializeApp(config);
const db = firebase.firestore(app);
firebase.firestore().settings(settings);

export {firebase, db};