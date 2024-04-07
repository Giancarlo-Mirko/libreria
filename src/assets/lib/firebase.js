import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA8S-jdsQsJD7j6dSsQ5Koy5qVi_7JgOaQ',
  authDomain: 'miblog-cb7a5.firebaseapp.com',
  projectId: 'miblog-cb7a5',
  storageBucket: 'miblog-cb7a5.appspot.com',
  messagingSenderId: '903848107023',
  appId: '1:903848107023:web:8c1d6681c6763fab0e977a',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
