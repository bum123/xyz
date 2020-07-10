// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyDUisYvFEck1z2FRY-t1f_qlFw14MmE1Sg",
  authDomain: "dddddd-db46f.firebaseapp.com",
  databaseURL: "https://dddddd-db46f.firebaseio.com",
  projectId: "dddddd-db46f",
  storageBucket: "dddddd-db46f.appspot.com",
  messagingSenderId: "291257371148",
  appId: "1:291257371148:web:907b1e52527caa7ca47c29",
  measurementId: "G-WFW5LB80DV"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics()

window.firebase = firebase
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
