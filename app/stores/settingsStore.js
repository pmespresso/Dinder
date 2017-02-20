import firebase from 'firebase';
import MobxFirebaseStore from 'mobx-firebase-store';
const config = {
  apiKey: "AIzaSyB-KfJo_rPv3Dbmv5-UNc6J5lYGH4kP15M",
  authDomain: "dinder-68b92.firebaseapp.com",
  databaseURL: "https://dinder-68b92.firebaseio.com",
  storageBucket: "dinder-68b92.appspot.com",
  messagingSenderId: "541218239410"
}

export default class SettingsStore extends MobxFirebaseStore {
  constructor() {
    firebase.initializeApp(config);
    /* pass reference of database to MobxFirebaseStore
     * which we are inheriting from */
    super(firebase.database().ref());
    this.splashTime = 1000;
    this.splashImg = require('../../images/splash.jpg');
    this.loginBG = require('../../images/login.jpg');
  }

  get SplashTime() {
    return this.splashTime;
  }

  get SplashImg() {
    return this.splashImg;
  }

  get LoginBG() {
    return this.loginBG;
  }
}
