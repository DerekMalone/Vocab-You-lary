import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from './loginButton';
import firebaseConfig from '../../api/apiKeys';
import startApp from './startApp';
import logoutButton from './logoutButton';
import { clearDom, clearNav } from './clearDom';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp();
      logoutButton();
    } else {
      // person is NOT logged in
      clearDom();
      clearNav();
      loginButton();
    }
  });
};

export default checkLoginStatus;
