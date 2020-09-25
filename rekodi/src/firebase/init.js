import firebase from 'firebase';
import firestore from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCXXI7MVz3ucGSWeH7z5Edb8KdTEzN9brY",
    authDomain: "rekodii.firebaseapp.com",
    databaseURL: "https://rekodii.firebaseio.com",
    projectId: "rekodii",
    storageBucket: "rekodii.appspot.com",
    messagingSenderId: "824804778703",
    appId: "1:824804778703:web:ca12b6bd7fb5695e060dba"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
