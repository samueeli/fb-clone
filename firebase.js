import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAUoxelUnj91dsbwllau54VOeesjJgOSs4',
  authDomain: 'fb-clone-5ba0f.firebaseapp.com',
  projectId: 'fb-clone-5ba0f',
  storageBucket: 'fb-clone-5ba0f.appspot.com',
  messagingSenderId: '818869654569',
  appId: '1:818869654569:web:fc8f9e16993fb6cc03f838',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
