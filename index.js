
//  --- --- --- --- --- ---  Инициализация --- --- --- --- --- --- --- ---

const body = document.body
const root = document.querySelector(':root')
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
const btnFavorites = document.getElementById('btnFavorites')
const btnData = document.getElementById('btnData')
const btnStatistics = document.getElementById('btnStatistics')
const btnAbout = document.getElementById('btnAbout')
const contentBlock = document.getElementById('contentBlock')
const labelUnity = document.getElementById('labelUnity')
const navigationPanel = document.getElementById('navigationPanel')
const profile = document.getElementById('profile')
const headerBlock = document.getElementById('headerBlock')
const profIcon = document.getElementById('profIcon')
const NavPanelBtns = [btnHome, btnFavorites, btnData, btnStatistics, btnAbout, profile]
let password, email, width, height
noaccLink.addEventListener('click', onNoaccLink)
hasaccLink.addEventListener('click', onHasaccLink)
btnSignIn.addEventListener('click', onBtnSignIn)
btnSignUp.addEventListener('click', onBtnSignUp)
btnHome.addEventListener('click', onbtnHome)
btnFavorites.addEventListener('click', onbtnFavorites)
btnData.addEventListener('click', onbtnData)
btnStatistics.addEventListener('click', onbtnStatistics)
btnAbout.addEventListener('click', onbtnAbout)
profile.addEventListener('click', onProfile)
width = window.innerWidth
height = window.innerHeight
function onresize() {
    setInterval(function() {
      if ((width != window.innerWidth) || (height !== window.innerHeight)){
        width = window.innerWidth
        height = window.innerHeight
        checkAspectRatio()
        console.log('resized')
      }
    }, 300)
}

window.addEventListener("resize", onresize);

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
  mainBlock.style.width = '100%'
  mainBlock.style.height = '100%'
  mainBlock.style.opacity = "1"
  mainBlock.style["pointer-events"] = "visible"
  onbtnHome()
}
function getNickName() {
  let login = email
  login = email[0].toUpperCase() + email.slice(1, email.indexOf('@')).toLowerCase()
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
  clearMenu()
  btnHome.style["border-bottom"] = '2px solid black'
  btnHome.style.color = 'black'
}
function onbtnFavorites(event){
  contentBlock.innerHTML = "<h1> You at Favorites page now </h1>"
  clearMenu()
  btnFavorites.style["border-bottom"] = '2px solid black'
  btnFavorites.style.color = 'black'
}
function onbtnData(event){
  contentBlock.innerHTML = "<h1> You at Data page now </h1>"
  clearMenu()
  btnData.style["border-bottom"] = '2px solid black'
  btnData.style.color = 'black'
}
function onbtnStatistics(event){
  contentBlock.innerHTML = "<h1> You at Statistics page now </h1>"
  clearMenu()
  btnStatistics.style["border-bottom"] = '2px solid black'
  btnStatistics.style.color = 'black'
}
function onbtnAbout(event){
  contentBlock.innerHTML = "<h1> You at About page now </h1>"
  clearMenu()
  btnAbout.style["border-bottom"] = '2px solid black'
  btnAbout.style.color = 'black'
}

function onProfile() {
  contentBlock.innerHTML = "<h1> You at Profile page now </h1>"
  clearMenu()
  profile.style.color = 'black'
  profile.style["background-color"] = 'rgba(170, 170, 170, 0.2)'
}

function clearMenu(){
  NavPanelBtns.forEach(element => element.style["border-bottom"] = '0px solid black')
  NavPanelBtns.forEach(element => element.style.color = 'white')
  profile.style["background-color"] = 'transparent'
}
checkAspectRatio()
function checkAspectRatio(){

if (width > 1100) {
  navigationPanel.style.opacity = '1'
  navigationPanel.style["pointer-events"] = 'visible'
  profile.style.opacity = '1'
  profile.style["pointer-events"] = 'visible'
  headerBlock.style["margin-top"] = '0px'
  root.style.setProperty('--headerHeight', '150px')
  root.style.setProperty('--profile-width', '12%')
  profile.style.setProperty('--height-Profile', '70px')
  NavPanelBtns.forEach(element => element.style.font = '32px "Fira Sans", sans-serif')
  NavPanelBtns.forEach(element => element.style["text-shadow"] = '1px 0 black, 0 1px black, -1px 0 black, 0 -1px black')
  navigationPanel.style["margin-left"] = 'calc(var(--labelUnity-width))'
  navigationPanel.style.width = 'calc(100% - var(--profile-width) - var(--labelUnity-width))'
  profile["font-size"] = '24px'
  profIcon.style["margin-top"] = '10px'
  profIcon.style.width = '48px'
  labelUnity.innerHTML = `
  <label class="tileLbl" id="tileLbl1" for="tileLbl"><b>Online</b></label>
  <label class="tileLbl" id="tileLbl2" for="tileLbl"><b>Competition</b></label>
  <label class="tileLbl" id="tileLbl3" for="tileLbl"><b>Table</b></label>
  <label class="tileLbl" id="tileLbl4" for="tileLbl">by Droxus corporation</label>`
} else if (width > 600){
  root.style.setProperty('--headerHeight', '100px')
  root.style.setProperty('--profile-width', '15%')
  profile.style.setProperty('--height-Profile', '40px')
  navigationPanel.style.opacity = '1'
  navigationPanel.style["pointer-events"] = 'visible'
  profile.style.opacity = '1'
  profile.style["pointer-events"] = 'visible'
  contentBlock.style.setProperty('--contentBlock-Top', 'calc(var(--headerHeight) + 4%)')
  contentBlock.style["margin-top"] = 'var(--contentBlock-Top)'
  headerBlock.style["margin-top"] = '0px'
  contentBlock.style.height = 'calc(100% - var(--headerHeight) - 6%)'
  navigationPanel.style["margin-left"] = '0px'
  navigationPanel.style.width = width - width * 0.15

  NavPanelBtns.forEach(element => element.style.font = '24px "Fira Sans", sans-serif')
  NavPanelBtns.forEach(element => element.style["text-shadow"] = '1px 0 black, 0 1px black, -1px 0 black, 0 -1px black')
  labelUnity.innerHTML = ' '
  profIcon.style["margin-top"] = '-10px'
  profIcon.style.width = '36px'
  profile["font-size"] = '18px' 
} else {
  root.style.setProperty('--headerHeight', '65px')
  navigationPanel.style.opacity = '0'
  navigationPanel.style["pointer-events"] = 'none'
  profile.style.opacity = '0'
  profile.style["pointer-events"] = 'none'
  labelUnity.innerHTML = ' '
headerBlock.style["margin-top"] = height - 65
contentBlock.style["margin-top"] = '1%'
contentBlock.style.height = height - 65 - height * 0.02






}


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