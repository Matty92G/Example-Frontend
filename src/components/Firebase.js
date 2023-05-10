import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBSAE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBSAE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBSAE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBSAE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBSAE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBSAE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user);
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('profilePic', profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
