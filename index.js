// import './style.css';
//  --- --- --- --- --- ---  Инициализация --- --- --- --- --- --- --- ---

const body = document.body
const btnSignIn = document.getElementById('btnSignIn')
const btnSignUp = document.getElementById('btnSignUp')
const signIn = Array.from(document.getElementsByClassName('signIn'))
const signUp = Array.from(document.getElementsByClassName('signUp'))
const authMenu = Array.from(document.getElementsByClassName('authMenu'))
const dataEnterSqr = Array.from(document.getElementsByClassName('dataEnterSqr'))
const hasaccLink = document.getElementById('hasaccLink')
const noaccLink = document.getElementById('noaccLink')
const inptUsername = document.getElementById('inptUsername')
const inptPassword = document.getElementById('inptPassword')
const mainBlock = document.getElementById('mainBlock')
const nickForLabel = document.getElementById('nickForLabel')
const btnHome = document.getElementById('btnHome')
const btnMyTournaments = document.getElementById('btnMyTournaments')
const btnDataEnter = document.getElementById('btnDataEnter')
const btnStatistics = document.getElementById('btnStatistics')
const btnAbout = document.getElementById('btnAbout')
const contentBlock = document.getElementById('contentBlock')
let password, email
noaccLink.addEventListener('click', onNoaccLink)
hasaccLink.addEventListener('click', onHasaccLink)
btnSignIn.addEventListener('click', onBtnSignIn)
btnSignUp.addEventListener('click', onBtnSignUp)
btnHome.addEventListener('click', onbtnHome)
btnMyTournaments.addEventListener('click', onbtnMyTournaments)
btnDataEnter.addEventListener('click', onbtnDataEnter)
btnStatistics.addEventListener('click', onbtnStatistics)
btnAbout.addEventListener('click', onbtnAbout)


//  --- --- --- --- --- ---  Авторизация --- --- --- --- --- --- --- ---

function onNoaccLink(event){
    signUp.forEach(element => element.style.opacity = "1")
    signIn.forEach(element => element.style.opacity = "0")
    signUp.forEach(element => element.style["pointer-events"] = "visible")
    signIn.forEach(element => element.style["pointer-events"] = "none")
}
function onHasaccLink(event){
    signUp.forEach(element => element.style.opacity = "0")
    signIn.forEach(element => element.style.opacity = "1")
    signUp.forEach(element => element.style["pointer-events"] = "none")
    signIn.forEach(element => element.style["pointer-events"] = "visible")
}

function clearMenuOfAuth(){
  dataEnterSqr.forEach(element => element.style.opacity = "0")
  dataEnterSqr.forEach(element => element.style["pointer-events"] = "none")
  body.style["background-color"] = "white"
  // body.style.background = "none"
}

function showMainPage(){
  mainBlock.style.opacity = "1"
  mainBlock.style["pointer-events"] = "visible"
}
function getNickName() {
  let login = email
  login = email.slice(0, email.indexOf('@')).toUpperCase() 
  nickForLabel.innerHTML = login
}
function onSignIn(){
  console.log(email, password)
  getNickName()
  password = null
  clearMenuOfAuth()
  showMainPage()
  }



//--- --- --- --- --- ---  Главная --- --- --- --- --- --- --- ---

function onbtnHome(event){
  contentBlock.innerHTML = "<h1> You at Home page now </h1>"
}
function onbtnMyTournaments(event){
  contentBlock.innerHTML = "<h1> You at My Tournaments page now </h1>"
}
function onbtnDataEnter(event){
  contentBlock.innerHTML = "<h1> You at Data Enter page now </h1>"
}
function onbtnStatistics(event){
  contentBlock.innerHTML = "<h1> You at Statistics page now </h1>"
}
function onbtnAbout(event){
  contentBlock.innerHTML = "<h1> You at About page now </h1>"
}




//--- --- --- --- --- ---  firebase --- --- --- --- --- --- --- ---

import firebase from 'firebase/compat/app';

import  'firebase/compat/auth';
import 'firebase/compat/firestore';
import * as firebaseui from 'firebaseui'

const firebaseConfig = {
  apiKey: "AIzaSyAzQ4SrlGSwrnJlrJxk0rxzy5IHPfUo8kE",
  authDomain: "competetive-table.firebaseapp.com",
  projectId: "competetive-table",
  storageBucket: "competetive-table.appspot.com",
  messagingSenderId: "996767732762",
  appId: "1:996767732762:web:28d6300854de4ff7bbeda3",
  measurementId: "G-65HVZ91Q60"
};

const app = firebase.initializeApp(firebaseConfig);
const ui = new firebaseui.auth.AuthUI(firebase.auth(app));

function onBtnSignUp(event){
    email = inptUsername.value
password = inptPassword.value
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    onSignIn()
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });


}
function onBtnSignIn(event){
    email = inptUsername.value
    password = inptPassword.value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      onSignIn()
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });