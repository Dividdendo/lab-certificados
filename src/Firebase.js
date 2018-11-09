import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
   
};

 let app =firebase.initializeApp(config);
const db = firebase.firestore(app);
firebase.firestore().settings(settings);

export {firebase, db};