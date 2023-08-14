import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA0IMeUce_j-gwnSa14p6rG0YiXK2q4BzI',
  authDomain: 'audionest-5a468.firebaseapp.com',
  projectId: 'audionest-5a468',
  storageBucket: 'audionest-5a468.appspot.com',
  //   messagingSenderId: '255097050083',
  appId: '1:255097050083:web:d048601a36ca1cf9da86d6'
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore()
export const userCollection = db.collection('users')
// export const userAuth = firebase.getAuth()
