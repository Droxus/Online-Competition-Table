//  --- --- --- --- --- ---  Авторизация --- --- --- --- --- --- --- ---


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
let password, login
noaccLink.addEventListener('click', onNoaccLink)
hasaccLink.addEventListener('click', onHasaccLink)
btnSignIn.addEventListener('click', onBtnSignIn)
btnSignUp.addEventListener('click', onBtnSignIn)
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
function onBtnSignIn(event){
login = inptUsername.value
password = inptPassword.value
console.log(login, password)
clearMenuOfAuth()
}

//--- --- --- --- --- ---  Главная --- --- --- --- --- --- --- ---

const body = document.body
function clearMenuOfAuth(){
    dataEnterSqr.forEach(element => element.style.opacity = "0")
    dataEnterSqr.forEach(element => element.style["pointer-events"] = "none")
    body.style["background-color"] = "white"
}


//--- --- --- --- --- ---  firebase --- --- --- --- --- --- --- ---

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
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
