
//  --- --- --- --- --- ---  Инициализация --- --- --- --- --- --- --- ---
import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import * as firebaseui from 'firebaseui';

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
const db = firebase.firestore();


const body = document.body;
const root = document.querySelector(':root');
const btnSignIn = document.getElementById('btnSignIn');
const authMenu = Array.from(document.getElementsByClassName('authMenu'));
const dataEnterSqr = document.getElementById('dataEnterSqr');
const noaccLink = document.getElementById('noaccLink');
const inptUsername = document.getElementById('inptUsername');
const inptPassword = document.getElementById('inptPassword');
const mainBlock = document.getElementById('mainBlock');
const nickForLabel = document.getElementById('nickForLabel');
const btnHome = document.getElementById('btnHome');
const btnFavorites = document.getElementById('btnFavorites');
const btnData = document.getElementById('btnData');
const btnStatistics = document.getElementById('btnStatistics');
const btnAbout = document.getElementById('btnAbout');
const contentBlock = document.getElementById('contentBlock');
const contentBlockClass = Array.from(document.getElementsByClassName('contentBlock'));
const labelUnity = document.getElementById('labelUnity');
const navigationPanel = document.getElementById('navigationPanel');
const profile = document.getElementById('profile');
const headerBlock = document.getElementById('headerBlock');
const profIcon = document.getElementById('profIcon');
const mobileNavPanel = document.getElementById('mobileNavPanel');
const btnMobHome = document.getElementById('btnMobHome');
const btnMobFav = document.getElementById('btnMobFav');
const btnMobData = document.getElementById('btnMobData');
const btnMobStat = document.getElementById('btnMobStat');
const btnMobProf = document.getElementById('btnMobProf');
const lblErrorOutput = document.getElementById('lblErrorOutput');
const createTournament = document.getElementById('createTournament');
const footerPanel = document.getElementById('footerPanel');
const tournamentsPanel = document.getElementById('tournamentsPanel');
const blackout = document.getElementById('blackout');
const tournamentInfo = document.getElementById('tournamentInfo');
const crossIcon = document.getElementById('crossIcon');
const tournamentNameInfo = document.getElementById('tournamentNameInfo');
const tournamentJoinInfo = document.getElementById('tournamentJoinInfo');
const tournamentsTargetInfo = document.getElementById('tournamentsTargetInfo');
const tournamentMembersInfo = document.getElementById('tournamentMembersInfo');
const tournamentBtnsInfo = document.getElementById('tournamentBtnsInfo');
const tournamentMembersLabelInfo = document.getElementById('tournamentMembersLabelInfo');
const tournamentAdminLabelInfo = document.getElementById('tournamentAdminLabelInfo');
const tournamentReqInfo = document.getElementById('tournamentReqInfo');
const tournamentAdminInfo = document.getElementById('tournamentAdminInfo');
const tournamentReqLabelInfo = document.getElementById('tournamentReqLabelInfo');
const tournamentCupInfo = document.getElementById('tournamentCupInfo');
const tournamentLikeBtn = Array.from(document.getElementsByClassName('tournamentLikeBtn'));
const lockbg = document.getElementById('lockbg');
let tournamentNameBlock = document.getElementById('tournamentNameBlock');
let tournamentDescriptionBlock = document.getElementById('tournamentDescriptionBlock');
let tournamentTypeBlock = document.getElementById('tournamentTypeBlock');
let tournamentMaxMembersBlock = document.getElementById('tournamentMaxMembersBlock');
let tournamentName = Array.from(document.getElementsByClassName('tournamentName'));
let tournamentDescription = Array.from(document.getElementsByClassName('tournamentDescriptionBlock'));
let tournamentType = Array.from(document.getElementsByClassName('tournamentTypeBlock'));
let tournamentMaxMembers = Array.from(document.getElementsByClassName('tournamentMaxMembers'));
let tournament = Array.from(document.getElementsByClassName('tournament'));
let tournamentGoalsLabelInfo = document.getElementById('tournamentGoalsLabelInfo');
const NavPanelBtns = [btnHome, btnFavorites, btnData, btnStatistics, btnAbout, profile];
const mobileNavPanelBtns = [btnMobHome, btnMobFav, btnMobData, btnMobStat, btnMobProf];
let password, email, width, height, temporaryElementsTI;
inptUsername.addEventListener('click', onClearError);
inptPassword.addEventListener('click', onClearError);
btnHome.addEventListener('click', onbtnHome);
btnFavorites.addEventListener('click', onbtnFavorites);
btnData.addEventListener('click', onbtnData);
btnStatistics.addEventListener('click', onbtnStatistics);
btnAbout.addEventListener('click', onbtnAbout);
profile.addEventListener('click', onProfile);
btnMobHome.addEventListener('click', onbtnHome);
btnMobFav.addEventListener('click', onbtnFavorites);
btnMobData.addEventListener('click', onbtnData);
btnMobStat.addEventListener('click', onbtnStatistics);
btnMobProf.addEventListener('click', onProfile);
createTournament.addEventListener('click', onCreateTournament);
crossIcon.addEventListener('click', onCrossTournamentInfo);


width = window.innerWidth;
height = window.innerHeight;
function onresize() {
  setTimeout(function () {
    if ((width != window.innerWidth) || (height !== window.innerHeight)) {
      width = window.innerWidth;
      height = window.innerHeight;
      checkAspectRatio();
      console.log('resized');
    }
  }, 300);
}

window.addEventListener("resize", onresize);

//  --- --- --- --- --- ---  Авторизация --- --- --- --- --- --- --- ---

function onNoaccLink(event) {
  isignIn.innerHTML = 'Sign Up';
  btnSignIn.innerHTML = 'Sign Up';
  noaccLink.innerHTML = 'Sign In';
  noaccLink.removeEventListener('click', onNoaccLink);
  noaccLink.addEventListener('click', onHasaccLink);
  btnSignIn.removeEventListener('click', onBtnSignIn);
  btnSignIn.addEventListener('click', onBtnSignUp);
}
onHasaccLink();
function onHasaccLink(event) {
  isignIn.innerHTML = 'Login';
  btnSignIn.innerHTML = 'Login';
  noaccLink.innerHTML = 'Sign Up';
  noaccLink.removeEventListener('click', onHasaccLink);
  noaccLink.addEventListener('click', onNoaccLink);
  btnSignIn.removeEventListener('click', onBtnSignUp);
  btnSignIn.addEventListener('click', onBtnSignIn);
}

function clearMenuOfAuth() {
  dataEnterSqr.style.display = 'none';
  body.style["background-color"] = "white";
  // body.style.background = "none"
}

function showMainPage() {
  mainBlock.style.width = '100%';
  mainBlock.style.height = '100%';
  mainBlock.style.opacity = "1";
  mainBlock.style["pointer-events"] = "visible";
  getFirebaseData();
}
function getNickName() {
  let login = email;
  login = email[0].toUpperCase() + email.slice(1, email.indexOf('@')).toLowerCase();
  if (login.length > 10) { login = login.slice(0, login.length); }
  nickForLabel.innerHTML = login;
}
function onSignIn() {
  // console.log(email, password)
  getNickName();
  password = null;
  clearMenuOfAuth();
  showMainPage();
}
let msg = '';
function outputFormError(msg) {
  console.log(msg);
  msg = msg.slice(10, msg.length);
  msg = msg.slice(0, msg.indexOf('.'));
  lblErrorOutput.innerHTML = msg;
  authMenu.forEach(element => element.style.border = '1px solid red');
}
function onClearError() {
  lblErrorOutput.innerText = '';
  authMenu.forEach(element => element.style.border = 'none');
}

//--- --- --- --- --- ---  Главная --- --- --- --- --- --- --- ---
let firebaseTornemnts = [];
function getFirebaseData() {
  blackout.style.display = 'block';
  db.collection("global_tournaments").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      firebaseTornemnts.push(doc.data());
      console.log(firebaseTornemnts);
    });
  }).then(() => onbtnHome());
}
function onbtnHome(event) {
  blackout.style.display = 'none';
  let contentBlockHeight = contentBlock.offsetHeight;
  let heightTrn = 150;
  let yNums = Math.floor(contentBlockHeight / heightTrn);
  let k = 0;
  clearMenu();
  btnHome.removeEventListener('click', onbtnHome);
  btnHome.style["border-bottom"] = '2px solid black';
  btnHome.style.color = 'black';
  btnMobHome.parentElement.style["background-color"] = 'rgba(158, 132, 94, 0.4)';
  contentBlock.insertAdjacentHTML('beforeend', '<div id="footerPanel"><button id="createTournament" style="display: none;">Create</button></div><div id="tournamentsPanel"></div>');
  const tournamentsPanel = document.getElementById('tournamentsPanel');
  const createTournament = document.getElementById('createTournament');
  createTournament.addEventListener('click', onCreateTournament);
  k = firebaseTornemnts.length;
  console.log(k);
  if (k < yNums) {
    for (let i = 0; i < k; i++) {
      tournamentsPanel.insertAdjacentHTML('beforeend', `<div class="tournament" >               
            <div id="tournamentNameBlock"><label class="tournamentName" for="tournamentName">${firebaseTornemnts[i].name}</label></div>
            <div id="tournamentDescriptionBlock"><label class="tournamentDescription" for="tournamentDescription">${firebaseTornemnts[i].description}</label></div>
            <div id="tournamentTypeBlock"><label class="tournamentType" for="tournamentType">type: ${firebaseTornemnts[i].type}</label></div>
            <div id="tournamentMaxMembersBlock"><label class="tournamentMaxMembers" for="tournamentMaxMembers">${firebaseTornemnts[i].curr_members} / ${firebaseTornemnts[i].max_members}</label></div>
            <div class="heart-like-button tournamentLikeBtn"></div></div>`);
    }
  } else { console.log((k - yNums) / yNums); }
  tournament = Array.from(document.getElementsByClassName('tournament'));
  tournamentNameBlock = document.getElementById('tournamentNameBlock');
  tournamentDescriptionBlock = document.getElementById('tournamentDescriptionBlock');
  tournamentTypeBlock = document.getElementById('tournamentTypeBlock');
  tournamentMaxMembersBlock = document.getElementById('tournamentMaxMembersBlock');
  tournamentName = Array.from(document.getElementsByClassName('tournamentName'));
  tournamentDescription = Array.from(document.getElementsByClassName('tournamentDescriptionBlock'));
  tournamentType = Array.from(document.getElementsByClassName('tournamentTypeBlock'));
  tournamentMaxMembers = Array.from(document.getElementsByClassName('tournamentMaxMembers'));
  tournament.forEach(element => element.addEventListener('click', onTournament));
  checkAspectRatio();
}
function onTournament(event) {
  mainBlock.style.display = 'none';
  tournamentInfo.style.display = 'block';
  root.style.setProperty('--like-btn-size-scale', '0.33');
  let num;
  tournamentNameInfo.innerText = this.firstElementChild.innerText;
  for (let i = 0; i < firebaseTornemnts.length; i++) {
    if (firebaseTornemnts[i].name == this.firstElementChild.innerText) {
      num = i; break;
    }
  }
  if (firebaseTornemnts[num].type == "closed") {
    tournamentGoalsLabelInfo.style.display = 'none';
    tournamentAdminLabelInfo.style.display = 'none';
    tournamentMembersLabelInfo.style.display = 'none';
    tournamentReqLabelInfo.style.display = 'none';
    tournamentBtnsInfo.style.display = 'none';
    lockbg.style.display = 'block';
    checkAspectRatio();
    return tournamentCupInfo.style.display = 'none';
  } else {
    tournamentCupInfo.style.display = 'block';
    lockbg.style.display = 'none';
    tournamentGoalsLabelInfo.style.display = 'block';
    tournamentAdminLabelInfo.style.display = 'block';
    tournamentMembersLabelInfo.style.display = 'block';
    tournamentReqLabelInfo.style.display = 'block';
    tournamentBtnsInfo.style.display = 'block';
  }
  if (firebaseTornemnts[num].targets[0] !== "") {
    for (let i = 0; i < firebaseTornemnts[num].targets.length; i++) {
      tournamentsTargetInfo.insertAdjacentHTML('beforeend', `<li class="temporaryElementsTI tournamentGoalsInfo">${firebaseTornemnts[num].targets[i]}</li>`);
    }
  } else { tournamentsTargetInfo.insertAdjacentHTML('beforeend', `<li style="list-style-type:none;" class="temporaryElementsTI tournamentGoalsInfo">no goals :(</li>`); }
  tournamentAdminLabelInfo.insertAdjacentHTML('afterend',
    `<li class="temporaryElementsTI" id="id="tournamentAdminInfo"><img src="img/icons8-test-account-48.png" alt="userIcon" class="userIconTI"> ${firebaseTornemnts[num].administrator}</li>`);
  let membersNums;
  firebaseTornemnts[num].participants.length > 5 ? membersNums = 5 : membersNums = firebaseTornemnts[num].participants.length;
  if (firebaseTornemnts[num].participants[0] !== "") {
    for (let i = 0; i < membersNums; i++) {
      tournamentMembersLabelInfo.insertAdjacentHTML('afterend', `<li class="temporaryElementsTI tournamentParticipantsInfo">
      <img src="img/icons8-test-account-48.png" alt="userIcon" class="userIconTI"
       style="margin-left: 20px; margin-top: 5px;"> ${firebaseTornemnts[num].participants[i]}<br>`);
    }
  } else { tournamentMembersLabelInfo.insertAdjacentHTML('afterend', `<li style="list-style-type:none;" class="temporaryElementsTI tournamentGoalsInfo">no participants :(</li>`); }
  if (firebaseTornemnts[num].requirements[0] !== "") {
    for (let i = 0; i < firebaseTornemnts[num].requirements.length; i++) {
      tournamentReqLabelInfo.insertAdjacentHTML('afterend', `<li class="temporaryElementsTI tournamentReqsInfo">${firebaseTornemnts[num].requirements[i]}</li>`);
    }
  } else { tournamentReqLabelInfo.insertAdjacentHTML('afterend', `<li style="list-style-type:none;" class="temporaryElementsTI tournamentGoalsInfo">no requirements :(</li>`); }
  temporaryElementsTI = Array.from(document.getElementsByClassName('temporaryElementsTI'));
  checkAspectRatio();
}
function onCrossTournamentInfo(event) {
  mainBlock.style.display = 'block';
  tournamentInfo.style.display = 'none';
  temporaryElementsTI.forEach(element => element.remove());
  if (button.classList.contains("liked")) {
    button.classList.remove("liked");
  }
  checkAspectRatio();
}
function newPageHome() {
  // k more tournaments we need to render
  // console.log(Math.ceil(k / yNums) + ' more new page created')
}
function onbtnFavorites(event) {
  clearMenu();
  btnFavorites.removeEventListener('click', onbtnFavorites);
  btnFavorites.style["border-bottom"] = '2px solid black';
  btnFavorites.style.color = 'black';
  btnMobFav.parentElement.style["background-color"] = 'rgba(158, 132, 94, 0.4)';

}
function onbtnData(event) {
  clearMenu();
  btnData.removeEventListener('click', onbtnData);
  btnData.style["border-bottom"] = '2px solid black';
  btnData.style.color = 'black';
  btnMobData.parentElement.style["background-color"] = 'rgba(158, 132, 94, 0.4)';


}
function onbtnStatistics(event) {
  clearMenu();
  btnStatistics.removeEventListener('click', onbtnStatistics);
  btnStatistics.style["border-bottom"] = '2px solid black';
  btnStatistics.style.color = 'black';
  btnMobStat.parentElement.style["background-color"] = 'rgba(158, 132, 94, 0.4)';

}
function onbtnAbout(event) {
  clearMenu();
  btnAbout.removeEventListener('click', onbtnAbout);
  btnAbout.style["border-bottom"] = '2px solid black';
  btnAbout.style.color = 'black';

}

function onProfile(event) {
  clearMenu();
  profile.removeEventListener('click', onProfile);
  profile.style.color = 'black';
  profile.style["background-color"] = 'rgba(170, 170, 170, 0.2)';
  btnMobProf.parentElement.style["background-color"] = 'rgba(158, 132, 94, 0.4)';

}

function clearMenu() {
  NavPanelBtns.forEach(element => element.style["border-bottom"] = '0px solid black');
  NavPanelBtns.forEach(element => element.style.color = 'white');
  profile.style["background-color"] = 'transparent';
  mobileNavPanelBtns.forEach(element => element.parentElement.style["background-color"] = 'transparent');
  createTournament.removeEventListener('click', onCreateTournament);
  btnHome.addEventListener('click', onbtnHome);
  btnFavorites.addEventListener('click', onbtnFavorites);
  btnData.addEventListener('click', onbtnData);
  btnStatistics.addEventListener('click', onbtnStatistics);
  btnAbout.addEventListener('click', onbtnAbout);
  profile.addEventListener('click', onProfile);

  while (contentBlock.firstChild) {
    contentBlock.removeChild(contentBlock.firstChild);
  }

}
checkAspectRatio();
function checkAspectRatio() {
  if (width > 1100) {
    navigationPanel.style.display = 'block';
    profile.style.display = 'block';
    mobileNavPanel.style.display = 'none';
    headerBlock.style["margin-top"] = '0px';
    root.style.setProperty('--headerHeight', '150px');
    root.style.setProperty('--profile-width', '12%');
    root.style.setProperty('--like-btn-size-scale', '0.4');
    profile.style.setProperty('--height-Profile', '70px');
    NavPanelBtns.forEach(element => element.style.font = '32px "Fira Sans", sans-serif');
    NavPanelBtns.forEach(element => element.style["text-shadow"] = '1px 0 black, 0 1px black, -1px 0 black, 0 -1px black');
    navigationPanel.style["margin-left"] = 'calc(var(--labelUnity-width))';
    navigationPanel.style.width = 'calc(100% - var(--profile-width) - var(--labelUnity-width))';
    profile["font-size"] = '24px';
    profIcon.style["margin-top"] = '10px';
    profIcon.style.width = '48px';
    contentBlock.style.setProperty('--contentBlock-Top', 'calc(var(--headerHeight) + 2%)');
    contentBlock.style["margin-top"] = 'var(--contentBlock-Top)';
    contentBlock.style.height = 'calc(100% - var(--headerHeight) - 5%)';
    tournamentName.forEach(element => element.style["font-size"] = '28px');
    tournamentDescription.forEach(element => element.style["font-size"] = '18px');
    tournamentType.forEach(element => element.style["font-size"] = '16px');
    tournamentsTargetInfo.style.width = '30%';
    tournamentMembersInfo.style["margin-left"] = tournamentInfo.offsetWidth - 250;
    tournamentsTargetInfo.style["font-size"] = '24px';
    tournamentMembersInfo.style.font = 'small-caps bold 20px/1 sans-serif';
    tournamentAdminLabelInfo.style.font = 'small-caps bold 24px/1 sans-serif';
    tournamentMembersLabelInfo.style.font = 'small-caps bold 24px/1 sans-serif';
    tournamentAdminLabelInfo.innerText = 'ADMINISTRATOR';
    tournamentReqInfo.style.width = '30%';
    tournamentReqInfo.style["font-size"] = '20px';
    tournamentReqLabelInfo.style.font = 'bold 24px/1 Tahoma, Verdana, sans-serif';
    tournamentGoalsLabelInfo.style.font = 'bold 24px/1 Tahoma, Verdana, sans-serif';
    labelUnity.innerHTML = `
  <label class="tileLbl" id="tileLbl1" for="tileLbl"><b>Online</b></label>
  <label class="tileLbl" id="tileLbl2" for="tileLbl"><b>Competition</b></label>
  <label class="tileLbl" id="tileLbl3" for="tileLbl"><b>Table</b></label>
  <label class="tileLbl" id="tileLbl4" for="tileLbl">by Droxus corporation</label>`;
  } else if (width > 600) {
    root.style.setProperty('--headerHeight', '100px');
    root.style.setProperty('--profile-width', '15%');
    root.style.setProperty('--like-btn-size-scale', '0.33');
    profile.style.setProperty('--height-Profile', '40px');
    navigationPanel.style.display = 'block';
    profile.style.display = 'block';
    mobileNavPanel.style.display = 'none';
    contentBlock.style.setProperty('--contentBlock-Top', 'calc(var(--headerHeight) + 4%)');
    contentBlock.style["margin-top"] = 'var(--contentBlock-Top)';
    headerBlock.style["margin-top"] = '0px';
    contentBlock.style.height = 'calc(100% - var(--headerHeight) - 6%)';
    navigationPanel.style["margin-left"] = '0px';
    navigationPanel.style.width = width - width * 0.15;
    NavPanelBtns.forEach(element => element.style.font = '24px "Fira Sans", sans-serif');
    NavPanelBtns.forEach(element => element.style["text-shadow"] = '1px 0 black, 0 1px black, -1px 0 black, 0 -1px black');
    labelUnity.innerHTML = ' ';
    profIcon.style["margin-top"] = '0px';
    profIcon.style.width = '32px';
    profile["font-size"] = '18px';
    tournamentName.forEach(element => element.style["font-size"] = '28px');
    tournamentDescription.forEach(element => element.style["font-size"] = '18px');
    tournamentType.forEach(element => element.style["font-size"] = '16px');
    tournamentsTargetInfo.style.width = '30%';
    tournamentMembersInfo.style["margin-left"] = tournamentInfo.offsetWidth - 250;
    tournamentsTargetInfo.style["font-size"] = '20px';
    tournamentReqInfo.style["font-size"] = '20px';
    tournamentMembersInfo.style.font = 'small-caps bold 20px/1 sans-serif';
    tournamentAdminLabelInfo.style.font = 'small-caps bold 24px/1 sans-serif';
    tournamentMembersLabelInfo.style.font = 'small-caps bold 24px/1 sans-serif';
    tournamentAdminLabelInfo.innerText = 'ADMINISTRATOR';
    tournamentReqInfo.style.width = '50%';
  } else {
    root.style.setProperty('--headerHeight', '65px');
    root.style.setProperty('--like-btn-size-scale', '0.25');
    navigationPanel.style.display = 'none';
    profile.style.display = 'none';
    mobileNavPanel.style.display = 'inline-block';
    labelUnity.innerHTML = ' ';
    headerBlock.style["margin-top"] = height - 65;
    contentBlock.style["margin-top"] = '1%';
    contentBlock.style.height = height - 65 - height * 0.02;
    tournamentName.forEach(element => element.style["font-size"] = '24px');
    tournamentDescription.forEach(element => element.style["font-size"] = '14px');
    tournamentType.forEach(element => element.style["font-size"] = '12px');
    tournamentsTargetInfo.style.width = '42%';
    tournamentsTargetInfo.style["padding-left"] = '5px';
    tournamentMembersInfo.style["margin-left"] = '52%';
    tournamentMembersInfo.style.font = 'small-caps bold 17px/1 sans-serif';
    tournamentAdminLabelInfo.style.font = 'small-caps bold 20px/1 sans-serif';
    tournamentMembersLabelInfo.style.font = 'small-caps bold 20px/1 sans-serif';
    tournamentAdminLabelInfo.innerText = 'ADMIN';
    tournamentReqInfo.style.width = '42%';
    tournamentsTargetInfo.style["font-size"] = '16px';
    tournamentReqInfo.style["font-size"] = '16px';
    tournamentReqLabelInfo.style.font = 'bold 20px/1 Tahoma, Verdana, sans-serif';
    tournamentGoalsLabelInfo.style.font = 'bold 20px/1 Tahoma, Verdana, sans-serif';
  }
  dataEnterSqr.style["margin-top"] = (height - 650) / 2;
  root.style.setProperty('--footerPanel-MarginTop', `${contentBlock.offsetHeight - 52}`);
  root.style.setProperty('--tournamentsPanel-MarginTop', `${-1 * contentBlock.offsetHeight}`);
  tournamentBtnsInfo.style["margin-top"] = height * 0.7;
  tournamentBtnsInfo.style["margin-left"] = width * 0.8 - 280;
  tournamentLikeBtn.forEach(element => element.style["margin-left"] = contentBlock.offsetWidth - 80);
  tournamentMembersInfo.style["margin-top"] = -1 * tournamentsTargetInfo.offsetHeight;
  tournamentReqInfo.style["margin-top"] = tournamentsTargetInfo.offsetHeight - tournamentMembersInfo.offsetHeight;
  tournamentCupInfo.style["margin-top"] = tournamentInfo.offsetHeight / -2;
  tournamentCupInfo.style["margin-left"] = (tournamentInfo.offsetWidth - 600) / 2;
  lockbg.style["margin-left"] = (tournamentInfo.offsetWidth - 900) / 2;
  lockbg.style["margin-top"] = tournamentInfo.offsetHeight / -2;
}
function onCreateTournament(event) {
  console.log('aaa');
}



//--- --- --- --- --- ---  firebase --- --- --- --- --- --- --- ---



function onBtnSignUp(event) {
  noaccLink.removeEventListener('click', onHasaccLink);
  btnSignIn.removeEventListener('click', onBtnSignUp);
  email = inptUsername.value;
  password = inptPassword.value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      onSignIn();
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      outputFormError(errorMessage);
      noaccLink.addEventListener('click', onHasaccLink);
      btnSignIn.addEventListener('click', onBtnSignUp);
    });


}
function onBtnSignIn(event) {
  noaccLink.removeEventListener('click', onNoaccLink);
  btnSignIn.removeEventListener('click', onBtnSignIn);
  email = inptUsername.value;
  password = inptPassword.value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      onSignIn();
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      noaccLink.addEventListener('click', onNoaccLink);
      btnSignIn.addEventListener('click', onBtnSignIn);
      outputFormError(errorMessage);
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
const button = document.querySelector(".heart-like-button");

button.addEventListener("click", () => {
  if (button.classList.contains("liked")) {
    button.classList.remove("liked");
  } else {
    button.classList.add("liked");
  }
});