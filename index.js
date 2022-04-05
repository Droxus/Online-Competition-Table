
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
const dataEnterSqr = Array.from(document.getElementsByClassName('dataEnterSqr'));
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
const createTournament = Array.from(document.getElementsByClassName('createTournament'));
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
let crossIcononCreate = document.getElementById('crossIcononCreate');
const prewPageTurn = Array.from(document.getElementsByClassName('prewPageTurn'));
const nextPagTurn = Array.from(document.getElementsByClassName('nextPagTurn'));
const tournamentCreatePanel = document.getElementById('tournamentCreatePanel');
const trnsTOshow = document.getElementById('trnsTOshow')
let numsOfTrnsOnthePage = Array.from(document.getElementsByClassName('numsOfTrnsOnthePage'));
let numsOfTrnsOnthePageOpt = Array.from(document.getElementsByClassName('numsOfTrnsOnthePageOpt'));
let likeButton = Array.from(document.getElementsByClassName("heart-like-button"));
let tournamentsPanel = Array.from(document.getElementsByClassName('tournamentsPanel'));
let typeMaxBtns;
let secondMpage;
let firstMpage;
let pageNumLbl = Array.from(document.getElementsByClassName('pageNumLbl'));
let onTournamentInfoBlock;
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
let trnCrtPanel = Array.from(document.getElementsByClassName('trnCrtPanel'));
let tournamentTargetsInputAtCreatePanel, tournamentSwitchPageBtn;
let tournamentRequirementsLblAtCreatePanel;
let tournamentDescriptionTextAreaAtCreatePanel;
let creatingTournamentLbl;
let tournamentNameInputAtCreatePanel;
let tournamentMaxMembersInputAtCreatePanel;
let tournamentOpenedTypeInputAtCreatePanel;
let tournamentInvitedTypeInputAtCreatePanel;
let tournamentClosedTypeInputAtCreatePanel;
let tournamentTargetsBlockAtCreatePanel;
let tournamentRequirementsBlockAtCreatePanel;
let tournamentRequirementsInputAtCreatePanel;
let tournamentCreateBtn;
const NavPanelBtns = [btnHome, btnFavorites, btnData, btnStatistics, btnAbout, profile];
const mobileNavPanelBtns = [btnMobHome, btnMobFav, btnMobData, btnMobStat, btnMobProf];
let password, email, width, height, temporaryElementsTI, isMobileVersion, docName;
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
createTournament.forEach(element => element.addEventListener('click', onCreateTournament));
likeButton.forEach(element => element.addEventListener("click", onLikebtn));
prewPageTurn.forEach(element => element.addEventListener('click', onPrewPageTurn));
nextPagTurn.forEach(element => element.addEventListener('click', onNextPagTurn));
crossIcon.addEventListener('click', onCrossTournamentInfo);
numsOfTrnsOnthePage.forEach(element => element.addEventListener("change", onchangeTrnNumsOnPage));
document.getElementById('btnLogout').addEventListener('click', onBtnSignOut);
document.getElementById('gooleSignIn').addEventListener('click', onGoogleAuth);
document.getElementById('tournamentJoinInfo').addEventListener('click', onJTbtn);
document.getElementById('btnLeaveTrn').addEventListener('click', onLeaveTrn)
trnsTOshow.addEventListener('click', () => {
  if (trnsTOshow.innerText == 'joined'){
    trnsTOshow.innerText = 'liked'
    showTournaments(from)
  } else {
    trnsTOshow.innerText = 'joined'
    showTournaments(from)
  } 
})

// let counterDegGradBg = 0;
// setInterval(() =>{
//   counterDegGradBg++
//   root.style.setProperty('--gradient-deg-bg', `${counterDegGradBg}deg`)
// }, 40)

width = window.innerWidth;
height = window.innerHeight;

blackout.style.display = 'block';
dataEnterSqr.forEach(element => element.style.display = 'none');

getMobileOperatingSystem();
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/windows phone/i.test(userAgent)) {
    // return console.log("Windows Phone");
  }

  if (/android/i.test(userAgent)) {
    // return console.log("Android");
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    // return console.log("iOS");
  }

  // return console.log("unknown");
}

//  --- --- --- --- --- ---  Авторизация --- --- --- --- --- --- --- ---

function onNoaccLink(event) {
  isignIn.innerHTML = 'Sign Up';
  btnSignIn.innerHTML = 'Sign Up';
  noaccLink.innerHTML = 'Login';
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
  dataEnterSqr.forEach(element => element.style.display = 'none');
  // body.style.background = "none"
}

function showMainPage() {
  mainBlock.style.display = 'grid';
  getFirebaseData();
}
let login;
function getNickName() {
  if (User.displayName == null) {
    login = email;
    login = email[0].toUpperCase() + email.slice(1, email.indexOf('@')).toLowerCase();
    if (login.length > 10) { login = login.slice(0, login.length); }
    nickForLabel.innerHTML = login;
    User.updateProfile({
      displayName: login
    }).then(() => console.log(User.displayName));
  } else { login = User.displayName; nickForLabel.innerHTML = login; }
}
function onSignIn() {
  console.log(User);
  blackout.style.display = 'none';
  document.getElementById('eMail').innerText = email;
  getNickName();
  password = null;
  Promise.all([  getFirebaseLikedTrn(),   getFirebaseUserJT()]).then(() => {
  clearMenuOfAuth();
  showMainPage();
  })
}
function onSignOut() {
  blackout.style.display = 'none';
  dataEnterSqr.forEach(element => element.style.display = 'grid');
  mainBlock.style.display = 'none';
  onHasaccLink();
}
let msg = '';
function outputFormError(msg) {
  // console.log(msg);
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
let firebaseTournaments = [];
let firebaseUser = [];
let firebaseLikedTrn = []
let from = 0;
function getFirebaseLikedTrn(){
  firebaseLikedTrn = []
  db.collection("users_info").doc(uid).collection("liked_tournaments").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      firebaseLikedTrn.push(doc.data());
      console.log(firebaseLikedTrn);
    });
  });
}
function getFirebaseUserJT() {
  firebaseUser = [];
  db.collection("users_info").doc(uid).collection("active_tournaments").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      firebaseUser.push(doc.data());
      console.log(firebaseUser);
    });
  });
}
function getFirebaseData() {
  firebaseTournaments = [];
  blackout.style.display = 'block';
  db.collection("global_tournaments").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      firebaseTournaments.push(doc.data());
    });
  }).then(() => onbtnHome());
}
let tournamentsOnThePage = 5;
function onbtnHome(event) {
  from = 0;
  blackout.style.display = 'none';
  root.style.setProperty('--tournamnets-on-the-page', `${tournamentsOnThePage}`);
  root.style.setProperty('--like-btn-size-scale', '0.25');
  clearMenu();
  btnHome.removeEventListener('click', onbtnHome);
  btnHome.classList.add("moveDown");
  btnHome.style.color = 'black';
  btnMobHome.parentElement.style["background-color"] = 'rgba(158, 132, 94, 0.4)';
  document.getElementById('homePageBlock').style.display = 'grid';
  panelNum = 0
  from = 0
  showTournaments(from);
}
let to = 0;
let panelNum = 0
let trnsToShow
function showTournaments(from) {
  if (panelNum == 0){
    trnsToShow = firebaseTournaments
  } else if (trnsTOshow.innerText == 'joined'){
    trnsToShow = firebaseUser
  } else {trnsToShow = firebaseLikedTrn}
  pageNumLbl[panelNum].innerHTML = Math.floor(to / tournamentsOnThePage);
  if (from < 0) return from = 0;
  to = from + tournamentsOnThePage;
  if (to > trnsToShow.length) { to = trnsToShow.length; }
  console.log(from, to);
  while (tournamentsPanel[panelNum].firstChild) {
    tournamentsPanel[panelNum].removeChild(tournamentsPanel[panelNum].firstChild);
  }
  for (let i = from; i < to; i++) {
    tournamentsPanel[panelNum].insertAdjacentHTML('beforeend', `<div class="tournament" ><div class="onTournamentInfoBlock">               
          <div id="tournamentNameBlock"><label class="tournamentName" for="tournamentName">${trnsToShow[i].name}</label></div>
          <div id="tournamentDescriptionBlock"><label class="tournamentDescription" for="tournamentDescription">${trnsToShow[i].description}</label></div>
          <div id="tournamentTypeBlock"><label class="tournamentType" for="tournamentType">type: ${trnsToShow[i].type}</label></div>
          <div id="tournamentMaxMembersBlock"><label class="tournamentMaxMembers" for="tournamentMaxMembers">${trnsToShow[i].curr_members} / ${trnsToShow[i].max_members}</label></div>
          </div></div>`);
          if (firebaseLikedTrn.findIndex((element) => element.name == trnsToShow[i].name) !== -1){
            tournamentsPanel[panelNum].lastChild.insertAdjacentHTML('beforeend', `<div class="heart-like-button tournamentLikeBtn liked"></div>`)
          } else {tournamentsPanel[panelNum].lastChild.insertAdjacentHTML('beforeend', `<div class="heart-like-button tournamentLikeBtn"></div>`)}
  }
  tournament = Array.from(document.getElementsByClassName('tournament'));
  tournamentNameBlock = document.getElementById('tournamentNameBlock');
  tournamentDescriptionBlock = document.getElementById('tournamentDescriptionBlock');
  tournamentTypeBlock = document.getElementById('tournamentTypeBlock');
  tournamentMaxMembersBlock = document.getElementById('tournamentMaxMembersBlock');
  tournamentName = Array.from(document.getElementsByClassName('tournamentName'));
  tournamentDescription = Array.from(document.getElementsByClassName('tournamentDescriptionBlock'));
  tournamentType = Array.from(document.getElementsByClassName('tournamentTypeBlock'));
  tournamentMaxMembers = Array.from(document.getElementsByClassName('tournamentMaxMembers'));
  onTournamentInfoBlock = Array.from(document.getElementsByClassName('onTournamentInfoBlock'));
  onTournamentInfoBlock.forEach(element => element.addEventListener('click', onTournament));
  likeButton = Array.from(document.getElementsByClassName("heart-like-button"));
  likeButton.forEach(element => element.addEventListener("click", onLikebtn));
  pageNumLbl.forEach(element => element.innerHTML = Math.ceil(to / tournamentsOnThePage));
}
let num;
function onTournament(event) {
  for (let i = 0; i < firebaseTournaments.length; i++) {
    if (firebaseTournaments[i].name == this.firstElementChild.innerText) {
      num = i; break;
    }
  }
  docName = this.firstElementChild.innerText
  // for (let i = 0; i < firebaseTournaments[num].usersInfo.length; i++){
  //   if (firebaseTournaments[num].usersInfo[i] == uid){
  //     return onTournamentJoin()
  //   }
  // } 
  // return onTournamentInfo()
  for (let i = 0; i < firebaseUser.length; i++) {
    if (firebaseUser[i].name == firebaseTournaments[num].name) {
      return onTournamentJoin();
    }
  }
  return onTournamentInfo();
}
function onTournamentInfo() {
  mainBlock.style.display = 'none';
  tournamentInfo.style.display = 'grid';
  root.style.setProperty('--like-btn-size-scale', '0.33');
  body.addEventListener('keydown', function (event) {
    if (event.code == 'Escape') { onCrossTournamentInfo(); }
  });
  tournamentNameInfo.innerText = firebaseTournaments[num].name;
  if (firebaseTournaments[num].type == "closed") {
    tournamentGoalsLabelInfo.style.display = 'none';
    tournamentAdminLabelInfo.style.display = 'none';
    tournamentMembersLabelInfo.style.display = 'none';
    tournamentReqLabelInfo.style.display = 'none';
    tournamentBtnsInfo.style.display = 'none';
    lockbg.style.display = 'block';
    return tournamentCupInfo.style.display = 'none';
  } else {
    tournamentCupInfo.style.display = 'block';
    lockbg.style.display = 'none';
    tournamentGoalsLabelInfo.style.display = 'block';
    tournamentAdminLabelInfo.style.display = 'block';
    tournamentMembersLabelInfo.style.display = 'block';
    tournamentReqLabelInfo.style.display = 'block';
    tournamentBtnsInfo.style.display = 'inline-flex';
  }
  tournamentAdminLabelInfo.innerText = isMobileVersion ? 'ADMIN' : 'ADMINISTRATOR';
  if (firebaseTournaments[num].targets[0] !== "" && firebaseTournaments[num].targets.length !== 0) {
    for (let i = 0; i < firebaseTournaments[num].targets.length; i++) {
      tournamentsTargetInfo.insertAdjacentHTML('beforeend', `<li class="temporaryElementsTI tournamentGoalsInfo">${firebaseTournaments[num].targets[i]}</li>`);
    }
  } else { tournamentsTargetInfo.insertAdjacentHTML('beforeend', `<li style="list-style-type:none;" class="temporaryElementsTI tournamentGoalsInfo">no goals :(</li>`); }
  tournamentAdminLabelInfo.insertAdjacentHTML('afterend',
    `<li class="temporaryElementsTI" id="id="tournamentAdminInfo"><img src="img/icons8-test-account-48.png" alt="userIcon" class="userIconTI"> ${firebaseTournaments[num].administrator}</li>`);
  let membersNums;
  firebaseTournaments[num].participants.length > 5 ? membersNums = 5 : membersNums = firebaseTournaments[num].participants.length;
  if (firebaseTournaments[num].participants[0] !== "" && firebaseTournaments[num].participants.length !== 0) {
    for (let i = 0; i < membersNums; i++) {
      tournamentMembersLabelInfo.insertAdjacentHTML('afterend', `<li class="temporaryElementsTI tournamentParticipantsInfo">
      <img src="img/icons8-test-account-48.png" alt="userIcon" class="userIconTI"> ${firebaseTournaments[num].participants[i]}<br>`);
    }
  } else { tournamentMembersLabelInfo.insertAdjacentHTML('afterend', `<li style="list-style-type:none;" class="temporaryElementsTI tournamentGoalsInfo">no participants :(</li>`); }
  if (firebaseTournaments[num].requirements[0] !== "" && firebaseTournaments[num].requirements.length !== 0) {
    for (let i = 0; i < firebaseTournaments[num].requirements.length; i++) {
      tournamentReqLabelInfo.insertAdjacentHTML('afterend', `<li class="temporaryElementsTI tournamentReqsInfo">${firebaseTournaments[num].requirements[i]}</li>`);
    }
  } else { tournamentReqLabelInfo.insertAdjacentHTML('afterend', `<li style="list-style-type:none;" class="temporaryElementsTI tournamentGoalsInfo">no requirements :(</li>`); }
  temporaryElementsTI = Array.from(document.getElementsByClassName('temporaryElementsTI'));
  
  if (firebaseLikedTrn.findIndex((element) => element.name == tournamentNameInfo.innerText) !== -1){
    document.getElementById('tournamentLikeBtnInfo').classList.add('liked')}
}
function onCrossTournamentInfo(event) {
  body.removeEventListener('keydown', function (event) {
    if (event.code == 'Escape') { onCrossTournamentInfo(); }
  });
  mainBlock.style.display = 'grid';
  tournamentInfo.style.display = 'none';
  temporaryElementsTI.forEach(element => element.remove());
  likeButton.forEach(element => element.classList.remove("liked"));
  onbtnHome();
}
let canMakeNewTarg = true;
function ontournamentTargetsInputAtCreatePanel(event) {
  if (canMakeNewTarg) {
    tournamentTargetsInputAtCreatePanel[tournamentTargetsInputAtCreatePanel.length - 1].removeEventListener('input', ontournamentTargetsInputAtCreatePanel);
    tournamentTargetsInputAtCreatePanel[tournamentTargetsInputAtCreatePanel.length - 1].insertAdjacentHTML('afterend', ' <input type="text" class="trnCrtPanel tournamentTargetsInputAtCreatePanel"><br>');
    tournamentTargetsInputAtCreatePanel = Array.from(document.getElementsByClassName('tournamentTargetsInputAtCreatePanel'));
    trnCrtPanel = Array.from(document.getElementsByClassName('trnCrtPanel'));
    tournamentTargetsInputAtCreatePanel[tournamentTargetsInputAtCreatePanel.length - 1].addEventListener('input', ontournamentTargetsInputAtCreatePanel);
  }
  canMakeNewTarg = (tournamentTargetsInputAtCreatePanel.length == 1) || (tournamentTargetsInputAtCreatePanel.length < 5) && (tournamentTargetsInputAtCreatePanel[tournamentTargetsInputAtCreatePanel.length - 2].value !== "");
}
let canMakeNewReq = true;
function ontournamentRequirementsInputAtCreatePanel(event) {
  if (canMakeNewReq) {
    tournamentRequirementsInputAtCreatePanel[tournamentRequirementsInputAtCreatePanel.length - 1].removeEventListener('input', ontournamentRequirementsInputAtCreatePanel);
    tournamentRequirementsInputAtCreatePanel[tournamentRequirementsInputAtCreatePanel.length - 1].insertAdjacentHTML('afterend', ' <input type="text" class ="trnCrtPanel tournamentRequirementsInputAtCreatePanel"><br>');
    tournamentRequirementsInputAtCreatePanel = Array.from(document.getElementsByClassName('tournamentRequirementsInputAtCreatePanel'));
    trnCrtPanel = Array.from(document.getElementsByClassName('trnCrtPanel'));
    tournamentRequirementsInputAtCreatePanel[tournamentRequirementsInputAtCreatePanel.length - 1].addEventListener('input', ontournamentRequirementsInputAtCreatePanel);
  }
  canMakeNewReq = (tournamentRequirementsInputAtCreatePanel.length == 1) || (tournamentRequirementsInputAtCreatePanel.length < 5) &&
    (tournamentRequirementsInputAtCreatePanel[tournamentRequirementsInputAtCreatePanel.length - 2].value !== "");
}
let trnTargets = [];
let trnRequirements = [];
function onTournamentCreateBtn() {
  if ((tournamentNameInputAtCreatePanel.value == "")) {
    outputMessege('Enter Tournament Name');
  } else if (tournamentMaxMembersInputAtCreatePanel.value == "") {
    outputMessege('Enter Tournament Max Participants');
  } else if ((tournamentOpenedTypeInputAtCreatePanel.checked == false) &&
    (tournamentInvitedTypeInputAtCreatePanel.checked == false) &&
    (tournamentClosedTypeInputAtCreatePanel.checked == false)) {
    outputMessege('Enter Tournament Type');
  } else {
    tournamentTargetsInputAtCreatePanel.forEach(element => trnTargets.push(element.value));
    trnTargets.pop();
    tournamentRequirementsInputAtCreatePanel.forEach(element => trnRequirements.push(element.value));
    trnRequirements.pop();
    let trnType;
    if (tournamentClosedTypeInputAtCreatePanel.checked) {
      trnType = "closed";
    } else if (tournamentInvitedTypeInputAtCreatePanel.checked) {
      trnType = "invited";
    } else { trnType = "opened"; }
    db.collection("global_tournaments").doc(`${tournamentNameInputAtCreatePanel.value}`).get().then((doc) => {
      if (doc.exists) {
        outputMessege('Tournament with this name exists');
      } else {
        docName = tournamentNameInputAtCreatePanel.value
        let createdTrn = {
          name: tournamentNameInputAtCreatePanel.value,
          targets: trnTargets,
          requirements: trnRequirements,
          description: tournamentDescriptionTextAreaAtCreatePanel.value,
          max_members: tournamentMaxMembersInputAtCreatePanel.value,
          type: trnType,
          curr_members: 1,
          administrator: login,
          participants: "",
          usersInfo: [uid]
        }
        firebaseUser.push(createdTrn)
        db.collection("global_tournaments").doc(`${tournamentNameInputAtCreatePanel.value}`).set(createdTrn).then(() => {
          db.collection("users_info").doc(uid).collection("active_tournaments").doc(`${docName}`).set(createdTrn).then(() => {
            db.collection("global_tournaments").doc(`${docName}`).update({
              usersInfo: firebase.firestore.FieldValue.arrayUnion(uid),
              participants: firebase.firestore.FieldValue.arrayUnion(login)
            });
          })
        }).then((docRef) => {
            getFirebaseData();
            oncrossIcononCreate();
          });
      }
    });
    
  }
}
function onJTbtn(event) {
    db.collection("users_info").doc(uid).collection("active_tournaments").doc(`${docName}`).set(firebaseTournaments[num]).then(() => {
    db.collection("global_tournaments").doc(`${docName}`).update({
      usersInfo: firebase.firestore.FieldValue.arrayUnion(uid),
      participants: firebase.firestore.FieldValue.arrayUnion(login)
    });
  }).then(() => { onTournamentJoin(); getFirebaseUserJT(); getFirebaseData(); });
}
function onTournamentJoin(event) {
  body.removeEventListener('keydown', function (event) {
    if (event.code == 'Escape') { onCrossTournamentInfo(); }
  });
  body.addEventListener('keydown', function (event) {
    if (event.code == 'Escape') { onCrossIconJT(); }
  });
  tournamentInfo.style.display = 'none';
  if (temporaryElementsTI) {
    temporaryElementsTI.forEach(element => element.remove());
  }
  mainBlock.style.display = 'none';
  document.getElementById('joinedTournament').style.display = 'grid';
  document.getElementById('crossIconJT').addEventListener('click', onCrossIconJT);
  document.getElementById('nameJT').innerText = docName
}
function onCrossIconJT(event) {
  document.getElementById('joinedTournament').style.display = 'none';
  body.removeEventListener('keydown', function (event) {
    if (event.code == 'Escape') { onCrossIconJT(); }
  });
  mainBlock.style.display = 'grid';
  panelNum == 0 ? onbtnHome() : onbtnFavorites()
}
function onLeaveTrn(event){
  db.collection("users_info").doc(uid).collection("active_tournaments").doc(`${docName}`).delete().then(() => {
    db.collection("global_tournaments").doc(`${docName}`).update({
      usersInfo: firebase.firestore.FieldValue.arrayRemove(uid),
      participants: firebase.firestore.FieldValue.arrayRemove(login)
    });
  }).then(() => { onCrossIconJT(); getFirebaseUserJT(); getFirebaseData(); });
}
function onbtnFavorites(event) {
  clearMenu();
  btnFavorites.classList.add("moveDown");
  btnFavorites.removeEventListener('click', onbtnFavorites);
  btnFavorites.style.color = 'black';
  document.getElementById('favoritesPageBlock').style.display = 'grid';
  btnMobFav.parentElement.style["background-color"] = 'rgba(158, 132, 94, 0.4)';
  panelNum = 1
  from = 0
  showTournaments(from)
}
function onbtnData(event) {
  clearMenu();
  btnData.removeEventListener('click', onbtnData);
  btnData.classList.add("moveDown");
  btnData.style.color = 'black';
  document.getElementById('dataPageBlock').style.display = 'grid';
  btnMobData.parentElement.style["background-color"] = 'rgba(158, 132, 94, 0.4)';

}
function onbtnStatistics(event) {
  clearMenu();
  btnStatistics.removeEventListener('click', onbtnStatistics);
  btnStatistics.classList.add("moveDown");
  btnStatistics.style.color = 'black';
  document.getElementById('statisticPageBlock').style.display = 'grid';
  btnMobStat.parentElement.style["background-color"] = 'rgba(158, 132, 94, 0.4)';
}
function onbtnAbout(event) {
  clearMenu();
  btnAbout.removeEventListener('click', onbtnAbout);
  btnAbout.classList.add("moveDown");
  btnAbout.style.color = 'black';
  document.getElementById('aboutPageBlock').style.display = 'grid';
}

function onProfile(event) {
  clearMenu();
  profile.removeEventListener('click', onProfile);
  profile.style["background-color"] = 'rgba(170, 170, 170, 0.2)';
  document.getElementById('profilePageBlock').style.display = 'grid';
  btnMobProf.parentElement.style["background-color"] = 'rgba(158, 132, 94, 0.4)';
}

function clearMenu() {
  NavPanelBtns.forEach(element => element.style.color = 'white');
  profile.style["background-color"] = 'transparent';
  mobileNavPanelBtns.forEach(element => element.parentElement.style["background-color"] = 'transparent');
  btnHome.addEventListener('click', onbtnHome);
  btnFavorites.addEventListener('click', onbtnFavorites);
  btnData.addEventListener('click', onbtnData);
  btnStatistics.addEventListener('click', onbtnStatistics);
  btnAbout.addEventListener('click', onbtnAbout);
  profile.addEventListener('click', onProfile);
  btnHome.classList.remove("moveDown");
  btnFavorites.classList.remove("moveDown");
  btnData.classList.remove("moveDown");
  btnStatistics.classList.remove("moveDown");
  btnAbout.classList.remove("moveDown");
  document.getElementById('homePageBlock').style.display = 'none';
  document.getElementById('profilePageBlock').style.display = 'none';
  document.getElementById('favoritesPageBlock').style.display = 'none';
  document.getElementById('dataPageBlock').style.display = 'none';
  document.getElementById('statisticPageBlock').style.display = 'none';
  document.getElementById('aboutPageBlock').style.display = 'none';

}

isMobileVersion = width < 600;

function onCreateTournament(event) {
  tournamentCreatePanel.style.display = 'grid';
  mainBlock.style.display = 'none';
  tournamentCreatePanel.insertAdjacentHTML('beforeend', `
    <img src="img/crossIcon.svg" alt="cross" class="crossIcons" id="crossIcononCreate">
  <label class="trnCrtPanel" for="creatingTournament" id="creatingTournamentLbl">Creating Tournament</label>
  <input class="trnCrtPanel firstMpage" type="text" id="tournamentNameInputAtCreatePanel" maxlength="30" placeholder="Tournament Name">
  <div class="firstMpage" id="TargetsCreatePanel"><label class="trnCrtPanel" for="trnTargets" id="tournamentTargetsLblAtCreatePanel">Tartgets: </label>
  <div id="tournamentTargetsBlockAtCreatePanel">  
      <input type="text" class="trnCrtPanel tournamentTargetsInputAtCreatePanel">
  </div></div>
  <div class="firstMpage" id="RequirementsCreatePanel"><label class="trnCrtPanel" for="trnRequirements" id="tournamentRequirementsLblAtCreatePanel">Requirements: </label>
 <div id="tournamentRequirementsBlockAtCreatePanel">
     <input type="text" class="trnCrtPanel tournamentRequirementsInputAtCreatePanel">
 </div></div>
 <textarea class="trnCrtPanel secondMpage" id="tournamentDescriptionTextAreaAtCreatePanel" name="tournamentDescriptionTextAreaAtCreatePanel"
     cols="30" rows="3" maxlength="100" placeholder="write some short description"></textarea>`);
  let creatTrnSndPage = `
     <input class="trnCrtPanel secondMpage" type="number" id="tournamentMaxMembersInputAtCreatePanel" placeholder="Max Participants">
     <form action="#" class="trnCrtPanel secondMpage" id="tournamentTypeInputAtCreatePanel">
         <fieldset form="tournamentTypeInputAtCreatePanel">
             <input class="trnCrtPanel" type="radio" id="tournamentOpenedTypeInputAtCreatePanel" name="tournamentTypeInputAtCreatePanel">
             <label for="opened">Opened</label><br>
             <input class="trnCrtPanel" type="radio" id="tournamentInvitedTypeInputAtCreatePanel" name="tournamentTypeInputAtCreatePanel">
             <label for="invited">Invited</label><br>
             <input class="trnCrtPanel" type="radio" id="tournamentClosedTypeInputAtCreatePanel" name="tournamentTypeInputAtCreatePanel">
             <label for="closed">Closed</label>
         </fieldset></form>
     <button class="trnCrtPanel btn-grad secondMpage" id="tournamentCreateBtn">Create</button>`;

  if (isMobileVersion) {
    tournamentCreatePanel.insertAdjacentHTML('beforeend', creatTrnSndPage);
    secondMpage = Array.from(document.getElementsByClassName('secondMpage'));
    secondMpage.forEach(element => element.style.display = 'none');
    tournamentCreatePanel.insertAdjacentHTML('beforeend', `<button class="trnCrtPanel btn-grad" id="tournamentSwitchPageBtn">Next</button>`);
    tournamentSwitchPageBtn = document.getElementById('tournamentSwitchPageBtn');
    tournamentSwitchPageBtn.addEventListener('click', onTournamentSwitchPageBtn);
  } else {
    tournamentCreatePanel.insertAdjacentHTML('beforeend', `<div id="typeMaxBtns">${creatTrnSndPage}</div>`);
    typeMaxBtns = document.getElementById('typeMaxBtns');
  }
  firstMpage = Array.from(document.getElementsByClassName('firstMpage'));
  secondMpage = Array.from(document.getElementsByClassName('secondMpage'));
  tournamentCreateBtn = document.getElementById('tournamentCreateBtn');
  body.addEventListener('keydown', function (event) {
    if (event.code == 'Escape') { oncrossIcononCreate(); }
  });
  tournamentCreateBtn.addEventListener('click', onTournamentCreateBtn);
  tournamentRequirementsLblAtCreatePanel = document.getElementById('tournamentRequirementsLblAtCreatePanel');
  tournamentDescriptionTextAreaAtCreatePanel = document.getElementById('tournamentDescriptionTextAreaAtCreatePanel');
  creatingTournamentLbl = document.getElementById('creatingTournamentLbl');
  tournamentNameInputAtCreatePanel = document.getElementById('tournamentNameInputAtCreatePanel');
  tournamentMaxMembersInputAtCreatePanel = document.getElementById('tournamentMaxMembersInputAtCreatePanel');
  tournamentOpenedTypeInputAtCreatePanel = document.getElementById('tournamentOpenedTypeInputAtCreatePanel');
  tournamentInvitedTypeInputAtCreatePanel = document.getElementById('tournamentInvitedTypeInputAtCreatePanel');
  tournamentClosedTypeInputAtCreatePanel = document.getElementById('tournamentClosedTypeInputAtCreatePanel');
  tournamentTargetsBlockAtCreatePanel = document.getElementById('tournamentTargetsBlockAtCreatePanel');
  tournamentRequirementsBlockAtCreatePanel = document.getElementById('tournamentRequirementsBlockAtCreatePanel');
  tournamentRequirementsInputAtCreatePanel = Array.from(document.getElementsByClassName('tournamentRequirementsInputAtCreatePanel'));
  tournamentTargetsInputAtCreatePanel = Array.from(document.getElementsByClassName('tournamentTargetsInputAtCreatePanel'));
  tournamentTargetsInputAtCreatePanel[0].addEventListener('input', ontournamentTargetsInputAtCreatePanel);
  tournamentRequirementsInputAtCreatePanel[0].addEventListener('input', ontournamentRequirementsInputAtCreatePanel);
  crossIcononCreate = document.getElementById('crossIcononCreate');
  crossIcononCreate.addEventListener('click', oncrossIcononCreate);
  trnCrtPanel = Array.from(document.getElementsByClassName('trnCrtPanel'));
}
function onTournamentSwitchPageBtn(event) {
  // console.log(tournamentSwitchPageBtn.innerText);
  if (tournamentSwitchPageBtn.innerText == 'NEXT') {
    tournamentSwitchPageBtn.innerText = 'PREVIOUS';
    firstMpage.forEach(element => element.style.display = 'none');
    secondMpage.forEach(element => element.style.display = 'block');
    tournamentSwitchPageBtn.style["justify-self"] = 'flex-start';
  } else {
    tournamentSwitchPageBtn.innerText = 'NEXT';
    firstMpage.forEach(element => element.style.display = 'block');
    secondMpage.forEach(element => element.style.display = 'none');
    tournamentSwitchPageBtn.style["justify-self"] = 'center';
  }
}
function onPrewPageTurn(event) {
  from = from - tournamentsOnThePage;
  if (from < 0) { from = 0; }
  showTournaments(from);
  // console.log('Prew Page');
}
function onNextPagTurn(event) {
  if (from > (trnsToShow.length - tournamentsOnThePage - 1)) return;
  from = from + tournamentsOnThePage;
  showTournaments(from);
  // console.log('Next Page');
}
function oncrossIcononCreate(event) {
  body.removeEventListener('keydown', function (event) {
    if (event.code == 'Escape') { oncrossIcononCreate(); }
  });
  while (tournamentCreatePanel.firstChild) {
    tournamentCreatePanel.removeChild(tournamentCreatePanel.firstChild);
  }
  tournamentCreatePanel.style.display = 'none';
  mainBlock.style.display = 'grid';
}
function onchangeTrnNumsOnPage(event) {
  tournamentsOnThePage = Number(this.value);
  root.style.setProperty('--tournamnets-on-the-page', `${tournamentsOnThePage}`);
  from = 0
  showTournaments(from);
}
function outputMessege(msg) {
  blackout.style.display = 'block';
  blackout.insertAdjacentHTML('beforeend', `<label style="margin-left:
   ${(width - msg.length * 14) / 2}" id="outputMsgLbl">${msg}</label><button
    id="outputMsgBtn">OK</button>`);
  let outputMsgBtn = document.getElementById('outputMsgBtn');
  outputMsgBtn.addEventListener('click', () => {
    outputMsgBtn.removeEventListener;
    blackout.removeChild(blackout.firstChild);
    blackout.removeChild(blackout.firstChild);
    blackout.style.display = 'none';
  });
}
function onLikebtn(event) {
  let likedTrnName
  if (this.classList.contains("tournamentLikeBtn")){
    likedTrnName = this.parentElement.firstChild.firstElementChild.firstElementChild.innerText
  } else{
    likedTrnName = document.getElementById('tournamentNameInfo').innerText
  }
  for (let i = 0; i < firebaseTournaments.length; i++) {
    if (firebaseTournaments[i].name == likedTrnName) {
      num = i; break;
    }
  }
  if (this.classList.contains("liked")) {
    this.classList.remove("liked");
    db.collection("users_info").doc(`${uid}`).collection("liked_tournaments").doc(likedTrnName).delete()
    .then(() => {firebaseLikedTrn.splice(firebaseLikedTrn.findIndex((element) => element.name == firebaseTournaments[num].name), 1)})
  } else {
    this.classList.add("liked");
    db.collection("users_info").doc(`${uid}`).collection("liked_tournaments").doc(likedTrnName).set(firebaseTournaments[num])
    .then(() => {firebaseLikedTrn.push(firebaseTournaments[num])}).then(() => likedTrnName = null)
  }
}



//--- --- --- --- --- ---  firebase --- --- --- --- --- --- --- ---



function onBtnSignUp(event) {
  noaccLink.removeEventListener('click', onHasaccLink);
  btnSignIn.removeEventListener('click', onBtnSignUp);
  email = inptUsername.value;
  password = inptPassword.value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      onSignIn();
      var user = userCredential.user;
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
  console.log(email, password);
  email = inptUsername.value;
  password = inptPassword.value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      onSignIn();
      var user = userCredential.user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      noaccLink.addEventListener('click', onNoaccLink);
      btnSignIn.addEventListener('click', onBtnSignIn);
      outputFormError(errorMessage);
    });
}
function onBtnSignOut(event) {
  firebase.auth().signOut().then(() => {
    onSignOut();
  }).catch((error) => {
    console.error('sign out fail');
  });
}
var provider = new firebase.auth.GoogleAuthProvider();
function onGoogleAuth(event) {
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
      var token = credential.accessToken;
      console.log(credential, token);
      var user = result.user;
      onSignIn();
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(errorCode, errorMessage);
      var email = error.email;
      var credential = error.credential;
      console.log(email, credential);
    });
}
let uid;
let User;

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    uid = user.uid;
    email = user.email;
    console.log(user);
    User = firebase.auth().currentUser;
    onSignIn();
  } else {
    onSignOut();
  }
});
