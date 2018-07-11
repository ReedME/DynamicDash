/**
 * Firebase Login
 * Reactify comes with built in firebase login feature
 * You Need To Add Your Firsebase App Account Details Here
 */
import firebase from 'firebase';
import * as keys from '../constants/firebaseKeys';
// Initialize Firebase 
const config = {
    apiKey: keys.API_KEY,
    authDomain: keys.AUTH_DOMAIN,
    databaseURL: keys.DATABASE_URL,
    projectId: keys.PROJECT_ID,
    storageBucket: keys.STORAGE_BUCKET,
    messagingSenderId: keys.MESSAGING_SENDER_ID,
  }

firebase.initializeApp(config);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
const database = firebase.database();

export {
    auth,
    googleAuthProvider,
    githubAuthProvider,
    facebookAuthProvider,
    twitterAuthProvider,
    database
};
