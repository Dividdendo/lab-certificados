import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
  
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;