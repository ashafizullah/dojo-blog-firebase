import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCLO7fkMb04Fwp-zEMcp-U48-gh6CRqV_k",
  authDomain: "udemy-vue-firebase-sites-5956c.firebaseapp.com",
  projectId: "udemy-vue-firebase-sites-5956c",
  storageBucket: "udemy-vue-firebase-sites-5956c.appspot.com",
  messagingSenderId: "907317093828",
  appId: "1:907317093828:web:1e86146fac1046322a3091"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }