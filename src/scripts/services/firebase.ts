import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyD6qrof9hrfDCSOSl2URGfd2bYhc-PqnpM",
  authDomain: "the-irrelevant-project.firebaseapp.com",
  databaseURL: "https://the-irrelevant-project.firebaseio.com",
  projectId: "the-irrelevant-project",
  storageBucket: "the-irrelevant-project.appspot.com",
  messagingSenderId: "654368705913"
};

export const fire = firebase.initializeApp(config);
