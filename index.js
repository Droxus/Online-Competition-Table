
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
let trnType = 'opened';
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
let tournamentTargetsBlockAtCreatePanel;
let tournamentRequirementsBlockAtCreatePanel;
let tournamentRequirementsInputAtCreatePanel;
let tournamentCreateBtn;
const NavPanelBtns = [btnHome, btnFavorites, btnData, btnStatistics, btnAbout, profile];
const mobileNavPanelBtns = [btnMobHome, btnMobFav, btnMobData, btnMobStat, btnMobProf];
let password, email, width, height, temporaryElementsTI, docName, nowDate;
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
document.getElementById('btnNavJT').addEventListener('click', onBtnNavJT)
document.getElementById('navPanelJTclose').addEventListener('click', onNavPanelJTclose)
document.getElementById('navPanelJTmain').addEventListener('click', onNavPanelJTmain)
document.getElementById('navPanelJTstatistics').addEventListener('click', onNavPanelJTstatistics)
document.getElementById('navPanelJTdata').addEventListener('click', onNavPanelJTdata)
document.getElementById('navPanelJTleaders').addEventListener('click', onNavPanelJTleaders)
document.getElementById('navPanelJTsettings').addEventListener('click', onNavPanelJTsettings)
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
  while (tournamentsPanel[panelNum].firstChild) {
    tournamentsPanel[panelNum].removeChild(tournamentsPanel[panelNum].firstChild);
  }
  for (let i = from; i < to; i++) {
    tournamentsPanel[panelNum].insertAdjacentHTML('beforeend', `<div class="tournament" ><div class="onTournamentInfoBlock">               
          <div id="tournamentNameBlock"><label class="tournamentName" for="tournamentName">${trnsToShow[i].name}</label></div>
          <div id="tournamentDescriptionBlock"><label class="tournamentDescription" for="tournamentDescription">${trnsToShow[i].description}</label></div>
          <div id="tournamentTypeBlock"><label class="tournamentType" for="tournamentType">type: ${trnsToShow[i].type}</label></div>
          <div id="tournamentMaxMembersBlock"><label class="tournamentMaxMembers" for="tournamentMaxMembers">
          ${trnsToShow[i].curr_members}  <img src="img/usersGroupIcon.png" alt="usersGroup" width="24px"
           style="position: absolute; margin: -2px 10px; opacity: 0.7;"></label></div>
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
  tournamentAdminLabelInfo.innerText = document.querySelector('body').offsetWidth < 600 ? 'ADMIN' : 'ADMINISTRATOR';
  if (firebaseTournaments[num].targets[0] !== "" && firebaseTournaments[num].targets.length !== 0) {
    for (let i = 0; i < firebaseTournaments[num].targets.length; i++) {
      tournamentsTargetInfo.insertAdjacentHTML('beforeend', `<li class="temporaryElementsTI tournamentGoalsInfo">${firebaseTournaments[num].targets[i].name}</li>`);
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
  let descript = Array.from(event.target.parentElement.getElementsByClassName('tournamentTargetsDescriptInputAtCreatePanel'))[0]
  switch (event.target.value) {
    case 'push-up':
      descript.value = `By raising and lowering the body using the arms, push-ups exercise the pectoral muscles,
       triceps, and anterior deltoids, with ancillary benefits to the rest of the deltoids, serratus anterior, 
       coracobrachialis and the midsection as a whole`
      break;
    case 'crunch':
      descript.value = `The crunch is one of the most popular abdominal exercises. It works the rectus 
abdominis muscle. It allows both building "six-pack" abs, and tightening the belly. Crunches use 
the exerciser's own body weight to tone muscle, and are recommended as a low-cost exercise that can be performed at home.`
      break;
      case 'pull-up':
        descript.value = `The pull-up is a closed-chain movement where the body is suspended by the hands and pulls up.
As this happens, the elbows flex and the shoulders adduct and extend to bring the elbows to the torso.`
      break;
      case 'squat':
        descript.value = `A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up. 
During the descent of a squat, the hip and knee joints flex while the ankle joint dorsiflexes; 
conversely the hip and knee joints extend and the ankle joint plantarflexes when standing up.`
      break;
      case 'plank':
        descript.value = `The plank (also called a front hold, hover, or abdominal bridge) is an isometric core strength exercise that
involves maintaining a position similar to a push-up for the maximum possible time.`
      break;
  }
  if (canMakeNewTarg) {
    tournamentTargetsInputAtCreatePanel[tournamentTargetsInputAtCreatePanel.length - 1].removeEventListener('input', ontournamentTargetsInputAtCreatePanel);
    event.target.parentElement.insertAdjacentHTML('afterend', ` <div class="targetsUnityCT"><input list="hotTargets"
     name="hotTargets" class="trnCrtPanel tournamentTargetsInputAtCreatePanel" placeholder="enter target name" id="browser">
    <datalist id="hotTargets">
    <option value="push-up">
    <option value="crunch">
    <option value="pull-up">
    <option value="squat">
    <option value="plank">
    </datalist>
  <select class="trnCrtPanel tournamentTargetsTypeInputAtCreatePanel" placeholder="type">
    <option value="field">field</option>
    <option value="slider">slider</option>
    <option value="clicker">clicker</option>
  </select>
  <input type="number" class="trnCrtPanel tournamentTargetsApproachInputAtCreatePanel" placeholder="try">
    <input type="text" class="trnCrtPanel tournamentTargetsDescriptInputAtCreatePanel" placeholder="enter target description">
    </div>`);
    tournamentTargetsInputAtCreatePanel = Array.from(document.getElementsByClassName('tournamentTargetsInputAtCreatePanel'));
    trnCrtPanel = Array.from(document.getElementsByClassName('trnCrtPanel'));
    tournamentTargetsInputAtCreatePanel[tournamentTargetsInputAtCreatePanel.length - 1].addEventListener('input', ontournamentTargetsInputAtCreatePanel);
  }
  canMakeNewTarg = ((tournamentTargetsInputAtCreatePanel.length == 1) || (tournamentTargetsInputAtCreatePanel.length < 5)) && (tournamentTargetsInputAtCreatePanel[tournamentTargetsInputAtCreatePanel.length - 2].value !== "");
}
let canMakeNewReq = true;
let trnTargets = [];
let trnRequirements = [];
function onTournamentCreateBtn() {
  if ((tournamentNameInputAtCreatePanel.value == "")) {
    outputMessege('Enter Tournament Name');
  } else if (Array.from(document.getElementsByClassName('tournamentTargetsInputAtCreatePanel'))[0].value == ''){
    outputMessege('Enter Tournament Target')
  } else if (document.getElementById('trnStartInputCP').value  == "") {
    outputMessege('Enter Tournament Start');
  } else if (document.getElementById('trnEndInputCP').value  == "") {
    outputMessege('Enter Tournament End');
  } else if (document.getElementById('trnSeasonsInputCP').value  == "") {
    outputMessege('Enter Season Length');
  } else if (trnType == undefined) {
    outputMessege('Enter Tournament Type');
  } else {
    
    Array.from(document.getElementById('tournamentTargetsBlockAtCreatePanel').children).forEach(element => {
      let tournamentTargetsApproachInputAtCreatePanel =
      Math.abs(Math.floor(Array.from(element.getElementsByClassName('tournamentTargetsApproachInputAtCreatePanel'))[0].value))
      trnTargets.push({
        name: Array.from(element.getElementsByClassName('tournamentTargetsInputAtCreatePanel'))[0].value,
        description: Array.from(element.getElementsByClassName('tournamentTargetsDescriptInputAtCreatePanel'))[0].value,
        approach: tournamentTargetsApproachInputAtCreatePanel,
        type: Array.from(element.getElementsByClassName('tournamentTargetsTypeInputAtCreatePanel'))[0].value,
      })
    })
    if ((Array.from(document.getElementsByClassName('tournamentTargetsInputAtCreatePanel')).length < 5) || 
    (Array.from(document.getElementsByClassName('tournamentTargetsInputAtCreatePanel')).value == '')){
      trnTargets.pop();
    }
    tournamentRequirementsInputAtCreatePanel.forEach(element => trnRequirements.push(element.value));
    trnRequirements.pop();
    let startDate = document.getElementById('trnStartInputCP').value
    let endDate = document.getElementById('trnEndInputCP').value
    let trnSeasonsInputCP = Math.abs(Math.floor(document.getElementById('trnSeasonsInputCP').value))
    db.collection("global_tournaments").doc(`${tournamentNameInputAtCreatePanel.value}`).get().then((doc) => {
      if (doc.exists) {
        outputMessege('Tournament with this name exists');
      } else {
        docName = tournamentNameInputAtCreatePanel.value
        let createdTrn = {
          name: tournamentNameInputAtCreatePanel.value,
          targets: trnTargets,
          description: tournamentDescriptionTextAreaAtCreatePanel.value,
          type: trnType,
          curr_members: 1,
          administrator: login,
          participants: "",
          usersInfo: [uid],
          date: {
            round:{
              day: Math.floor(roundLengthDays),
              hour: Math.floor(roundLengthHours),
              minute: Math.floor(roundLengthMinutes),
              milleseconds: Number(roundLengthMS)
            },
            start: {
              day: new Date(startDate).getUTCDate(),
              hour: new Date(startDate).getUTCHours(),
              minute: new Date(startDate).getUTCMinutes(),
              month: new Date(startDate).getUTCMonth()+1,
              year: new Date(startDate).getUTCFullYear(),
              allMilleseconds: new Date(startDate).getTime()
            },
            end: {
              day: new Date(endDate).getUTCDate(),
              hour: new Date(endDate).getUTCHours(),
              minute: new Date(endDate).getUTCMinutes(),
              month: new Date(endDate).getUTCMonth()+1,
              year: new Date(endDate).getUTCFullYear(),
              allMilleseconds: new Date(endDate).getTime()
            },
            seasonLength: Number(trnSeasonsInputCP),
            seasonNum: 1,
            roundCurrent: 0
          }
        }
        console.log(createdTrn)
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
  onNavPanelJTmain()
}
function onCrossIconJT(event) {
  clearInterval(timerToNextRound)
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
function onBtnNavJT(event){
  document.getElementById('navPanelJT').style.display = 'grid'
}
function onNavPanelJTclose(event){
  document.getElementById('navPanelJT').style.display = 'none'
}

let roundOFtrn, toNextRound, hoursToNextRound, minutesToNextRound, secondsToNextRound, seasonNumber
function onNavPanelJTmain(event){
  Array.from(document.getElementsByClassName('pagesJT')).forEach(element => element.style.display = 'none')
  document.getElementById('navPanelJT').style.display = 'none'
  document.getElementById('mainPageJT').style.display = 'grid'
  document.getElementById('pageNameJT').innerText = 'Main'
  timersToNextRound()
  document.getElementById('roundNumJT').innerText = `Round ${Math.floor(roundOFtrn)}`
  document.getElementById('seasonNumJT').innerText = `Season ${seasonNumber}`
}
function timersToNextRound(event){
  nowDate = new Date()
  roundOFtrn = ((nowDate.getTime() - firebaseTournaments[num].date.start.allMilleseconds) / 1000 / 60 / 60) /
  ((firebaseTournaments[num].date.round.day * 24) + firebaseTournaments[num].date.round.hour) + 1
  toNextRound = (Math.ceil(roundOFtrn) - roundOFtrn) * ((firebaseTournaments[num].date.round.day * 24) + firebaseTournaments[num].date.round.hour)
  seasonNumber = Math.ceil(Math.floor(roundOFtrn) / firebaseTournaments[num].date.seasonLength)
  hoursToNextRound = Math.floor(toNextRound)
  minutesToNextRound = Math.floor((toNextRound - Math.floor(toNextRound)) * 60)
  secondsToNextRound = Math.floor((((toNextRound - Math.floor(toNextRound)) * 60) - Math.floor((toNextRound - Math.floor(toNextRound)) * 60)) * 60)
  Array.from(document.getElementsByClassName('timerDataJT')).forEach(element =>{ 
    element.innerText = `Next Round ${String(hoursToNextRound).padStart(2, '0')}:${String(minutesToNextRound).padStart(2, '0')}:${String(secondsToNextRound).padStart(2, '0')}`})
  clearInterval(timerToNextRound)
    timerToNextRound = setInterval(() => {
    console.log('1 sec')
    secondsToNextRound--
    if (secondsToNextRound < 0) {
      minutesToNextRound--; 
      secondsToNextRound = 59;
    }
    if (minutesToNextRound < 0) {
      hoursToNextRound--;
      minutesToNextRound = 59
    }
    Array.from(document.getElementsByClassName('timerDataJT')).forEach(element =>{
       element.innerText = `Next Round ${String(hoursToNextRound).padStart(2, '0')}:${String(minutesToNextRound).padStart(2, '0')}:${String(secondsToNextRound).padStart(2, '0')}`
    })}, 1000)
}
function onNavPanelJTstatistics(event){
  Array.from(document.getElementsByClassName('pagesJT')).forEach(element => element.style.display = 'none')
  document.getElementById('navPanelJT').style.display = 'none'
  document.getElementById('statisticsPageJT').style.display = 'grid'
  document.getElementById('pageNameJT').innerText = 'Statistics'
}
function onNavPanelJTdata(event){
  Array.from(document.getElementsByClassName('pagesJT')).forEach(element => element.style.display = 'none')
  document.getElementById('navPanelJT').style.display = 'none'
  document.getElementById('dataPageJT').style.display = 'grid'
  document.getElementById('pageNameJT').innerText = 'Data'
  while (document.getElementById('dataBlocksJT').firstChild) {
    document.getElementById('dataBlocksJT').removeChild(document.getElementById('dataBlocksJT').firstChild);
  }
  console.log(firebaseTournaments[num])
  for (let i = 0; i < firebaseTournaments[num].targets.length; i++){
    document.getElementById('dataBlocksJT').insertAdjacentHTML('beforeend', `
    <div class="dataBlockJT">
    <label class="dataJTlabels" for="dataJTlabels">${firebaseTournaments[num].targets[i].name}</label>
    <div class="inputsUnityDataJT">
    </div></div>`)
    let type, labelCounter
      switch (firebaseTournaments[num].targets[i].type) {
        case 'slider':
        type = 'range';
        labelCounter = '<label class="labelCounter">0</label>'
        break;
        case 'clicker':
        type = 'button'
        labelCounter = '<label class="labelCounter">0</label>'
        break;
        default: type = 'number';
        labelCounter = ''
          break;
      }
      let approachLength
      firebaseTournaments[num].targets[i].approach == '' ? approachLength = 1 : approachLength = firebaseTournaments[num].targets[i].approach
    for (let j = 0; j < approachLength; j++){    
      Array.from(document.getElementsByClassName('inputsUnityDataJT'))[i].insertAdjacentHTML('beforeend', `
      <div class="lblAndInputDataJT">
      ${labelCounter}
      <button class="btnsRowLeft"><img src="img/leftArrowIcon.png" alt="leftArrow" width="36px"></button>
      <input class="dataJTinputs" type="${type}" placeholder="try ${j+1}" value="${type == 'button' ? `try ${j+1}` : ''}">
      <button class="btnsRowRight"><img src="img/rightArrowIcon.png" alt="rightArrow" width="36px"></button>
      </div>`)
    }
    if (labelCounter){
      if (type == 'range'){
        Array.from(Array.from(document.getElementsByClassName('inputsUnityDataJT'))[i].getElementsByTagName('input')).forEach(
          element => element.addEventListener('input', onSliderDataJTchange))
      } else {
        Array.from(Array.from(document.getElementsByClassName('inputsUnityDataJT'))[i].getElementsByTagName('input')).forEach(
          element => element.addEventListener('click', onClickerDataJTchange))
          Array.from(Array.from(document.getElementsByClassName('inputsUnityDataJT'))[i].getElementsByTagName('input')).forEach(
            element => element.style["font-size"] = '18px')
      }
    }
  }
  
  Array.from(document.getElementsByClassName('btnsRowLeft')).forEach(element => element.addEventListener('click', (event) => {
    if (nowAproach > 1){
      event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 1].classList.remove('moveFromRightDateInput')
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 1].classList.remove('moveFromLeftDateInput')
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 1].classList.remove('moveRightDateInput')
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 1].classList.remove('moveLeftDateInput')
      event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 1].classList.add('moveLeftDateInput')
      event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 2].style.display = 'block'

      event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 2].classList.remove('moveFromRightDateInput')
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 2].classList.remove('moveFromLeftDateInput')
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 2].classList.remove('moveRightDateInput')
      event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 2].classList.remove('moveLeftDateInput')
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 2].classList.add('moveFromRightDateInput')
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 1].removeEventListener('animationend', onAnimationInputMoveRight)
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 1].removeEventListener('animationend', onAnimationInputMoveLeft)
      event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 1].addEventListener('animationend', onAnimationInputMoveLeft)
    }
  }))
  Array.from(document.getElementsByClassName('btnsRowRight')).forEach(element => element.addEventListener('click', (event) => {
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 1].classList.remove('moveFromRightDateInput')
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 1].classList.remove('moveFromLeftDateInput')
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 1].classList.remove('moveLeftDateInput')
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 1].classList.add('moveRightDateInput')
    event.target.parentElement.parentElement.insertAdjacentHTML('beforeend', `<input class="dataJTinputs" type="number" placeholder="try 2"
    style="transform: translate(-150%, 0); width: 35%;"></input>`)
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach].classList.remove('moveFromRightDateInput')
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach].classList.add('moveFromLeftDateInput')
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach].style.display = 'block'
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 1].removeEventListener('animationend', onAnimationInputMoveRight)
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 1].removeEventListener('animationend', onAnimationInputMoveLeft)
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 1].addEventListener('animationend', onAnimationInputMoveRight)

  }))
  timersToNextRound()
}
let nowAproach = 1
function onAnimationInputMoveRight(event){
  event.target.style.display = 'none'
  nowAproach++
}
function onAnimationInputMoveLeft(event){
  event.target.style.display = 'none'
        nowAproach--
}
let localDate = new Date()
console.log(localDate.getUTCHours())
let timerToNextRound
function onSliderDataJTchange(event){
  event.target.parentElement.firstElementChild.innerText = event.target.value
} 
function onClickerDataJTchange(event){
  event.target.parentElement.firstElementChild.innerText++
}
function onNavPanelJTleaders(event){
  Array.from(document.getElementsByClassName('pagesJT')).forEach(element => element.style.display = 'none')
  document.getElementById('navPanelJT').style.display = 'none'
  document.getElementById('leadersPageJT').style.display = 'grid'
  document.getElementById('pageNameJT').innerText = 'Leader Board'
}
function onNavPanelJTsettings(event){
  Array.from(document.getElementsByClassName('pagesJT')).forEach(element => element.style.display = 'none')
  document.getElementById('navPanelJT').style.display = 'none'
  document.getElementById('settingsPageJT').style.display = 'grid'
  document.getElementById('pageNameJT').innerText = 'Settings'
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
function onCreateTournament(event) {
  tournamentCreatePanel.style.display = 'grid';
  mainBlock.style.display = 'none';
  tournamentCreatePanel.insertAdjacentHTML('beforeend', ` <div id="headerCT">
  <img src="img/backIcon.png" alt="cross" id="crossIcononCreate">
  <label class="trnCrtPanel" for="creatingTournament" id="creatingTournamentLbl">Creating Tournament</label>
</div>
  <input class="trnCrtPanel firstMpage" type="text" id="tournamentNameInputAtCreatePanel" maxlength="16" placeholder="Tournament Name">
  <div class="firstMpage" id="TargetsCreatePanel"><label class="trnCrtPanel" for="trnTargets" id="tournamentTargetsLblAtCreatePanel">Tartgets: </label>
  <div id="tournamentTargetsBlockAtCreatePanel">
  <div class="targetsUnityCT"><input list="hotTargets" name="hotTargets" class="trnCrtPanel tournamentTargetsInputAtCreatePanel" placeholder="enter target name" id="browser">
  <datalist id="hotTargets">
    <option value="push-up">
    <option value="crunch">
    <option value="pull-up">
    <option value="squat">
    <option value="plank">
  </datalist>
<select class="trnCrtPanel tournamentTargetsTypeInputAtCreatePanel" placeholder="type">
  <option value="field">field</option>
  <option value="slider">slider</option>
  <option value="clicker">clicker</option>
</select>
  <input type="number" class="trnCrtPanel tournamentTargetsApproachInputAtCreatePanel" placeholder="try">
<input type="text" class="trnCrtPanel tournamentTargetsDescriptInputAtCreatePanel" placeholder="enter target description">
  </div></div></div>
  <div class="secondMpage" id="RequirementsCreatePanel">
    <div class="dateBlockCT">
    <label class="trndateLblCP">Start</label>
    <input type="datetime-local" class="trnCrtPanel tournamentDateInputAtCreatePanel" id="trnStartInputCP">
    </div>
    <div class="dateBlockCT">
    <label class="trndateLblCP">End</label>
    <input type="datetime-local" class="trnCrtPanel tournamentDateInputAtCreatePanel" id="trnEndInputCP">
    </div>
    <div class="dateBlockCT">
    <label class="trndateLblCP" id="roundLength" style="color: grey;">Round</label>
    </div>
    <div class="dateBlockCT">
    <label class="trndateLblCP">Tournament Season Length</label>
    <input type="number" class="trnCrtPanel tournamentDateInputAtCreatePanel" id="trnSeasonsInputCP" value="30">
    </div>
 </div>
 <textarea class="trnCrtPanel secondMpage" id="tournamentDescriptionTextAreaAtCreatePanel" name="tournamentDescriptionTextAreaAtCreatePanel"
     cols="30" rows="3" maxlength="100" placeholder="write some short description"></textarea>`);
  let creatTrnSndPage = `
         <div class="firstMpage" id="tournamentTypeInputAtCreatePanel">
         <button class="trnTypeAtCP" style="background: green; color: beige;">Opened</button>
         <button class="trnTypeAtCP" style="color: black;">Invited</button>
         <button class="trnTypeAtCP" style="color: black;">Closed</button>
      </div>
     <button class="trnCrtPanel btn-grad secondMpage" id="tournamentCreateBtn">Create</button>`;

  if (document.querySelector('body').offsetWidth < 600) {
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
  Array.from(document.getElementsByClassName('trnTypeAtCP')).forEach(element => element.addEventListener('click', (event) => {
    Array.from(document.getElementsByClassName('trnTypeAtCP')).forEach(element => {
      element.style.background = 'transparent'; element.style.color = 'black';})

    event.target.style.color = 'beige'
    switch (event.target.innerText) {
      case 'Closed':
        event.target.style.background = 'red'
        trnType = 'closed'
        break;
      case 'Invited':
        event.target.style.background = 'orange'
        trnType = 'invited'
      break;
      default:
        event.target.style.background = 'green'
        trnType = 'opened'
        break;
      }
  }))
  document.getElementById('trnStartInputCP').addEventListener('input', (event) => {
    roundLength()
  })
  document.getElementById('trnEndInputCP').addEventListener('input', (event) => {
    roundLength()
  })
  body.addEventListener('keydown', function (event) {
    if (event.code == 'Escape') { oncrossIcononCreate(); }
  });
  tournamentCreateBtn.addEventListener('click', onTournamentCreateBtn);
  tournamentRequirementsLblAtCreatePanel = document.getElementById('tournamentRequirementsLblAtCreatePanel');
  tournamentDescriptionTextAreaAtCreatePanel = document.getElementById('tournamentDescriptionTextAreaAtCreatePanel');
  creatingTournamentLbl = document.getElementById('creatingTournamentLbl');
  tournamentNameInputAtCreatePanel = document.getElementById('tournamentNameInputAtCreatePanel');
  tournamentTargetsBlockAtCreatePanel = document.getElementById('tournamentTargetsBlockAtCreatePanel');
  tournamentRequirementsBlockAtCreatePanel = document.getElementById('tournamentRequirementsBlockAtCreatePanel');
  tournamentRequirementsInputAtCreatePanel = Array.from(document.getElementsByClassName('tournamentRequirementsInputAtCreatePanel'));
  tournamentTargetsInputAtCreatePanel = Array.from(document.getElementsByClassName('tournamentTargetsInputAtCreatePanel'));
  tournamentTargetsInputAtCreatePanel[0].addEventListener('input', ontournamentTargetsInputAtCreatePanel);
  crossIcononCreate = document.getElementById('crossIcononCreate');
  crossIcononCreate.addEventListener('click', oncrossIcononCreate);
  trnCrtPanel = Array.from(document.getElementsByClassName('trnCrtPanel'));
}
let roundLengthMS, roundLengthDays, roundLengthHours, roundLengthMinutes
function roundLength(){
  if (document.getElementById('trnEndInputCP').value !== '' && document.getElementById('trnStartInputCP').value !== ''){
    roundLengthMS = (new Date(document.getElementById('trnEndInputCP').value).getTime() - 
    new Date(document.getElementById('trnStartInputCP').value).getTime()) / document.getElementById('trnSeasonsInputCP').value
    roundLengthDays = roundLengthMS / 1000 / 60 / 60 / 24
    roundLengthHours = (roundLengthDays - Math.floor(roundLengthDays)) * 24
    roundLengthMinutes = (roundLengthHours - Math.floor(roundLengthHours)) * 60
    console.log(new Date(document.getElementById('trnEndInputCP').value).getTime() - new Date(document.getElementById('trnStartInputCP').value).getTime())
    document.getElementById('roundLength').innerText = `Round ${Math.floor(roundLengthDays)} Days ${Math.floor(roundLengthHours)} hours ${Math.floor(roundLengthMinutes)} minutes`
    
  }
}
function onTournamentSwitchPageBtn(event) {
  if (tournamentSwitchPageBtn.innerText == 'NEXT') {
    tournamentSwitchPageBtn.innerText = 'PREVIOUS';
    firstMpage.forEach(element => element.style.display = 'none');
    document.getElementById('tournamentTypeInputAtCreatePanel').style.display = 'none'
    secondMpage.forEach(element => element.style.display = 'block');
    tournamentSwitchPageBtn.style["justify-self"] = 'flex-start';
  } else {
    tournamentSwitchPageBtn.innerText = 'NEXT';
    firstMpage.forEach(element => element.style.display = 'block');
    document.getElementById('tournamentTypeInputAtCreatePanel').style.display = 'flex'
    secondMpage.forEach(element => element.style.display = 'none');
    tournamentSwitchPageBtn.style["justify-self"] = 'center';
  }
}
function onPrewPageTurn(event) {
  from = from - tournamentsOnThePage;
  if (from < 0) { from = 0; }
  showTournaments(from);
}
function onNextPagTurn(event) {
  if (from > (trnsToShow.length - tournamentsOnThePage - 1)) return;
  from = from + tournamentsOnThePage;
  showTournaments(from);
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
