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
      const user = result.user;
      const token = user.accessToken;
      const name = user.displayName;
      const email = user.email;
      const profilePic = user.photoURL;

      localStorage.setItem('token', token);
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('profilePic', profilePic);
      console.log('token', token);
      console.log('name', name);
      console.log('email', email);
      console.log('profilePic', profilePic);
    })
    .catch(function (error) {
      console.log(error.code);
      console.log(error.message);
    });
};

export const signOutWithGoogle = () => {
  auth.signOut().then(
    () => {
      localStorage.clear('token');
      localStorage.clear('name');
      localStorage.clear('email');
      localStorage.clear('profilePic');
      console.log('Signout Succesfull');
    },
    (error) => {
      console.log('Signout Failed' + error);
    }
  );
};
