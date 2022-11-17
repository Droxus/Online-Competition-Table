
//  --- --- --- --- --- ---  Инициализация --- --- --- --- --- --- --- ---
import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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
// const createTournament = Array.from(document.getElementsByClassName('createTournament'));
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
let numsOfTrnsOnthePage = Array.from(document.getElementsByClassName('numsOfTrnsOnthePage'));
let numsOfTrnsOnthePageOpt = Array.from(document.getElementsByClassName('numsOfTrnsOnthePageOpt'));
let likeButton = Array.from(document.getElementsByClassName("heart-like-button"));
let tournamentsPanel = Array.from(document.getElementsByClassName('tournamentsPanel'));
let trnType = 'opened';
let tournamentGoalsLabelInfo = document.getElementById('tournamentGoalsLabelInfo');
let tournamentTargetsInputAtCreatePanel, tournamentSwitchPageBtn;
let tournamentRequirementsLblAtCreatePanel;
let creatingTournamentLbl;
let tournamentNameInputAtCreatePanel;
let tournamentTargetsBlockAtCreatePanel;
let tournamentRequirementsBlockAtCreatePanel;
let tournamentRequirementsInputAtCreatePanel;
const NavPanelBtns = [btnHome, btnFavorites, btnData, btnStatistics, profile];
const mobileNavPanelBtns = [btnMobHome, btnMobFav, btnMobData, btnMobStat, btnMobProf];
let password, email, width, height, temporaryElementsTI, docName, tournamentID, nowDate, dateDiff;
inptUsername.addEventListener('click', onClearError);
inptPassword.addEventListener('click', onClearError);
btnHome.addEventListener('click', onbtnHome);
profile.addEventListener('click', onProfile);
// createTournament.forEach(element => element.addEventListener('click', showCreateTournamentBlock));
// crossIcon.addEventListener('click', onCrossTournamentInfo);
document.getElementById('btnLogout').addEventListener('click', onBtnSignOut);
document.getElementById('gooleSignIn').addEventListener('click', onGoogleAuth);
// document.getElementById('tournamentJoinInfo').addEventListener('click', onJTbtn);
// document.getElementById('btnLeaveTrn').addEventListener('click', onLeaveTrn);
// document.getElementById('btnNavJT').addEventListener('click', onBtnNavJT);
// document.getElementById('navPanelJTclose').addEventListener('click', onNavPanelJTclose);
// document.getElementById('navPanelJTmain').addEventListener('click', onNavPanelJTmain);
// document.getElementById('navPanelJTstatistics').addEventListener('click', onNavPanelJTstatistics);
// document.getElementById('navPanelJTdata').addEventListener('click', onNavPanelJTdata);
// document.getElementById('navPanelJTleaders').addEventListener('click', onNavPanelJTleaders);
// document.getElementById('navPanelJTsettings').addEventListener('click', onNavPanelJTsettings);
// document.getElementById('btnEditJTdata').addEventListener('click', onSaveTournamentDate);
// document.getElementById('btnResetJTdata').addEventListener('click', onResetTournamentDate);

document.getElementById('butulaBtn').addEventListener('click', onButulaBtn)
Array.from(document.getElementsByClassName('butulaMenuBtns')).forEach(element => element.addEventListener('click', onButulaMenuBtns))
Array.from(document.getElementsByClassName('butulaTournmanetMenuBtns')).forEach(element => element.addEventListener('click', onButulaTournmanetMenuBtns))
document.getElementById('mainMenuBtn').addEventListener('click', onbtnHome)

width = window.innerWidth;
height = window.innerHeight;

// blackout.style.display = 'block';
dataEnterSqr.forEach(element => element.style.display = 'none');
document.getElementById('butulaMenu').style.display = 'none'
document.getElementById('butulaTournamentMenu').style.display = 'none'
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
function onButulaBtn(){
  let butulaMenu = document.getElementById('content').firstElementChild.id == 'joinedTournament' ? 'butulaTournamentMenu' : 'butulaMenu'
  if (document.getElementById(butulaMenu).style.display == 'none'){
    document.getElementById(butulaMenu).style.display = 'flex'
    document.getElementById('displayingBlock').style.display = 'none'
  } else {
    document.getElementById(butulaMenu).style.display = 'none'
    document.getElementById('displayingBlock').style.display = 'block'
  }
}
function clearMenuOfAuth() {
  dataEnterSqr.forEach(element => element.style.display = 'none');
  // body.style.background = "none"
}
let login;
function getNickName() {
  if (User.displayName == null) {
    login = email;
    login = email[0].toUpperCase() + email.slice(1, email.indexOf('@')).toLowerCase();
    if (login.length > 10) {
      login = login.slice(0, login.length);
    }
    nickForLabel.innerHTML = login;

    User.updateProfile({
      displayName: login
    })
      .then(() => console.log(User.displayName));

  } else {
    login = User.displayName;
    nickForLabel.innerHTML = login;
  }
  let nick = db.collection("users_info").doc(uid).nickName;

  if (((nick == null) || (nick == undefined)) || (nick == '')) {
    db.collection("users_info").doc(uid).update({
      nickName: login
    });
  }
}
function onSignIn() {
  password = null;
  getFirebaseData();
  getFirebaseUserJT()
  clearMenuOfAuth();
  mainBlock.style.display = 'grid';
  blackout.style.display = 'none';
  document.getElementById('eMail').innerText = email;
  getNickName();

}
function onSignOut() {
  blackout.style.display = 'none';
  dataEnterSqr.forEach(element => element.style.display = 'grid');
  mainBlock.style.display = 'none';
  onHasaccLink();
}
let msg = '';
function outputFormError(msg) {
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
let firebaseUserData = [];
let from = 0;
function getFirebaseData() {
  firebaseTournaments = [];
  // blackout.style.display = 'block';
  db.collection("global_tournaments").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      firebaseTournaments.push(doc.data());
    });
    while (querySnapshot.docs.length < firebaseTournaments.length) {
      firebaseTournaments.pop();
    }
  }).then(() => {
    db.collection("users_info").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        firebaseUserData.push(doc.data());
      });
    }).then(() => {onbtnHome()});
  });
}
function getFirebaseUserJT() {
  firebaseUser = [];
  let arr;
  db.collection("users_info").doc(uid).get().then((doc) => {
    if (doc.exists) {
      arr = doc.data().joined_tournaments;
    }
  }).then(() => {
    if (arr !== undefined) {
      for (let i = 0; i < firebaseTournaments.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if (firebaseTournaments[i].name == arr[j]) {
            firebaseUser.push(firebaseTournaments[i]);
          }
        }
      }
    }
  });
}
function onbtnHome(event) {
  console.log('aaaaa')
  document.getElementById('mainMenuHeader').style.display = 'grid'
  document.getElementById('defaultHeader').style.display = 'none'
  blackout.style.display = 'none';
  root.style.setProperty('--tournamnets-on-the-page', '5');

  document.getElementById('butulaMenu').style.display = 'none';
  document.getElementById('displayingBlock').style.display = 'block'
  while (document.getElementById('content').firstElementChild) {
    document.getElementById('content').firstElementChild.remove()
  }
  document.getElementById('content').appendChild(document.getElementById('homePage').content.cloneNode(true));

  showTournaments();
}
function showTournaments() {
  let trnsToShow;
  trnsToShow = firebaseTournaments;
  for (let i = 0; i < trnsToShow.length; i++) {
    console.log(trnsToShow[i].id)
    document.getElementsByClassName('tournamentsPanel')[0].insertAdjacentHTML('beforeend', `<div class="tournament" id="${trnsToShow[i].id}">             
          <div id="tournamentNameBlock"><label class="tournamentName" for="tournamentName">${trnsToShow[i].name}</label></div>
          <div id="tournamentTargetsBlock">${(trnsToShow[i].targets.map(e => e.name))}</div>
          <div id="tournamentAccessBlock"><label class="tournamentAccess" for="tournamentAccess">${trnsToShow[i].type}</label></div>
          <div id="tournamentParticipantsBlock"><label class="tournamentParticipantsBlock" for="tournamentParticipantsBlock">${trnsToShow[i].participants.length}</label>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect width="24" height="24" fill="url(#people)"/>
          <defs>
          <pattern id="people" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_5_117" transform="scale(0.00581395)"/>
          </pattern>
          <image id="image0_5_117" width="172" height="172" xlink:href="data:image/png;base64,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"/>
          </defs>
          </svg>
          </div>
          </div>`);
  }
  Array.from(document.getElementsByClassName('tournament')).forEach(element => element.addEventListener('click', onTournament));
}
let num;
function onTournament(event) {
  tournamentID = this.getAttribute('id')
  for (let i = 0; i < firebaseTournaments.length; i++) {
    if (firebaseTournaments[i].id == tournamentID) {
      num = i; 
      break;
    }
  }
  console.log(tournamentID)
  console.log(firebaseTournaments[num].name)
  docName = this.firstElementChild.innerText;
  for (let i = 0; i < firebaseUser.length; i++) {
    if (firebaseUser[i].name == firebaseTournaments[num].name) {
      return onTournamentJoin();
    }
  }
  return onTournamentInfo();
}
let escapeFuseSpam = false;
function onTournamentInfo() {
  // tournamentInfo.style.display = 'grid';
  document.getElementById('mainMenuHeader').style.display = 'none'
  document.getElementById('defaultHeader').style.display = 'grid'
  while (document.getElementById('content').firstElementChild) {
    document.getElementById('content').firstElementChild.remove()
  }
  document.getElementById('content').appendChild(document.getElementById('tournamentInfoBlock').content.cloneNode(true));
  console.log(firebaseUser)
  document.getElementById('tournamentNameInfo').innerText = firebaseTournaments[num].name;
}
function onCrossTournamentInfo(event) {
  body.removeEventListener('keyup', function (event) {
    if ((event.code == 'Escape') && (!escapeFuseSpam)) {
      escapeFuseSpam = true;
      onCrossTournamentInfo();
      setTimeout(() => { escapeFuseSpam = false; }, 1000);
    }
  });
  mainBlock.style.display = 'grid';
  tournamentInfo.style.display = 'none';
  Array.from(document.getElementsByClassName('temporaryElementsTI')).forEach(element => element.remove());
  likeButton.forEach(element => element.classList.remove("liked"));
  onbtnHome();
}
function ontournamentTargetsInputAtCreatePanel(event) {
    tournamentTargetsInputAtCreatePanel[tournamentTargetsInputAtCreatePanel.length - 1].removeEventListener('input', ontournamentTargetsInputAtCreatePanel);
    event.target.parentElement.insertAdjacentHTML('afterend', ` 
    <div class="targetsUnityCT"><input class="trnCrtPanel tournamentTargetsInputAtCreatePanel" placeholder="enter target name" id="browser">
  <select class="trnCrtPanel tournamentTargetsTypeInputAtCreatePanel" placeholder="type">
    <option value="field">field</option>
    <option value="slider">slider</option>
    <option value="clicker">clicker</option>
  </select>
  <input type="number" class="trnCrtPanel tournamentTargetsApproachInputAtCreatePanel" placeholder="try">
    </div>`);
    tournamentTargetsInputAtCreatePanel = Array.from(document.getElementsByClassName('tournamentTargetsInputAtCreatePanel'));
    tournamentTargetsInputAtCreatePanel[tournamentTargetsInputAtCreatePanel.length - 1].addEventListener('input', ontournamentTargetsInputAtCreatePanel);
}
function onTournamentCreateBtn() {
  let trnTargets = [];
    Array.from(document.getElementById('tournamentTargetsBlockAtCreatePanel').children).forEach(element => {
      trnTargets.push({
        name: Array.from(element.getElementsByClassName('tournamentTargetsInputAtCreatePanel'))[0].value,
        approach: Math.abs(Math.floor(Array.from(element.getElementsByClassName('tournamentTargetsApproachInputAtCreatePanel'))[0].value)),
        type: Array.from(element.getElementsByClassName('tournamentTargetsTypeInputAtCreatePanel'))[0].value,
      });
    });
    let id, allId = new Set()
    for (const tournament in firebaseTournaments){
      allId.add(tournament.id)
    }
    do {
      id = Number(String(Math.pow(10, 12) * Math.random()).replace('.', 0).slice(0, 12))
      console.log(id)
    } while (allId.has(id))
    allId.add(id)
      trnTargets.pop();
        docName = tournamentNameInputAtCreatePanel.value;
        let createdTrn = {
          id: id,
          name: tournamentNameInputAtCreatePanel.value,
          targets: trnTargets,
          type: trnType,
          creator: login,
          participants: [{login: login, id: uid}],
          usersInfo: [uid],
          isStarted: false,
          start: Date.now()
        };
        console.log(createdTrn);
        firebaseUser.push(createdTrn);
        db.collection("global_tournaments").add(createdTrn).then(() => {
          db.collection("users_info").doc(uid).collection("active_tournaments").add(createdTrn)}).then(() => {
          getFirebaseData();
          oncrossIcononCreate();
        });
}
function onJTbtn(event) {
  getTournamentTime();
  db.collection("users_info").doc(uid).set({
    joined_tournaments: firebase.firestore.FieldValue.arrayUnion(docName)
  }).then(() => {
    db.collection("global_tournaments").doc(tournamentID).update({
      usersInfo: firebase.firestore.FieldValue.arrayUnion(uid),
      participants: firebase.firestore.FieldValue.arrayUnion(login)
    });
  }).then(() => { onTournamentJoin(); getFirebaseUserJT(); getFirebaseData(); });
}
function onTournamentJoin(event) {
  // tournamentInfo.style.display = 'none';
  if (temporaryElementsTI) {
    temporaryElementsTI.forEach(element => element.remove());
  }
  // document.getElementById('joinedTournament').style.display = 'grid';
  document.getElementById('mainMenuHeader').style.display = 'none'
  document.getElementById('defaultHeader').style.display = 'grid'
  while (document.getElementById('content').firstElementChild) {
    document.getElementById('content').firstElementChild.remove()
  }
  document.getElementById('content').appendChild(document.getElementById('joinedTournamentBlock').content.cloneNode(true));
  document.getElementById('crossIconJT').addEventListener('click', onCrossIconJT);
  document.getElementById('nameJT').innerText = docName;
  onNavPanelJTmain();
}
function onCrossIconJT(event) {
  onSaveTournamentDate();
  clearInterval(timerToNextRound);
  document.getElementById('joinedTournament').style.display = 'none';
  document.getElementById('navPanelJT').style.display = 'none';
  document.getElementById('pageNextJT').removeEventListener('click', () => {
    firstTarget++; lastTarget++;
    dataLeadersTableDraw(document.getElementById('sesondLeaderSwitch').value - 1, document.getElementById('roundLeaderSwitch').value - 1, document.getElementById('approachLeaderSwitch').value);
  });
  document.getElementById('pagePrevJT').removeEventListener('click', () => {
    firstTarget--; lastTarget--;
    dataLeadersTableDraw(document.getElementById('sesondLeaderSwitch').value - 1, document.getElementById('roundLeaderSwitch').value - 1, document.getElementById('approachLeaderSwitch').value);
  });
  body.removeEventListener('keyup', function (event) {
    if ((event.code == 'Escape') && (!escapeFuseSpam)) {
      escapeFuseSpam = true;
      onCrossIconJT();
      setTimeout(() => { escapeFuseSpam = false; }, 1000);
    }
  });
  mainBlock.style.display = 'grid';
  if ((document.getElementById('allApproachesOfThisTarget') !== undefined) && (document.getElementById('allApproachesOfThisTarget') !== null)) {
    document.getElementById('allApproachesOfThisTarget').remove();
  }
  onbtnHome()
}
function onLeaveTrn(event) {
  db.collection("users_info").doc(uid).update({
    joined_tournaments: firebase.firestore.FieldValue.arrayRemove(`${docName}`)
  }).then(() => {
    db.collection("global_tournaments").doc(`${docName}`).update({
      usersInfo: firebase.firestore.FieldValue.arrayRemove(uid),
      participants: firebase.firestore.FieldValue.arrayRemove(login)
    });
  }).then(() => { onCrossIconJT(); getFirebaseData(); });
}
function onBtnNavJT(event) {
  document.getElementById('navPanelJT').style.display = 'grid';
}
function onNavPanelJTclose(event) {
  document.getElementById('navPanelJT').style.display = 'none';
}

let roundNumber, hoursToNextRound, minutesToNextRound, secondsToNextRound, seasonNumber;
function onNavPanelJTmain(event) {
  onSaveTournamentDate();
  Array.from(document.getElementsByClassName('pagesJT')).forEach(element => element.style.display = 'none');
  // document.getElementById('navPanelJT').style.display = 'none';
  // document.getElementById('mainPageJT').style.display = 'grid';
  document.getElementById('pageNameJT').innerText = 'Main';
  getTournamentTime();
  document.getElementById('roundNumJT').innerText = `Round ${roundNumber}`;
  document.getElementById('seasonNumJT').innerText = `Season ${seasonNumber}`;
  document.getElementById('pageNextJT').removeEventListener('click', () => {
    firstTarget++; lastTarget++;
    dataLeadersTableDraw(document.getElementById('sesondLeaderSwitch').value - 1, document.getElementById('roundLeaderSwitch').value - 1, document.getElementById('approachLeaderSwitch').value);
  });
  document.getElementById('pagePrevJT').removeEventListener('click', () => {
    firstTarget--; lastTarget--;
    dataLeadersTableDraw(document.getElementById('sesondLeaderSwitch').value - 1, document.getElementById('roundLeaderSwitch').value - 1, document.getElementById('approachLeaderSwitch').value);
  });
}
function getTournamentTime(event) {
  nowDate = Date.now();
  dateDiff = nowDate - firebaseTournaments[num].start
  seasonNumber = Math.floor(dateDiff / 1000 / 60 / 60 / 24 / 30)
  dateDiff -= seasonNumber * 30 * 24 * 60 * 60 * 1000
  roundNumber = Math.floor(dateDiff / 1000 / 60 / 60 / 24)
  dateDiff -= roundNumber * 24 * 60 * 60 * 1000
  secondsToNextRound = Math.floor(dateDiff / 1000)
  minutesToNextRound = Math.floor(secondsToNextRound / 60)
  hoursToNextRound = Math.floor(secondsToNextRound / 60 / 60)

  Array.from(document.getElementsByClassName('timerDataJT')).forEach(element => {
    element.innerText = `Next Round ${String(hoursToNextRound).padStart(2, '0')}:${String(minutesToNextRound).padStart(2, '0')}:${String(secondsToNextRound).padStart(2, '0')}`;
  });
  clearInterval(timerToNextRound);
  timerToNextRound = setInterval(() => {
    secondsToNextRound--;
    minutesToNextRound = Math.floor(secondsToNextRound / 60)
    hoursToNextRound = Math.floor(secondsToNextRound / 60 / 60)
    Array.from(document.getElementsByClassName('timerDataJT')).forEach(element => {
      element.innerText = `Next Round ${String(hoursToNextRound).padStart(2, '0')}:${String(minutesToNextRound).padStart(2, '0')}:${String(secondsToNextRound).padStart(2, '0')}`;
    });
  }, 1000);
}
function onNavPanelJTstatistics(event) {
  onSaveTournamentDate();
  Array.from(document.getElementsByClassName('pagesJT')).forEach(element => element.style.display = 'none');
  // document.getElementById('navPanelJT').style.display = 'none';
  // document.getElementById('statisticsPageJT').style.display = 'grid';
  document.getElementById('pageNameJT').innerText = 'Statistics';
  document.getElementById('pageNextJT').removeEventListener('click', () => {
    firstTarget++; lastTarget++;
    dataLeadersTableDraw(document.getElementById('sesondLeaderSwitch').value - 1, document.getElementById('roundLeaderSwitch').value - 1, document.getElementById('approachLeaderSwitch').value);
  });
  document.getElementById('pagePrevJT').removeEventListener('click', () => {
    firstTarget--; lastTarget--;
    dataLeadersTableDraw(document.getElementById('sesondLeaderSwitch').value - 1, document.getElementById('roundLeaderSwitch').value - 1, document.getElementById('approachLeaderSwitch').value);
  });
}
function onNavPanelJTdata(event) {
  getTournamentTime();
  Array.from(document.getElementsByClassName('pagesJT')).forEach(element => element.style.display = 'none');
  // document.getElementById('navPanelJT').style.display = 'none';
  // document.getElementById('dataPageJT').style.display = 'grid';
  document.getElementById('pageNameJT').innerText = 'Data';
  document.getElementById('pageNextJT').removeEventListener('click', () => {
    firstTarget++; lastTarget++;
    dataLeadersTableDraw(document.getElementById('sesondLeaderSwitch').value - 1, document.getElementById('roundLeaderSwitch').value - 1, document.getElementById('approachLeaderSwitch').value);
  });
  document.getElementById('pagePrevJT').removeEventListener('click', () => {
    firstTarget--; lastTarget--;
    dataLeadersTableDraw(document.getElementById('sesondLeaderSwitch').value - 1, document.getElementById('roundLeaderSwitch').value - 1, document.getElementById('approachLeaderSwitch').value);
  });
  while (document.getElementById('dataBlocksJT').firstChild) {
    document.getElementById('dataBlocksJT').removeChild(document.getElementById('dataBlocksJT').firstChild);
  }
  for (let i = 0; i < firebaseTournaments[num].targets.length; i++) {
    document.getElementById('dataBlocksJT').insertAdjacentHTML('beforeend', `
    <div class="dataBlockJT">
    <label class="dataJTlabels" for="dataJTlabels">${firebaseTournaments[num].targets[i].name}</label>
    <div class="inputsUnityDataJT">
    </div></div>`);
    let approachLength, valueInput;
    if ((firebaseTournaments[num].targets[i].approach !== '') && (firebaseTournaments[num].targets[i].approach !== 0)) {
      approachLength = firebaseTournaments[num].targets[i].approach;
    } else if ((firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo !== {})
      && (firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo !== undefined)) {
      if ((firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid] !== {})
        && (firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid] !== undefined)) {
        approachLength = firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid][firebaseTournaments[num].targets[i].name].length > 1 ?
          firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid][firebaseTournaments[num].targets[i].name].length : 1;
      }
    } else {
      approachLength = 1;
    }
    Array.from(document.getElementsByClassName('inputsUnityDataJT'))[i].insertAdjacentHTML('beforeend', `
      <div class="lblAndInputDataJT">
      <label class="nowApproach" for="nowApproach">1</label>
      <button class="btnsRowLeft"><img src="img/leftArrowIcon.png" alt="leftArrow" width="36px"></button>
      <button class="btnsRowRight"><img src="img/rightArrowIcon.png" alt="rightArrow" width="36px"></button>
      </div>`);
    if (firebaseTournaments[num].targets[i].type == 'slider') {
      for (let j = 0; j < approachLength; j++) {
        valueInput = '';
        if (firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo !== undefined) {
          if ((firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid] !== undefined)
            && (firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid][firebaseTournaments[num].targets[i].name][j] !== 0) &&
            (firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid][firebaseTournaments[num].targets[i].name][j] !== '') &&
            (firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid][firebaseTournaments[num].targets[i].name][j] !== undefined)) {
            valueInput = firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid][firebaseTournaments[num].targets[i].name][j];
          } else { valueInput = 0; }
        } else { valueInput = 0; }
        Array.from(document.getElementsByClassName('inputsUnityDataJT'))[i].getElementsByClassName('btnsRowRight')[0].insertAdjacentHTML('beforebegin', `
          <input class="dataJTinputs" type="range" min="0" max="100" placeholder="try ${j + 1}" value="${valueInput}" style="display:${j < 1 ? 'block' : 'none'};">`);
        Array.from(document.getElementsByClassName('dataBlockJT'))[i].getElementsByClassName('lblAndInputDataJT')[0].insertAdjacentHTML('beforeend', `
          <label class="labelCounter" style="display:${j < 1 ? 'block' : 'none'};">0</label>`);
        Array.from(Array.from(document.getElementsByClassName('inputsUnityDataJT'))[i].getElementsByTagName('input'))[j].addEventListener('input', (event) => { event.target.parentElement.getElementsByClassName('labelCounter')[j].innerText = event.target.value; });
      }
    } else if (firebaseTournaments[num].targets[i].type == 'clicker') {
      for (let j = 0; j < approachLength; j++) {
        valueInput = '';
        if (firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo !== undefined) {
          if ((firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid] !== undefined)
            && (firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid][firebaseTournaments[num].targets[i].name][j] !== 0) &&
            (firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid][firebaseTournaments[num].targets[i].name][j] !== '') &&
            (firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid][firebaseTournaments[num].targets[i].name][j] !== undefined)) {
            valueInput = firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid][firebaseTournaments[num].targets[i].name][j];
          }
        } else { valueInput = ''; }
        Array.from(document.getElementsByClassName('inputsUnityDataJT'))[i].getElementsByClassName('btnsRowRight')[0].insertAdjacentHTML('beforebegin', `
          <button class="dataJTinputs"  placeholder="try ${j + 1}" style="display:${j < 1 ? 'flex' : 'none'};">
          <div class="btnDataMinus">-</div><label class="btnDataCounter">${valueInput}</label><div class="btnDataPlus">+</div></button>`);
        Array.from(Array.from(document.getElementsByClassName('inputsUnityDataJT'))[i].getElementsByClassName('btnDataMinus')).forEach(
          element => element.addEventListener('click', (event) => {
            event.target.parentElement.parentElement.getElementsByClassName('btnDataCounter')[j].innerText < 1 ?
              0 : event.target.parentElement.parentElement.getElementsByClassName('btnDataCounter')[j].innerText--;
          }));
        Array.from(Array.from(document.getElementsByClassName('inputsUnityDataJT'))[i].getElementsByClassName('btnDataPlus')).forEach(
          element => element.addEventListener('click', (event) => { event.target.parentElement.parentElement.getElementsByClassName('btnDataCounter')[j].innerText++; }));
      }
    } else {
      for (let j = 0; j < approachLength; j++) {
        valueInput = '';
        if (firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo !== undefined) {
          if (firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid] !== undefined) {
            if (((firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid][firebaseTournaments[num].targets[i].name][j] !== undefined &&
              (firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid][firebaseTournaments[num].targets[i].name][j] !== 0)) &&
              firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid][firebaseTournaments[num].targets[i].name][j] !== '')) {
              valueInput = firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid][firebaseTournaments[num].targets[i].name][j];
            }
          }
        } else { valueInput = ''; }
        Array.from(document.getElementsByClassName('inputsUnityDataJT'))[i].getElementsByClassName('btnsRowRight')[0].insertAdjacentHTML('beforebegin', `
          <input class="dataJTinputs" type="number" placeholder="try ${j + 1}" value="${valueInput}" style="display:${j < 1 ? 'block' : 'none'};">`);
      }
    }
  }
  Array.from(document.getElementsByClassName('dataJTlabels')).forEach(element => element.addEventListener('click', (event) => {
    let valueInput;
    let targetName = event.target.innerText;
    document.getElementById('blackout').insertAdjacentHTML('afterbegin', `
    <div id="allApproachesOfThisTarget">
    <label id="thisTargetName">${targetName}</label>
    <img src="img/crossIcon.svg" alt="crossApproachesPanel" id="crossApproachesPanel" width="50px">
    <div id="thisApproaches">
    </div></div>
    `);
    if (event.target.parentElement.getElementsByClassName('dataJTinputs')[0].type == 'submit') {
      for (let i = 0; i < event.target.parentElement.getElementsByClassName('dataJTinputs').length; i++) {
        valueInput = event.target.parentElement.getElementsByClassName('dataJTinputs')[i].getElementsByClassName('btnDataCounter')[0].innerText;
        document.getElementById('thisApproaches').insertAdjacentHTML('beforeend', `
        <button class="inputsAproachesPanel" style="display:flex;">
        <div class="btnDataMinus">-</div><label class="btnDataCounter">${valueInput}</label><div class="btnDataPlus">+</div></button>
        `);
      }
      Array.from(document.getElementById('thisApproaches').getElementsByClassName('btnDataMinus')).forEach(
        element => element.addEventListener('click', (event) => {
          event.target.parentElement.getElementsByClassName('btnDataCounter')[0].innerText < 1 ?
            0 : event.target.parentElement.getElementsByClassName('btnDataCounter')[0].innerText--;
        }));
      Array.from(document.getElementById('thisApproaches').getElementsByClassName('btnDataPlus')).forEach(
        element => element.addEventListener('click', (event) => { event.target.parentElement.getElementsByClassName('btnDataCounter')[0].innerText++; }));
    } else if (event.target.parentElement.getElementsByClassName('dataJTinputs')[0].type == 'range') {
      for (let i = 0; i < event.target.parentElement.getElementsByClassName('dataJTinputs').length; i++) {
        valueInput = event.target.parentElement.getElementsByClassName('dataJTinputs')[i].value;
        document.getElementById('thisApproaches').insertAdjacentHTML('beforeend', `
        <div style="align-self: center;justify-self: center; width: 45%; height="60px">
        <label class="labelCounterAP">${valueInput}</label>
        <input class="inputsAproachesPanel" min="0" max="100" type="range" placeholder="try ${i + 1}" value="${valueInput}" style="width=100%">
        </div>
        `);
      }
      Array.from(document.getElementsByClassName('inputsAproachesPanel')).forEach(element => element.addEventListener('input', (event2) => { event2.target.parentElement.getElementsByClassName('labelCounterAP')[0].innerText = event2.target.value; }));
    } else {
      for (let i = 0; i < event.target.parentElement.getElementsByClassName('dataJTinputs').length; i++) {
        valueInput = event.target.parentElement.getElementsByClassName('dataJTinputs')[i].value;
        document.getElementById('thisApproaches').insertAdjacentHTML('beforeend', `
        <input class="inputsAproachesPanel" type="number" placeholder="try ${i + 1}" value="${valueInput}">
        `);
      }
    }

    // document.getElementById('blackout').style.display = 'grid';
    document.getElementById('crossApproachesPanel').addEventListener('click', (event2) => {
      if (event.target.parentElement.getElementsByClassName('dataJTinputs')[0].type == 'submit') {
        for (let i = 0; i < event.target.parentElement.getElementsByClassName('dataJTinputs').length; i++) {
          event.target.parentElement.getElementsByClassName('btnDataCounter')[i].innerText = event2.target.parentElement.parentElement.getElementsByClassName('btnDataCounter')[i].innerText;
        }
      } else if (event.target.parentElement.getElementsByClassName('dataJTinputs')[0].type == 'range') {
        for (let i = 0; i < event.target.parentElement.getElementsByClassName('dataJTinputs').length; i++) {
          event.target.parentElement.getElementsByClassName('dataJTinputs')[i].value = document.getElementsByClassName('labelCounterAP')[i].innerText;
          event.target.parentElement.getElementsByClassName('labelCounter')[i].innerText = document.getElementsByClassName('labelCounterAP')[i].innerText;
        }
      } else {
        for (let i = 0; i < event.target.parentElement.getElementsByClassName('dataJTinputs').length; i++) {
          event.target.parentElement.getElementsByClassName('dataJTinputs')[i].value = document.getElementsByClassName('inputsAproachesPanel')[i].value;
        }
      }
      document.getElementById('allApproachesOfThisTarget').remove();
      document.getElementById('blackout').style.display = 'none';
    });
  }));
  Array.from(document.getElementsByClassName('btnsRowLeft')).forEach(element => element.addEventListener('click', (event) => {
    nowAproach = Array.from(event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')).findIndex((element) => {
      if (element.style.display !== 'none') {
        return element;
      }
    });
    if (nowAproach < 0) {
      nowAproach = 0;
    }
    if (nowAproach < 1) {
      event.target.parentElement.parentElement.getElementsByClassName('nowApproach')[0].innerText = (nowAproach + 1);
    } else {
      event.target.parentElement.parentElement.getElementsByClassName('nowApproach')[0].innerText = nowAproach;
    }
    if (nowAproach > 0) {
      event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach].classList.remove('moveFromRightDateInput');
      event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach].classList.remove('moveFromLeftDateInput');
      event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach].classList.remove('moveRightDateInput');
      event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach].classList.remove('moveLeftDateInput');
      event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach].classList.add('moveLeftDateInput');
      if (event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 1].tagName == 'BUTTON') {
        event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 1].style.display = 'flex';
      } else {
        event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 1].style.display = 'block';
      }
      if (event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach].type == 'range') {
        event.target.parentElement.parentElement.getElementsByClassName('labelCounter')[nowAproach - 1].style.display = 'block';
        event.target.parentElement.parentElement.getElementsByClassName('labelCounter')[nowAproach].style.display = 'none';
      }
      event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 1].classList.remove('moveFromRightDateInput');
      event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 1].classList.remove('moveFromLeftDateInput');
      event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 1].classList.remove('moveRightDateInput');
      event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 1].classList.remove('moveLeftDateInput');
      event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 1].classList.add('moveFromRightDateInput');
      event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 1].removeEventListener('animationend', onAnimationInputMoveRight);
      event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach - 1].removeEventListener('animationend', onAnimationInputMoveLeft);
      event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach].removeEventListener('animationend', onAnimationInputMoveRight);
      event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach].removeEventListener('animationend', onAnimationInputMoveLeft);
      event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach].addEventListener('animationend', onAnimationInputMoveLeft);
    }
  }));
  Array.from(document.getElementsByClassName('btnsRowRight')).forEach(element => element.addEventListener('click', (event) => {
    nowAproach = Array.from(event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')).findIndex((element) => {
      if (element.style.display !== 'none') {
        return element;
      }
    });
    if (nowAproach < 0) {
      nowAproach = 0;
    }
    event.target.parentElement.parentElement.getElementsByClassName('nowApproach')[0].innerText = (nowAproach + 2);
    let type;
    if (event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach] !== undefined) {
      type = event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach].type;
    }
    if (event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs').length < nowAproach + 2) {
      if (type == 'number') {
        event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach].insertAdjacentHTML('afterend', `<input class="dataJTinputs" type="${type}" placeholder="try ${nowAproach + 2}"
      style="transform: translate(-150%, 0); width: 35%;"></input>`);
      } else
        if (type == 'submit') {
          event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach].insertAdjacentHTML('afterend', `
          <button class="dataJTinputs" style="display:flex;">
          <div class="btnDataMinus">-</div> <label class="btnDataCounter"></label> <div class="btnDataPlus">+</div></button>`);
          Array.from(event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach + 1].getElementsByClassName('btnDataMinus')).forEach(
            element => element.addEventListener('click', (event) => {
              event.target.parentElement.parentElement.parentElement.getElementsByClassName('btnDataCounter')[nowAproach].innerText < 1 ?
                0 : event.target.parentElement.parentElement.parentElement.getElementsByClassName('btnDataCounter')[nowAproach].innerText--;
            }));
          Array.from(event.target.parentElement.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach + 1].getElementsByClassName('btnDataPlus')).forEach(
            element => element.addEventListener('click', (event) => { event.target.parentElement.parentElement.parentElement.getElementsByClassName('btnDataCounter')[nowAproach].innerText++; }));
        } else {
          event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach].insertAdjacentHTML('afterend', `<input class="dataJTinputs" type="${type}" placeholder="try ${nowAproach + 2}"
        style="transform: translate(-150%, 0); width: 35%;"></input>`);
          event.target.parentElement.parentElement.parentElement.getElementsByClassName('lblAndInputDataJT')[0].insertAdjacentHTML('beforeend', `
          <label class="labelCounter" style="display: block;">0</label>`);
          event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach + 1].addEventListener('input', (event) => { event.target.parentElement.getElementsByClassName('labelCounter')[nowAproach].innerText = event.target.value; });
        }
    }
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach].classList.remove('moveFromRightDateInput');
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach].classList.remove('moveFromLeftDateInput');
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach].classList.remove('moveLeftDateInput');
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach].classList.remove('moveRightDateInput');
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach].classList.add('moveRightDateInput');
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach + 1].classList.remove('moveFromRightDateInput');
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach + 1].classList.remove('moveFromLeftDateInput');
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach + 1].classList.remove('moveLeftDateInput');
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach + 1].classList.remove('moveRightDateInput');
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach + 1].classList.add('moveFromLeftDateInput');
    if (event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach + 1].tagName == 'BUTTON') {
      event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach + 1].style.display = 'flex';
    } else {
      event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach + 1].style.display = 'block';
    }
    if (event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach + 1].type == 'range') {
      event.target.parentElement.parentElement.getElementsByClassName('labelCounter')[nowAproach].style.display = 'none';
      event.target.parentElement.parentElement.getElementsByClassName('labelCounter')[nowAproach + 1].style.display = 'block';
    }
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach + 1].removeEventListener('animationend', onAnimationInputMoveRight);
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach + 1].removeEventListener('animationend', onAnimationInputMoveLeft);
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach].removeEventListener('animationend', onAnimationInputMoveRight);
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach].removeEventListener('animationend', onAnimationInputMoveLeft);
    event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach].addEventListener('animationend', onAnimationInputMoveRight);

  }));
  getTournamentTime();
}
let nowAproach = 0;
function onAnimationInputMoveRight(event) {
  event.target.style.display = 'none';
  nowAproach++;
}
function onAnimationInputMoveLeft(event) {
  event.target.style.display = 'none';
  nowAproach--;
}
let timerToNextRound;
function onNavPanelJTleaders(event) {
  onSaveTournamentDate();
  Array.from(document.getElementsByClassName('pagesJT')).forEach(element => element.style.display = 'none');
  // document.getElementById('navPanelJT').style.display = 'none';
  // document.getElementById('leadersPageJT').style.display = 'grid';
  document.getElementById('pageNameJT').innerText = 'Leader Board';
  document.getElementById('pageNextJT').addEventListener('click', () => {
    firstTarget++; lastTarget++;
    dataLeadersTableDraw(document.getElementById('sesondLeaderSwitch').value - 1, document.getElementById('roundLeaderSwitch').value - 1, document.getElementById('approachLeaderSwitch').value);
  });
  document.getElementById('pagePrevJT').addEventListener('click', () => {
    firstTarget--; lastTarget--;
    dataLeadersTableDraw(document.getElementById('sesondLeaderSwitch').value - 1, document.getElementById('roundLeaderSwitch').value - 1, document.getElementById('approachLeaderSwitch').value);
  });
  while (document.getElementById('dataLeadersTable').firstChild) {
    document.getElementById('dataLeadersTable').removeChild(document.getElementById('dataLeadersTable').firstChild);
  }

  for (let i = 0; i < firebaseTournaments[num].season.length; i++) {
    if (i == firebaseTournaments[num].season.length - 1) {
      document.getElementById('sesondLeaderSwitch').insertAdjacentHTML('afterbegin', `
      <option selected="selected" value="${i + 1}">${i + 1}</option>`);
    } else {
      document.getElementById('sesondLeaderSwitch').insertAdjacentHTML('afterbegin', `
      <option value="${i + 1}">${i + 1}</option>`);
    }
  }
  document.getElementById('sesondLeaderSwitch').addEventListener('change', (event) => dataLeadersTableDraw(event.target.value - 1, document.getElementById('roundLeaderSwitch').value - 1, document.getElementById('approachLeaderSwitch').value));
  for (let i = 0; i < firebaseTournaments[num].date.seasonLength; i++) {
    if (i == Math.floor(roundNumber) - 1) {
      document.getElementById('roundLeaderSwitch').insertAdjacentHTML('afterbegin', `
      <option selected="selected" value="${i + 1}">${i + 1}</option>`);
    } else {
      document.getElementById('roundLeaderSwitch').insertAdjacentHTML('afterbegin', `
      <option value="${i + 1}">${i + 1}</option>`);
    }
  }
  firstTarget = 0;
  lastTarget = 4;
  document.getElementById('roundLeaderSwitch').addEventListener('change', (event) => dataLeadersTableDraw(document.getElementById('sesondLeaderSwitch').value - 1, event.target.value - 1, document.getElementById('approachLeaderSwitch').value));
  dataLeadersTableDraw(seasonNumber, roundNumber, 'avg');
}
// document.getElementById('approachLeaderSwitch').addEventListener('change', (event) => {
//   dataLeadersTableDraw(document.getElementById('sesondLeaderSwitch').value - 1, document.getElementById('roundLeaderSwitch').value - 1, event.target.value);
// });
let firstTarget;
let lastTarget;
function dataLeadersTableDraw(season, round, approach) {
  if (lastTarget > firebaseTournaments[num].targets.length) {
    lastTarget = firebaseTournaments[num].targets.length;
    firstTarget = lastTarget - 4;
  }
  if (firstTarget < 0) {
    firstTarget = 0;
    lastTarget = firstTarget + 4;
  }
  while (document.getElementById('dataLeadersTable').firstChild) {
    document.getElementById('dataLeadersTable').removeChild(document.getElementById('dataLeadersTable').firstChild);
  }
  document.getElementById('dataLeadersTable').insertAdjacentHTML('beforeend', `
  <label class="lbldataHeaderLeadersTable"></label><label class="lbldataHeaderLeadersTable">Name</label>
  `);
  for (let i = firstTarget; i < lastTarget; i++) {
    if (firebaseTournaments[num].targets[i] !== undefined) {
      document.getElementById('dataLeadersTable').insertAdjacentHTML('beforeend', `
  <label class="lbldataHeaderLeadersTable">${firebaseTournaments[num].targets[i].name}</label>
  `);
    }
  }
  for (let j = 0; j < firebaseTournaments[num].usersInfo.length; j++) {
    document.getElementById('dataLeadersTable').insertAdjacentHTML('beforeend', `
    <img src="img/icons8-test-account-48.png" width="36px"></img>
    <label class="lbldataLeadersTable" style="justify-self: baseline;">${firebaseTournaments[num].participants[j]}</label>
    `);
    let thisID = firebaseTournaments[num].usersInfo[j];
    if (((firebaseTournaments[num].season[season] !== {}) && (firebaseTournaments[num].season[season] !== undefined))
      && ((firebaseTournaments[num].season[season] !== null) && (firebaseTournaments[num].season[season] !== 0))) {
      if (((firebaseTournaments[num].season[season].round[round] !== {}) && (firebaseTournaments[num].season[season].round[round] !== undefined))
        && (firebaseTournaments[num].season[season].round[round] !== null)) {
        if (firebaseTournaments[num].season[season].round[round].UsersInfo !== undefined) {
          if (firebaseTournaments[num].season[season].round[round].UsersInfo[thisID] !== undefined) {
            // for (let i = 0; i < Object.keys(firebaseTournaments[num].season[season].round[round].UsersInfo[thisID]).length; i++){
            //   let thisUserInfo = firebaseUserData.find(element => {element == thisID})
            //   if (Object.keys(firebaseTournaments[num].season[season].round[round].UsersInfo[thisID])[i] == firebaseTournaments[num].usersInfo){

            //   }
            // }
            for (let i = firstTarget; i < lastTarget; i++) {
              if (firebaseTournaments[num].season[season].round[round].UsersInfo[thisID][firebaseTournaments[num].targets[i].name] !== undefined) {
                let valueOFlbl = 0;
                switch (approach) {
                  case 'sum':
                    firebaseTournaments[num].season[season].round[round].UsersInfo[thisID][firebaseTournaments[num].targets[i].name].forEach(element => valueOFlbl += element);
                    break;
                  case 'max':
                    valueOFlbl = Math.max.apply(Math, firebaseTournaments[num].season[season].round[round].UsersInfo[thisID][firebaseTournaments[num].targets[i].name]);
                    break;
                  case 'min':
                    valueOFlbl = Math.min.apply(Math, firebaseTournaments[num].season[season].round[round].UsersInfo[thisID][firebaseTournaments[num].targets[i].name]);
                    break;
                  default:
                    firebaseTournaments[num].season[season].round[round].UsersInfo[thisID][firebaseTournaments[num].targets[i].name].forEach(element => valueOFlbl += element);
                    valueOFlbl /= firebaseTournaments[num].season[season].round[round].UsersInfo[thisID][firebaseTournaments[num].targets[i].name].length;
                    break;
                }
                document.getElementsByClassName('lbldataLeadersTable')[document.getElementsByClassName('lbldataLeadersTable').length - 1].insertAdjacentHTML('afterend', `
      <label class="lbldataLeadersTable">${valueOFlbl}</label>
      `);
              } else {
                document.getElementsByClassName('lbldataLeadersTable')[document.getElementsByClassName('lbldataLeadersTable').length - 1].insertAdjacentHTML('afterend', `
      <label class="lbldataLeadersTable">0</label>
      `);
              }
            }
          } else {
            document.getElementsByClassName('lbldataLeadersTable')[document.getElementsByClassName('lbldataLeadersTable').length - 1].insertAdjacentHTML('afterend', `
        <label class="lbldataLeadersTable">0</label><label class="lbldataLeadersTable">0</label><label class="lbldataLeadersTable">0</label><label class="lbldataLeadersTable">0</label>
        `);
          }
        } else {
          document.getElementsByClassName('lbldataLeadersTable')[document.getElementsByClassName('lbldataLeadersTable').length - 1].insertAdjacentHTML('afterend', `
      <label class="lbldataLeadersTable">0</label><label class="lbldataLeadersTable">0</label><label class="lbldataLeadersTable">0</label><label class="lbldataLeadersTable">0</label>
      `);
        }
      } else {
        document.getElementsByClassName('lbldataLeadersTable')[document.getElementsByClassName('lbldataLeadersTable').length - 1].insertAdjacentHTML('afterend', `
    <label class="lbldataLeadersTable">0</label><label class="lbldataLeadersTable">0</label><label class="lbldataLeadersTable">0</label><label class="lbldataLeadersTable">0</label>
    `);
      }
    } else {
      document.getElementsByClassName('lbldataLeadersTable')[document.getElementsByClassName('lbldataLeadersTable').length - 1].insertAdjacentHTML('afterend', `
  <label class="lbldataLeadersTable">0</label><label class="lbldataLeadersTable">0</label><label class="lbldataLeadersTable">0</label><label class="lbldataLeadersTable">0</label>
  `);
    }
  }
}
function onNavPanelJTsettings(event) {
  onSaveTournamentDate();
  Array.from(document.getElementsByClassName('pagesJT')).forEach(element => element.style.display = 'none');
  document.getElementById('navPanelJT').style.display = 'none';
  document.getElementById('settingsPageJT').style.display = 'grid';
  document.getElementById('pageNameJT').innerText = 'Settings';
  document.getElementById('pageNextJT').removeEventListener('click', () => {
    firstTarget++; lastTarget++;
    dataLeadersTableDraw(document.getElementById('sesondLeaderSwitch').value - 1, document.getElementById('roundLeaderSwitch').value - 1, document.getElementById('approachLeaderSwitch').value);
  });
  document.getElementById('pagePrevJT').removeEventListener('click', () => {
    firstTarget--; lastTarget--;
    dataLeadersTableDraw(document.getElementById('sesondLeaderSwitch').value - 1, document.getElementById('roundLeaderSwitch').value - 1, document.getElementById('approachLeaderSwitch').value);
  });
}
function onSaveTournamentDate() {
  if ((document.getElementById('dataPageJT').style.display !== 'none') && (Array.from(document.getElementsByClassName('dataBlockJT'))[0] !== undefined)) {
    if (firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo == undefined) {
      let UsersInfo = {};
      firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1] = { UsersInfo };
    }
    if (firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid] == undefined) {
      firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid] = {};
    }
    for (let i = 0; i < firebaseTournaments[num].targets.length; i++) {
      let arr = [];
      for (let j = 0; j < Array.from(document.getElementsByClassName('dataBlockJT'))[i].getElementsByClassName('dataJTinputs').length; j++) {
        if (firebaseTournaments[num].targets[i].type == 'clicker') {
          arr.push(Number(Array.from(document.getElementsByClassName('dataBlockJT'))[i].getElementsByClassName('btnDataCounter')[j].innerText));
        } else if (firebaseTournaments[num].targets[i].type == 'slider') {
          arr.push(Number(Array.from(document.getElementsByClassName('dataBlockJT'))[i].getElementsByClassName('labelCounter')[j].innerText));
        }
        else {
          arr.push(Number(Array.from(document.getElementsByClassName('dataBlockJT'))[i].getElementsByClassName('dataJTinputs')[j].value));
        }
      }
      firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid][firebaseTournaments[num].targets[i].name] = arr;
    }
    db.collection("global_tournaments").doc(`${docName}`).set(firebaseTournaments[num]).then(() => {
      console.log('Saved');
    });
  }
}
function onResetTournamentDate() {
  Array.from(document.getElementsByClassName('dataJTinputs')).forEach((element) => {
    if (element.tagName == 'BUTTON') {
      element.getElementsByClassName('btnDataCounter')[0].innerText = '';
    } else {
      if (element.type == 'range') {
        element.value = 0;
        Array.from(element.parentElement.parentElement.getElementsByClassName('labelCounter')).forEach((element2) => {
          element2.innerText = 0;
        });
      } else {
        element.value = '';
      }
    }
  });
}
function onButulaMenuBtns(event){
  document.getElementById('mainMenuHeader').style.display = 'none'
  document.getElementById('defaultHeader').style.display = 'grid'
  document.getElementById('butulaMenu').style.display = 'none'
  document.getElementById('displayingBlock').style.display = 'block'
  while (document.getElementById('content').firstElementChild) {
    document.getElementById('content').firstElementChild.remove()
  }
  document.getElementById('content').appendChild(document.getElementById(event.target.getAttribute('page')).content.cloneNode(true));
  switch (event.target.getAttribute('page')) {
    case 'tournamentCreatePanel':
      document.getElementById('tournamentCreateBtn').addEventListener('click', onTournamentCreateBtn);
      Array.from(document.getElementsByClassName('tournamentTargetsInputAtCreatePanel'))[0].addEventListener('input', ontournamentTargetsInputAtCreatePanel);
      break;
    case 'favoritesPage':
      showTournaments();
      break;  
  }
}
function onButulaTournmanetMenuBtns(event){
    document.getElementById('displayingBlock').style.display = 'block'
    document.getElementById('butulaTournamentMenu').style.display = 'none'
    document.getElementById(event.target.getAttribute('page')).style.display = 'grid'
    Array.from(document.getElementsByClassName('pagesJT')).forEach(element => element.style.display = 'none')
    switch (event.target.getAttribute('page')) {
      case 'mainPageJT':
        onNavPanelJTmain()
        break;
      case 'leadersPageJT':
        onNavPanelJTleaders()
        break;
      case 'statisticsPageJT':
        onNavPanelJTstatistics()
        break;
      case 'dataPageJT':
        onNavPanelJTdata()
        break;
    }
}
function onProfile(event) {
  document.getElementById('profilePageBlock').style.display = 'grid';
}

function oncrossIcononCreate(event) {
  // while (tournamentCreatePanel.firstChild) {
  //   tournamentCreatePanel.removeChild(tournamentCreatePanel.firstChild);
  // }
  // tournamentCreatePanel.style.display = 'none';
  mainBlock.style.display = 'grid';
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
      var user = result.user;
      onSignIn();
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(errorCode, errorMessage);
      var email = error.email;
      var credential = error.credential;
    });
}
let uid;
let User;

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    uid = user.uid;
    email = user.email;
    User = firebase.auth().currentUser;
    onSignIn();
  } else {
    onSignOut();
  }
});
