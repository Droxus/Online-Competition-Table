
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
const tournamentsTargetInfo = document.getElementById('tournamentsTargetInfo');
const tournamentMembersInfo = document.getElementById('tournamentMembersInfo');
const tournamentBtnsInfo = document.getElementById('tournamentBtnsInfo');
const tournamentMembersLabelInfo = document.getElementById('tournamentMembersLabelInfo');
const tournamentAdminLabelInfo = document.getElementById('tournamentAdminLabelInfo');
const tournamentReqInfo = document.getElementById('tournamentReqInfo');
const tournamentAdminInfo = document.getElementById('tournamentAdminInfo');
const tournamentReqLabelInfo = document.getElementById('tournamentReqLabelInfo');
const tournamentLikeBtn = Array.from(document.getElementsByClassName('tournamentLikeBtn'));
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
// document.getElementById('btnLeaveTrn').addEventListener('click', onLeaveTrn);
// document.getElementById('btnNavJT').addEventListener('click', onBtnNavJT);
// document.getElementById('navPanelJTclose').addEventListener('click', onNavPanelJTclose);
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
  if (document.getElementById('butulaBtn').innerText == 'Save') return saveTournament()
  let butulaMenu = document.getElementById('content').firstElementChild.id == 'joinedTournament' ? 'butulaTournamentMenu' : 'butulaMenu'
  if (document.getElementById(butulaMenu).style.display == 'none'){
    document.getElementById(butulaMenu).style.display = 'flex'
  } else {
    document.getElementById(butulaMenu).style.display = 'none'
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
  db.collection("users_info").doc(uid).get().then((doc) => {
    if (doc.exists) {
      firebaseUser = doc.data().joined_tournaments;
    }
  })
}
function onbtnHome(event) {
  console.log('aaaaa')
  document.getElementById('mainMenuHeader').style.display = 'grid'
  document.getElementById('defaultHeader').style.display = 'none'
  blackout.style.display = 'none';
  num = null; tournamentID = null
  document.getElementById('butulaBtn').innerText = 'Butula'
  document.getElementById('butulaMenu').style.display = 'none';
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
    document.getElementsByClassName('tournamentsPanel')[0].insertAdjacentHTML('beforeend', `<div class="tournament" id="${trnsToShow[i].ID}">             
          <div id="tournamentNameBlock"><label class="tournamentName" for="tournamentName">${trnsToShow[i].name}</label></div>
          <textarea id="tournamentTargetsBlock" readonly rows="2">${trnsToShow[i].targets.map(e => e.name)}</textarea>
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
    if (firebaseTournaments[i].ID == tournamentID) {
      num = i; 
      break;
    }
  }
  console.log(tournamentID)
  console.log(firebaseTournaments[num].name)
  docName = this.firstElementChild.innerText;
  console.log(firebaseUser)
  for (let i = 0; i < firebaseUser.length; i++) {
    if (firebaseUser[i] == firebaseTournaments[num].ID) {
      console.log(firebaseTournaments[num].ID)
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
  document.getElementById('tournamentNameInfo').innerText = firebaseTournaments[num].name;
  document.getElementById('numsOfParticipants').innerText = firebaseTournaments[num].participants.length + ' participants';
  document.getElementById('targets').innerText = 'Targets: ' + firebaseTournaments[num].targets.map(e => e.name);
  document.getElementById('creator').innerText = 'Creator ' + firebaseTournaments[num].creator.login;
  document.getElementById('tournamentJoinInfo').addEventListener('click', onJTbtn);
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
  console.log('Loading...')
  let trnTargets = [];
  let targetBlocks = Array.from(document.getElementsByClassName('targetBlock'))
          for (const targetBlock in targetBlocks){
            trnTargets.push({
              name: document.getElementsByClassName('targetsName')[targetBlock].value,
              approach: Math.abs(Math.floor(Number(document.getElementsByClassName('amountOfTargetCT')[targetBlock].value))),
              type: document.getElementsByClassName('typeOfTargetCT')[targetBlock].value,
              points: Math.max(Math.floor(Number(document.getElementsByClassName('pointsOfTargetCT')[targetBlock].value)), 1)
            });
          }
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
        docName = document.getElementById('trnNameInput').value;
        let createdTrn = {
          ID: id,
          name: docName,
          targets: trnTargets,
          type: (Array.from(document.getElementsByClassName('trnAccessBtn')).find(e => getComputedStyle(e).backgroundColor == 'rgb(125, 137, 148)').innerText).toLowerCase(),
          creator: {
            login: login,
            ID: uid
          },
          participants: [{login: login, ID: uid}],
          start: Date.now()
        };
        console.log(createdTrn);
        firebaseUser.push(id);
        db.collection("global_tournaments").doc(`${id}`).set(createdTrn).then(() => {
          db.collection("users_info").doc(uid).set({
            joined_tournaments: firebaseUser
          }).then(() => {
            document.getElementById('areUsureBlock').style.display = 'none'
            document.getElementById('trnCreatedBlock').style.display = 'flex'
          })
        })
}
function onJTbtn(event) {
  firebaseUser.push(tournamentID)
  db.collection("users_info").doc(uid).set({
    joined_tournaments: firebaseUser
  }).then(() => {
    db.collection("global_tournaments").doc(tournamentID).update({
      participants: firebase.firestore.FieldValue.arrayUnion({
        ID: uid,
        login: login,
      }) 
    }).then(() => { onTournamentJoin(); getFirebaseUserJT(); getFirebaseData(); })
  })
}
function onTournamentJoin(event) {
  // tournamentInfo.style.display = 'none';
  // document.getElementById('joinedTournament').style.display = 'grid';
  document.getElementById('mainMenuHeader').style.display = 'none'
  document.getElementById('defaultHeader').style.display = 'grid'
  while (document.getElementById('content').firstElementChild) {
    document.getElementById('content').firstElementChild.remove()
  }
  document.getElementById('content').appendChild(document.getElementById('joinedTournamentBlock').content.cloneNode(true));
  document.getElementById('nameJT').innerText = docName;
  onNavPanelJTmain();
}
function onCrossIconJT(event) {
  clearInterval(timerToNextRound);
  document.getElementById('joinedTournament').style.display = 'none';
  document.getElementById('navPanelJT').style.display = 'none';
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
    joined_tournaments: firebase.firestore.FieldValue.arrayRemove(tournamentID)
  }).then(() => {
    db.collection("global_tournaments").doc(tournamentID).update({
      participants: firebase.firestore.FieldValue.arrayRemove(uid)
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
  Array.from(document.getElementsByClassName('pagesJT')).forEach(element => element.style.display = 'none');
  document.getElementById('mainPageJT').style.display = 'flex';
  getTournamentTime();
  document.getElementById('roundNumJT').innerText = `Round ${roundNumber+1}`;
  document.getElementById('seasonNumJT').innerText = `Season ${seasonNumber+1}`;
}
function getTournamentTime() {
  nowDate = Date.now();
  dateDiff = nowDate - firebaseTournaments[num].start
  seasonNumber = Math.floor(dateDiff / 1000 / 60 / 60 / 24 / 30)
  dateDiff -= seasonNumber * 30 * 24 * 60 * 60 * 1000
  roundNumber = Math.floor(dateDiff / 1000 / 60 / 60 / 24)
  dateDiff -= roundNumber * 24 * 60 * 60 * 1000
  hoursToNextRound = 23 - Math.floor(dateDiff / 1000 / 60 / 60)
  dateDiff -= (23 - hoursToNextRound) * 60 * 60 * 1000
  minutesToNextRound = 59 - Math.floor(dateDiff / 1000 / 60)
  dateDiff -= (59 - minutesToNextRound) * 60 * 1000
  secondsToNextRound = 59 -  Math.floor(dateDiff / 1000)
  document.getElementById('numsOfParticipants').innerText = `${firebaseTournaments[num].participants.length} participants`
  document.getElementById('toNextSeason').innerText = `${29-roundNumber}d ${hoursToNextRound}h`
  document.getElementById('numOfMyPoints').innerText = `You have ${Number(firebaseTournaments[num].participants.filter(e => e.ID == uid)[0].points) || 0} points`
  document.getElementById('creator').innerText = `Creator ${firebaseTournaments[num].creator.login}`
  Array.from(document.getElementsByClassName('timerDataJT')).forEach(element => {
    element.innerText = `${String(hoursToNextRound).padStart(2, '0')}:${String(minutesToNextRound).padStart(2, '0')}:${String(secondsToNextRound).padStart(2, '0')}`;
  });
  clearInterval(timerToNextRound);
  timerToNextRound = setInterval(() => {
    secondsToNextRound--
    minutesToNextRound = secondsToNextRound < 0 ? minutesToNextRound-1 : minutesToNextRound
    secondsToNextRound = secondsToNextRound < 0 ? 59 : secondsToNextRound
    hoursToNextRound = minutesToNextRound < 0 ? hoursToNextRound-1 : hoursToNextRound
    minutesToNextRound = minutesToNextRound < 0 ? 59 : minutesToNextRound
    if (hoursToNextRound < 0)  { onNavPanelJTmain() }
    Array.from(document.getElementsByClassName('timerDataJT')).forEach(element => {
      element.innerText = `${String(hoursToNextRound).padStart(2, '0')}:${String(minutesToNextRound).padStart(2, '0')}:${String(secondsToNextRound).padStart(2, '0')}`;
    });
  }, 1000);
}
function onNavPanelJTstatistics(event) {
  Array.from(document.getElementsByClassName('pagesJT')).forEach(element => element.style.display = 'none');
  // document.getElementById('navPanelJT').style.display = 'none';
  document.getElementById('statisticsPageJT').style.display = 'grid';
}
let approachLength, valueInput;
function onNavPanelJTdata(event) {
  getTournamentTime();
  Array.from(document.getElementsByClassName('pagesJT')).forEach(element => element.style.display = 'none');
  // document.getElementById('navPanelJT').style.display = 'none';
  document.getElementById('dataPageJT').style.display = 'grid';
  while (document.getElementById('dataBlocksJT').firstChild) {
    document.getElementById('dataBlocksJT').removeChild(document.getElementById('dataBlocksJT').firstChild);
  }
  for (let i = 0; i < firebaseTournaments[num].targets.length; i++) {
    document.getElementById('dataBlocksJT').insertAdjacentHTML('beforeend', `
    <div class="dataBlockJT">
    <label class="dataJTlabels" for="dataJTlabels">${firebaseTournaments[num].targets[i].name}</label>
    <div class="inputsUnityDataJT">
    </div></div>`);
    approachLength = null, valueInput = null;
    if ((firebaseTournaments[num].targets[i].approach !== '') && (firebaseTournaments[num].targets[i].approach !== 0)) {
      approachLength = firebaseTournaments[num].targets[i].approach;
    } else {
      approachLength = 1;
    }
    Array.from(document.getElementsByClassName('inputsUnityDataJT'))[i].insertAdjacentHTML('beforeend', `
      <div class="lblAndInputDataJT">
      <label class="nowApproach" for="nowApproach">1</label>
      <button class="btnsRowLeft"><</button>
      <button class="btnsRowRight">></button>
      </div>`);
    if (firebaseTournaments[num].targets[i].type == 'slider') {
      for (let j = 0; j < approachLength; j++) {
        valueInput = '';
        // if (firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo !== undefined) {
        //   if ((firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid] !== undefined)
        //     && (firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid][firebaseTournaments[num].targets[i].name][j] !== 0) &&
        //     (firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid][firebaseTournaments[num].targets[i].name][j] !== '') &&
        //     (firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid][firebaseTournaments[num].targets[i].name][j] !== undefined)) {
        //     valueInput = firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid][firebaseTournaments[num].targets[i].name][j];
        //   } else { valueInput = 0; }
        // } else { valueInput = 0; }
        Array.from(document.getElementsByClassName('inputsUnityDataJT'))[i].getElementsByClassName('btnsRowRight')[0].insertAdjacentHTML('beforebegin', `
          <input class="dataJTinputs" type="range" min="0" max="100" placeholder="try ${j + 1}" value="${valueInput}" style="display:${j < 1 ? 'block' : 'none'};">`);
        Array.from(document.getElementsByClassName('dataBlockJT'))[i].getElementsByClassName('lblAndInputDataJT')[0].insertAdjacentHTML('beforeend', `
          <label class="labelCounter" style="display:${j < 1 ? 'block' : 'none'};">0</label>`);
        Array.from(Array.from(document.getElementsByClassName('inputsUnityDataJT'))[i].getElementsByTagName('input'))[j].addEventListener('input', (event) => { event.target.parentElement.getElementsByClassName('labelCounter')[j].innerText = event.target.value; });
      }
    } else if (firebaseTournaments[num].targets[i].type == 'clicker') {
      for (let j = 0; j < approachLength; j++) {
        valueInput = '';
        // if (firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo !== undefined) {
        //   if ((firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid] !== undefined)
        //     && (firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid][firebaseTournaments[num].targets[i].name][j] !== 0) &&
        //     (firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid][firebaseTournaments[num].targets[i].name][j] !== '') &&
        //     (firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid][firebaseTournaments[num].targets[i].name][j] !== undefined)) {
        //     valueInput = firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid][firebaseTournaments[num].targets[i].name][j];
        //   }
        // } else { valueInput = ''; }
        Array.from(document.getElementsByClassName('inputsUnityDataJT'))[i].getElementsByClassName('btnsRowRight')[0].insertAdjacentHTML('beforebegin', `
          <button class="dataJTinputs"  placeholder="try ${j + 1}" style="display:${j < 1 ? 'flex' : 'none'};">
          <div class="btnDataMinus">-</div><label class="btnDataCounter">${valueInput}</label><div class="btnDataPlus">+</div></button>`);
        Array.from(Array.from(document.getElementsByClassName('inputsUnityDataJT'))[i].getElementsByClassName('btnDataMinus')).forEach(
          element => element.addEventListener('click', (event) => {
            event.target.parentElement.parentElement.getElementsByClassName('btnDataCounter')[j].innerText < 1 ?
              0 : event.target.parentElement.parentElement.getElementsByClassName('btnDataCounter')[j].innerText--;
              onDataInputsChange()
          }));
        Array.from(Array.from(document.getElementsByClassName('inputsUnityDataJT'))[i].getElementsByClassName('btnDataPlus')).forEach(
          element => element.addEventListener('click', (event) => { event.target.parentElement.parentElement.getElementsByClassName('btnDataCounter')[j].innerText++; onDataInputsChange()}));
      }
    } else {
      for (let j = 0; j < approachLength; j++) {
        valueInput = '';
        // if (firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo !== undefined) {
          // if (firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid] !== undefined) {
          //   if (((firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid][firebaseTournaments[num].targets[i].name][j] !== undefined &&
          //     (firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid][firebaseTournaments[num].targets[i].name][j] !== 0)) &&
          //     firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid][firebaseTournaments[num].targets[i].name][j] !== '')) {
          //     valueInput = firebaseTournaments[num].season[seasonNumber - 1].round[Math.floor(roundNumber) - 1].UsersInfo[uid][firebaseTournaments[num].targets[i].name][j];
          //   }
          // }
        // } else { valueInput = ''; }
        Array.from(document.getElementsByClassName('inputsUnityDataJT'))[i].getElementsByClassName('btnsRowRight')[0].insertAdjacentHTML('beforebegin', `
          <input class="dataJTinputs" type="number" placeholder="try ${j + 1}" value="${valueInput}" style="display:${j < 1 ? 'block' : 'none'};">`);
      }
    }
  }
  // Array.from(document.getElementsByClassName('dataJTlabels')).forEach(element => element.addEventListener('click', (event) => {
  //   let valueInput;
  //   let targetName = event.target.innerText;
  //   document.getElementById('blackout').insertAdjacentHTML('afterbegin', `
  //   <div id="allApproachesOfThisTarget">
  //   <label id="thisTargetName">${targetName}</label>
  //   <img src="img/crossIcon.svg" alt="crossApproachesPanel" id="crossApproachesPanel" width="50px">
  //   <div id="thisApproaches">
  //   </div></div>
  //   `);
  //   if (event.target.parentElement.getElementsByClassName('dataJTinputs')[0].type == 'submit') {
  //     for (let i = 0; i < event.target.parentElement.getElementsByClassName('dataJTinputs').length; i++) {
  //       valueInput = event.target.parentElement.getElementsByClassName('dataJTinputs')[i].getElementsByClassName('btnDataCounter')[0].innerText;
  //       document.getElementById('thisApproaches').insertAdjacentHTML('beforeend', `
  //       <button class="inputsAproachesPanel" style="display:flex;">
  //       <div class="btnDataMinus">-</div><label class="btnDataCounter">${valueInput}</label><div class="btnDataPlus">+</div></button>
  //       `);
  //     }
  //     Array.from(document.getElementById('thisApproaches').getElementsByClassName('btnDataMinus')).forEach(
  //       element => element.addEventListener('click', (event) => {
  //         event.target.parentElement.getElementsByClassName('btnDataCounter')[0].innerText < 1 ?
  //           0 : event.target.parentElement.getElementsByClassName('btnDataCounter')[0].innerText--;
  //           onDataInputsChange()
  //       }));
  //     Array.from(document.getElementById('thisApproaches').getElementsByClassName('btnDataPlus')).forEach(
  //       element => element.addEventListener('click', (event) => { event.target.parentElement.getElementsByClassName('btnDataCounter')[0].innerText++; }));
  //   } else if (event.target.parentElement.getElementsByClassName('dataJTinputs')[0].type == 'range') {
  //     for (let i = 0; i < event.target.parentElement.getElementsByClassName('dataJTinputs').length; i++) {
  //       valueInput = event.target.parentElement.getElementsByClassName('dataJTinputs')[i].value;
  //       document.getElementById('thisApproaches').insertAdjacentHTML('beforeend', `
  //       <div style="align-self: center;justify-self: center; width: 45%; height="60px">
  //       <label class="labelCounterAP">${valueInput}</label>
  //       <input class="inputsAproachesPanel" min="0" max="100" type="range" placeholder="try ${i + 1}" value="${valueInput}" style="width=100%">
  //       </div>
  //       `);
  //     }
  //     Array.from(document.getElementsByClassName('inputsAproachesPanel')).forEach(element => element.addEventListener('input', (event2) => { event2.target.parentElement.getElementsByClassName('labelCounterAP')[0].innerText = event2.target.value; }));
  //   } else {
  //     for (let i = 0; i < event.target.parentElement.getElementsByClassName('dataJTinputs').length; i++) {
  //       valueInput = event.target.parentElement.getElementsByClassName('dataJTinputs')[i].value;
  //       document.getElementById('thisApproaches').insertAdjacentHTML('beforeend', `
  //       <input class="inputsAproachesPanel" type="number" placeholder="try ${i + 1}" value="${valueInput}">
  //       `);
  //     }
  //   }

  //   // document.getElementById('blackout').style.display = 'grid';
  //   document.getElementById('crossApproachesPanel').addEventListener('click', (event2) => {
  //     if (event.target.parentElement.getElementsByClassName('dataJTinputs')[0].type == 'submit') {
  //       for (let i = 0; i < event.target.parentElement.getElementsByClassName('dataJTinputs').length; i++) {
  //         event.target.parentElement.getElementsByClassName('btnDataCounter')[i].innerText = event2.target.parentElement.parentElement.getElementsByClassName('btnDataCounter')[i].innerText;
  //       }
  //     } else if (event.target.parentElement.getElementsByClassName('dataJTinputs')[0].type == 'range') {
  //       for (let i = 0; i < event.target.parentElement.getElementsByClassName('dataJTinputs').length; i++) {
  //         event.target.parentElement.getElementsByClassName('dataJTinputs')[i].value = document.getElementsByClassName('labelCounterAP')[i].innerText;
  //         event.target.parentElement.getElementsByClassName('labelCounter')[i].innerText = document.getElementsByClassName('labelCounterAP')[i].innerText;
  //       }
  //     } else {
  //       for (let i = 0; i < event.target.parentElement.getElementsByClassName('dataJTinputs').length; i++) {
  //         event.target.parentElement.getElementsByClassName('dataJTinputs')[i].value = document.getElementsByClassName('inputsAproachesPanel')[i].value;
  //       }
  //     }
  //     document.getElementById('allApproachesOfThisTarget').remove();
  //     document.getElementById('blackout').style.display = 'none';
  //   });
  // }));
  Array.from(document.getElementsByClassName('btnsRowLeft')).forEach(element => element.addEventListener('click', (event) => {
    let dataJTinputs = Array.from(event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs'))
    nowAproach = dataJTinputs.findIndex((element) => {
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
        dataJTinputs[nowAproach].classList.remove('moveFromRightDateInput');
        dataJTinputs[nowAproach].classList.remove('moveFromLeftDateInput');
        dataJTinputs[nowAproach].classList.remove('moveRightDateInput');
        dataJTinputs[nowAproach].classList.remove('moveLeftDateInput');
        dataJTinputs[nowAproach].classList.add('moveLeftDateInput');
        if (dataJTinputs[nowAproach - 1].tagName == 'BUTTON') {
          dataJTinputs[nowAproach - 1].style.display = 'flex';
        } else {
          dataJTinputs[nowAproach - 1].style.display = 'block';
        }
        if (dataJTinputs[nowAproach].type == 'range') {
          event.target.parentElement.parentElement.getElementsByClassName('labelCounter')[nowAproach - 1].style.display = 'block';
          event.target.parentElement.parentElement.getElementsByClassName('labelCounter')[nowAproach].style.display = 'none';
        }
        dataJTinputs[nowAproach - 1].classList.remove('moveFromRightDateInput');
        dataJTinputs[nowAproach - 1].classList.remove('moveFromLeftDateInput');
        dataJTinputs[nowAproach - 1].classList.remove('moveRightDateInput');
        dataJTinputs[nowAproach - 1].classList.remove('moveLeftDateInput');
        dataJTinputs[nowAproach - 1].classList.add('moveFromRightDateInput');
        dataJTinputs[nowAproach - 1].removeEventListener('animationend', onAnimationInputMoveRight);
        dataJTinputs[nowAproach - 1].removeEventListener('animationend', onAnimationInputMoveLeft);
        dataJTinputs[nowAproach].removeEventListener('animationend', onAnimationInputMoveRight);
        dataJTinputs[nowAproach].removeEventListener('animationend', onAnimationInputMoveLeft);
        dataJTinputs[nowAproach].addEventListener('animationend', onAnimationInputMoveLeft);
      }
  }));
  Array.from(document.getElementsByClassName('btnsRowRight')).forEach(element => element.addEventListener('click', (event) => {
    let dataJTinputs = event.target.parentElement.parentElement.getElementsByClassName('dataJTinputs')
    nowAproach = Array.from(dataJTinputs).findIndex((element) => {
      if (element.style.display !== 'none') {
        return element;
      }
    });
    if (nowAproach < 0) {
      nowAproach = 0;
    }
    approachLength = firebaseTournaments[num].targets[Array.from(document.getElementsByClassName('dataBlockJT')).findIndex(e => e == dataJTinputs[nowAproach].parentElement.parentElement.parentElement)].approach
    let type;
    if (dataJTinputs[nowAproach] !== undefined) {
      type = dataJTinputs[nowAproach].type;
    }
    if (dataJTinputs.length < nowAproach + 2) {
      if (Number(approachLength) < 1 || Number(approachLength) > nowAproach+1){
        if (type == 'number') {
          dataJTinputs[nowAproach].insertAdjacentHTML('afterend', `<input class="dataJTinputs" type="${type}" placeholder="try ${nowAproach + 2}"
        style="transform: translate(-150%, 0); width: 35%;"></input>`);
        } else
          if (type == 'submit') {
            dataJTinputs[nowAproach].insertAdjacentHTML('afterend', `
            <button class="dataJTinputs" style="display:flex;">
            <div class="btnDataMinus">-</div> <label class="btnDataCounter"></label> <div class="btnDataPlus">+</div></button>`);
            Array.from(dataJTinputs[nowAproach + 1].getElementsByClassName('btnDataMinus')).forEach(
              element => element.addEventListener('click', (event) => {
                event.target.parentElement.parentElement.parentElement.getElementsByClassName('btnDataCounter')[nowAproach].innerText < 1 ?
                  0 : event.target.parentElement.parentElement.parentElement.getElementsByClassName('btnDataCounter')[nowAproach].innerText--;
                  onDataInputsChange()
              }));
            Array.from(event.target.parentElement.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach + 1].getElementsByClassName('btnDataPlus')).forEach(
              element => element.addEventListener('click', (event) => { event.target.parentElement.parentElement.parentElement.getElementsByClassName('btnDataCounter')[nowAproach].innerText++; onDataInputsChange() }));
          } else {
            dataJTinputs[nowAproach].insertAdjacentHTML('afterend', `<input class="dataJTinputs" type="${type}" placeholder="try ${nowAproach + 2}"
          style="transform: translate(-150%, 0); width: 35%;"></input>`);
            event.target.parentElement.parentElement.parentElement.getElementsByClassName('lblAndInputDataJT')[0].insertAdjacentHTML('beforeend', `
            <label class="labelCounter" style="display: block;">0</label>`);
            dataJTinputs[nowAproach + 1].addEventListener('input', (event) => { event.target.parentElement.getElementsByClassName('labelCounter')[nowAproach].innerText = event.target.value; });
          }
      }
    }
    console.log(Array.from(dataJTinputs).findIndex(e => e == dataJTinputs[nowAproach]))
      if (dataJTinputs.length - nowAproach-1 > 0){
        event.target.parentElement.parentElement.getElementsByClassName('nowApproach')[0].innerText = (nowAproach + 2);
        dataJTinputs[nowAproach].classList.remove('moveFromRightDateInput');
        dataJTinputs[nowAproach].classList.remove('moveFromLeftDateInput');
        dataJTinputs[nowAproach].classList.remove('moveLeftDateInput');
        dataJTinputs[nowAproach].classList.remove('moveRightDateInput');
        dataJTinputs[nowAproach].classList.add('moveRightDateInput');
        dataJTinputs[nowAproach + 1].classList.remove('moveFromRightDateInput');
        dataJTinputs[nowAproach + 1].classList.remove('moveFromLeftDateInput');
        dataJTinputs[nowAproach + 1].classList.remove('moveLeftDateInput');
        dataJTinputs[nowAproach + 1].classList.remove('moveRightDateInput');
        dataJTinputs[nowAproach + 1].classList.add('moveFromLeftDateInput');
        if (dataJTinputs[nowAproach + 1].tagName == 'BUTTON') {
          dataJTinputs[nowAproach + 1].style.display = 'flex';
        } else {
          dataJTinputs[nowAproach + 1].style.display = 'block';
        }
        if (dataJTinputs[nowAproach + 1].type == 'range') {
          event.target.parentElement.parentElement.getElementsByClassName('labelCounter')[nowAproach].style.display = 'none';
          event.target.parentElement.parentElement.getElementsByClassName('labelCounter')[nowAproach + 1].style.display = 'block';
        }
        dataJTinputs[nowAproach + 1].removeEventListener('animationend', onAnimationInputMoveRight);
        dataJTinputs[nowAproach + 1].removeEventListener('animationend', onAnimationInputMoveLeft);
        dataJTinputs[nowAproach].removeEventListener('animationend', onAnimationInputMoveRight);
        dataJTinputs[nowAproach].removeEventListener('animationend', onAnimationInputMoveLeft);
        dataJTinputs[nowAproach].addEventListener('animationend', onAnimationInputMoveRight);
        Array.from(document.getElementsByClassName('dataJTinputs')).forEach(e => e.addEventListener('change', onDataInputsChange))
    }
  }));
  Array.from(document.getElementsByClassName('dataJTinputs')).forEach(e => e.addEventListener('change', onDataInputsChange))
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
function onDataInputsChange(event){
  let data = {}
  for (const target in firebaseTournaments[num].targets){
    if (firebaseTournaments[num].targets[target].type == "clicker"){
      data[firebaseTournaments[num].targets[target].name] = Array.from(document.getElementsByClassName('dataBlockJT')[target].getElementsByClassName('btnDataCounter'))
      .reduce((partialSum, e) => partialSum + Number(e.innerText) * firebaseTournaments[num].targets[target].points, 0)
    } else {
      data[firebaseTournaments[num].targets[target].name] = Array.from(document.getElementsByClassName('dataBlockJT')[target].getElementsByClassName('dataJTinputs'))
      .reduce((partialSum, e) => partialSum + e.value * firebaseTournaments[num].targets[target].points, 0)
    }
  }
  let transaction = {
    season: seasonNumber,
    round: roundNumber,
    data: data
  }
  localStorage.setItem(tournamentID, JSON.stringify(transaction));
  console.log(JSON.parse((localStorage.getItem(tournamentID))))
  document.getElementById('butulaBtn').innerText = 'Save'
}
function saveTournament(){
  document.getElementById('butulaBtn').innerText = 'Butula'
  db.collection("global_tournaments").doc(tournamentID).get().then((doc) => {
    if (doc.exists) {
      firebaseTournaments[num] = doc.data()
      firebaseTournaments[num].participants[firebaseTournaments[num].participants.findIndex(e => e.ID == uid)].data = JSON.parse((localStorage.getItem(tournamentID)))
      db.collection("global_tournaments").doc(tournamentID).set(firebaseTournaments[num]).then(() => {
        console.log('Saved');
      });
    } else {
      console.log('error')
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
});
}
let timerToNextRound;
function onNavPanelJTleaders(event) {
  document.getElementById('leadersPageJT').style.display = 'grid'
  while (document.getElementById('dataLeadersTable').firstElementChild){
    document.getElementById('dataLeadersTable').firstElementChild.remove()
  }
  let participantsSorted = firebaseTournaments[num].participants.sort((a, b) => {
    if (a.points > b.points) {
      return -1;
    }
    if (a.points < b.points) {
      return 1;
    }
    return 0;
  })
  for (const participant in participantsSorted){
    let bgColor = participantsSorted[participant].ID == uid ? '#737B8B' : 'transparent'
    document.getElementById('dataLeadersTable').insertAdjacentHTML('beforeend', `
    <div style="background:${bgColor};"><label>${Number(participant)+1}.</label><label>${participantsSorted[participant].login}</label><label>${Number(participantsSorted[participant].points) || 0}</label></div>
    `)
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
  while (document.getElementById('content').firstElementChild) {
    document.getElementById('content').firstElementChild.remove()
  }
  document.getElementById('content').appendChild(document.getElementById(event.target.getAttribute('page')).content.cloneNode(true));
  switch (event.target.getAttribute('page')) {
    case 'tournamentCreatePanel':
      Array.from(document.getElementsByClassName('switchPageBtn')).forEach(e => e.addEventListener('click', onSwitchPageBtn))
      Array.from(document.getElementsByClassName('trnAccessBtn')).forEach(e => e.addEventListener('click', onTrnAccessBtn))
      document.getElementById('targetsBlock').appendChild(document.getElementById('targetCT').content.cloneNode(true));
      Array.from(document.getElementsByClassName('targetsName')).forEach(e => e.addEventListener('change', onTargetsName))
      document.getElementById('noAreUsureBlock').addEventListener('click', () => {
        document.getElementById('areUsureBlock').style.display = 'none'
      })
      document.getElementById('yesAreUsureBlock').addEventListener('click', onTournamentCreateBtn)
      document.getElementById('goNextTC').addEventListener('click', onbtnHome)
      // document.getElementById('tournamentCreateBtn').addEventListener('click', onTournamentCreateBtn);
      // Array.from(document.getElementsByClassName('tournamentTargetsInputAtCreatePanel'))[0].addEventListener('input', ontournamentTargetsInputAtCreatePanel);
      break;
    case 'favoritesPage':
      showTournaments();
      break;  
  }
}
function onButulaTournmanetMenuBtns(event){
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
function onSwitchPageBtn(event){
  let nextPageDiff = event.target.innerText == 'Go next' ? 1 : -1
  let nowPageIndex = Array.from(document.getElementsByClassName('trnCreatePages')).findIndex(e => e.style.display !== 'none')
  if (!Array.from(document.getElementsByClassName('trnCreatePages'))[nowPageIndex+nextPageDiff]){
    if (nextPageDiff == 1) return document.getElementById('areUsureBlock').style.display = 'flex'
  } else {
    Array.from(document.getElementsByClassName('trnCreatePages'))[nowPageIndex].style.display = 'none'
    Array.from(document.getElementsByClassName('trnCreatePages'))[nowPageIndex+nextPageDiff].style.display = 'grid'
  }
}
function onTrnAccessBtn(event){
  Array.from(document.getElementsByClassName('trnAccessBtn')).forEach(e => e.style.background = '#6F7C88')
  event.target.style.background = '#7D8994'
}
function onTargetsName(event){
  let targetBlock = Array.from(event.target.parentElement.parentElement.getElementsByClassName('targetBlock'))
  let indexOfThisTarget = targetBlock.findIndex(e => e == event.target.parentElement)
  console.log(indexOfThisTarget)
  if (targetBlock.length - indexOfThisTarget < 2){
    document.getElementById('targetsBlock').appendChild(document.getElementById('targetCT').content.cloneNode(true));
  }
  Array.from(document.getElementsByClassName('targetsName')).forEach(e => e.addEventListener('change', onTargetsName))
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
