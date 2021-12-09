import {initializeApp} from 'firebase/app';
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyBJ6ucXxm6wPGaLLg2GDamE5QWr2YPXkNg',
  authDomain: 'reactnative-6b773.firebaseapp.com',
  projectId: 'reactnative-6b773',
  storageBucket: 'reactnative-6b773.appspot.com',
  messagingSenderId: '1039471273956',
  appId: '1:1039471273956:web:79fba53f7360de8a6189f1',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
