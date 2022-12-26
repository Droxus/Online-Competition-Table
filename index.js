
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
document.getElementById('profileBtnMenu').addEventListener('click', onProfile);
document.getElementById('mailBtnMenu').addEventListener('click', showMail);
// createTournament.forEach(element => element.addEventListener('click', showCreateTournamentBlock));
// crossIcon.addEventListener('click', onCrossTournamentInfo);
// document.getElementById('btnLogout').addEventListener('click', onBtnSignOut);
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
document.getElementById('regBlock').style.display = 'none'
document.getElementById('butulaMenu').style.display = 'none'
document.getElementById('butulaTournamentMenu').style.display = 'none'
//  --- --- --- --- --- ---  Авторизация --- --- --- --- --- --- --- ---

function onNoaccLink(event) {
  isignIn.innerHTML = 'Sign Up';
  btnSignIn.innerHTML = 'Go next';
  noaccLink.innerHTML = 'Sign In';
  noaccLink.removeEventListener('click', onNoaccLink);
  noaccLink.addEventListener('click', onHasaccLink);
  btnSignIn.removeEventListener('click', onBtnSignIn);
  btnSignIn.addEventListener('click', onBtnSignUp);
}
onHasaccLink();
function onHasaccLink(event) {
  isignIn.innerHTML = 'Sign In';
  btnSignIn.innerHTML = 'Go next';
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
  checkUserMail()
  document.getElementById('regBlock').style.display = 'none';
  mainBlock.style.display = 'grid';
  blackout.style.display = 'none';
  document.getElementById('eMail').innerText = email;
  getNickName();

}
function onSignOut() {
  blackout.style.display = 'none';
  document.getElementById('regBlock').style.display = 'grid'
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
  document.getElementById('mainMenuHeader').style.display = 'grid'
  document.getElementById('defaultHeader').style.display = 'none'
  document.getElementById('midleBtnHeader').innerText = ''
  blackout.style.display = 'none';
  num = null; tournamentID = null
  document.getElementById('butulaBtn').innerText = 'Butula'
  document.getElementById('butulaMenu').style.display = 'none';
  while (document.getElementById('content').firstElementChild) {
    document.getElementById('content').firstElementChild.remove()
  }
  document.getElementById('content').appendChild(document.getElementById('homePage').content.cloneNode(true));

  showTournaments(firebaseTournaments.filter(e => e.type !== 'closed'));
}
function showTournaments(trnsToShow) {
  if (!trnsToShow){ trnsToShow = firebaseTournaments.filter(e => e.type !== 'closed') }
  for (let i = 0; i < trnsToShow.length; i++) {
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
  num = firebaseTournaments.findIndex(trn => trn.ID == tournamentID)
  docName = firebaseTournaments[num].name;
  if (firebaseTournaments[num].participants.findIndex(e => e.ID == uid) >= 0) return onTournamentJoin()
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
          participants: [{login: login, ID: uid, data: []}],
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
  let thisTrn = firebaseTournaments.find(e => e.ID == tournamentID)
  switch (thisTrn.type) {
    case 'opened':
       firebaseUser.push(tournamentID)
        db.collection("users_info").doc(uid).set({
          joined_tournaments: firebaseUser
        }).then(() => {
          db.collection("global_tournaments").doc(tournamentID).update({
            participants: firebase.firestore.FieldValue.arrayUnion({
              ID: uid,
              login: login,
              data: []
            }) 
          }).then(() => { onTournamentJoin(); getFirebaseUserJT(); getFirebaseData(); })
        })
      break;
    case 'invited':
      db.collection("users_info").doc(`${thisTrn.creator.ID}`).get().then((doc) => {
        let thisUserData = doc.data()
        if (thisUserData.mail == undefined){
          thisUserData.mail = []
        }
        thisUserData.mail.push({
          isRead: false,
          message: `${login} want to join your ${thisTrn.name} tournamnet`,
          trnName: thisTrn.name,
          trnID: thisTrn.ID,
          login: login,
          uid: uid,
          type: 'approve'
        })
        db.collection("users_info").doc(`${thisTrn.creator.ID}`).set(JSON.parse(JSON.stringify(thisUserData))).then(() => { onbtnHome() })
      })
      break;
    default:
      break;
  }
 
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
  document.getElementById('statisticsPageJT').style.display = 'grid';
  firebaseTournaments[num].targets.forEach(e => document.getElementById('targetSwitch').insertAdjacentHTML('beforeend', `<label class="targetsSwitchLbl">${e.name}</label>`))
  Array.from(document.getElementsByClassName('targetsSwitchLbl')).forEach(e => e.addEventListener('click', onChangeTargetOfGraphic))
  Array.from(document.getElementsByClassName('targetsSwitchLbl'))[1].click()
}
function onChangeTargetOfGraphic(event){
  Array.from(document.getElementsByClassName('targetsSwitchLbl')).forEach(e => e.style.background = 'transparent')
  event.target.style.background = '#7D8994'
  let allTargetsOfTrn = firebaseTournaments[num].targets.map(e => e.name)
  let targetIndex = allTargetsOfTrn.findIndex(e => e == event.target.innerText)
  let pointsForTarget = firebaseTournaments[num].targets[targetIndex].points
  let userIndex = firebaseTournaments[num].participants.findIndex(e => e.ID == uid)
  let data = []
  if (firebaseTournaments[num].participants[userIndex].data !== undefined){
    for (let i = 0; i < firebaseTournaments[num].participants[userIndex].data.length; i++){
      data[i] = {
        data: firebaseTournaments[num].participants[userIndex].data[i].data[event.target.innerText].reduce((acc, e) => acc + e * pointsForTarget),
        round: firebaseTournaments[num].participants[userIndex].data[i].round,
        season: firebaseTournaments[num].participants[userIndex].data[i].season
      }
    }
  }
  buildDiagramsGraphic(data)
}
function buildDiagramsGraphic(data){
  let label = 'round'
  while (document.getElementById('diagramsBlock').firstChild) {
    document.getElementById('diagramsBlock').removeChild(document.getElementById('diagramsBlock').firstChild);
  }
  if (label == 'round') { data = data.filter(e => e.season == seasonNumber) }
  let maxData = Math.max.apply(null, data.map(e => e.data))
  data.forEach((e, i) => {
    let ratioToMax = e.data / maxData * 80
    document.getElementById('diagramsBlock').insertAdjacentHTML('beforeend', `<div class="diagrams" style="height:calc(${ratioToMax || 0}% + 80px)"><label>${e.data}</label><div><label>${i+1}</label></div><div>`)
  })
}
let approachLength, valueInput, allTargets = [], joinedTrn = []
function onNavPanelJTdata() {
  allTargets = []
  if (document.getElementById('content').firstElementChild.getAttribute('id') == 'joinedTournament'){
    getTournamentTime();
    Array.from(document.getElementsByClassName('pagesJT')).forEach(element => element.style.display = 'none');
  }
  let dataBlock, localData = {}, localTargets = []
  joinedTrn = firebaseTournaments.filter(trn => trn.participants.findIndex(e => e.ID == uid) !== -1)
  if (document.getElementById('content').firstElementChild.getAttribute('id') == 'joinedTournament'){
    document.getElementById('dataPageJT').style.display = 'grid';
    dataBlock = document.getElementById('dataBlocksJT')
    allTargets = firebaseTournaments[num].targets
    allTargets.forEach(target => target.trnID = firebaseTournaments[num].ID)
    let thisLocalData = JSON.parse((localStorage.getItem(tournamentID)))
    if (thisLocalData.round == roundNumber && thisLocalData.season == seasonNumber){
      localData = thisLocalData
    }
    localTargets = allTargets
  } else {
    dataBlock = document.getElementById('dataPageBlock')
    joinedTrn.forEach(trn => trn.targets.forEach(target => target.trnID = trn.ID))
    joinedTrn.forEach(trn => allTargets.push(trn.targets))
    allTargets = allTargets.flat()
    joinedTrn.forEach(trn => {
      let thisLocalData = JSON.parse((localStorage.getItem(trn.ID)))
      if (thisLocalData !== undefined){
        console.log(thisLocalData)
        dateDiff = (Date.now() - trn.start)
        seasonNumber = Math.floor(dateDiff / 1000 / 60 / 60 / 24 / 30)
        dateDiff -= seasonNumber * 30 * 24 * 60 * 60 * 1000
        roundNumber = Math.floor(dateDiff / 1000 / 60 / 60 / 24)
        console.log(seasonNumber, roundNumber)
        if (thisLocalData.round == roundNumber && thisLocalData.season == seasonNumber){
          console.log(localData)
          if (localData.data == undefined){
            localData.data = {}
          }
          localData.data = Object.assign(localData.data, thisLocalData.data)
          console.log(localData)
          localTargets.push(trn.targets)
        }
      }
    })
    localTargets = localTargets.flat()
  }
  console.log(localTargets)
  console.log(dataBlock)
  while (dataBlock.firstElementChild) {
    dataBlock.firstElementChild.remove()
  }
  for (let i = 0; i < allTargets.length; i++) {
    let trnID = document.getElementById('content').firstElementChild.getAttribute('id') == 'joinedTournament' ? '' : allTargets[i].trnID
    dataBlock.insertAdjacentHTML('beforeend', `
    <div class="dataBlockJT" trnID="${trnID}">
    <label class="dataJTlabels" for="dataJTlabels">${allTargets[i].name}</label>
    <div class="inputsUnityDataJT">
    </div></div>`);
    approachLength = null, valueInput = null;
    if ((allTargets[i].approach !== '') && (allTargets[i].approach !== 0)) {
      approachLength = allTargets[i].approach;
    } else {
      approachLength = 1;
    }
    Array.from(document.getElementsByClassName('inputsUnityDataJT'))[i].insertAdjacentHTML('beforeend', `
      <div class="lblAndInputDataJT">
      <label class="nowApproach" for="nowApproach">1</label>
      <button class="btnsRowLeft"><</button>
      <button class="btnsRowRight">></button>
      </div>`);
    if (allTargets[i].type == 'slider') {
      for (let j = 0; j < approachLength; j++) {
        valueInput = 0;
        if (localData){
          if (localData.data !== undefined){
            if (localTargets.includes(allTargets[i])){
              if (localData.data[allTargets[i].name].length > 0){
                valueInput = localData.data[allTargets[i].name][j]
              }
            }
          }
        }
        Array.from(document.getElementsByClassName('inputsUnityDataJT'))[i].getElementsByClassName('btnsRowRight')[0].insertAdjacentHTML('beforebegin', `
          <input class="dataJTinputs" type="range" min="0" max="100" placeholder="try ${j + 1}" value="${valueInput}" style="display:${j < 1 ? 'block' : 'none'};">`);
        Array.from(document.getElementsByClassName('dataBlockJT'))[i].getElementsByClassName('lblAndInputDataJT')[0].insertAdjacentHTML('beforeend', `
          <label class="labelCounter" style="display:${j < 1 ? 'block' : 'none'};">${valueInput}</label>`);
        Array.from(Array.from(document.getElementsByClassName('inputsUnityDataJT'))[i].getElementsByTagName('input'))[j].addEventListener('input', (event) => { event.target.parentElement.getElementsByClassName('labelCounter')[j].innerText = event.target.value; });
      }
    } else if (allTargets[i].type == 'clicker') {
      for (let j = 0; j < approachLength; j++) {
        valueInput = '';
        if (localData){
          if (localData.data !== undefined){
            if (localTargets.includes(allTargets[i])){
              if (localData.data[allTargets[i].name].length > 0){
                valueInput = localData.data[allTargets[i].name][j]
              }
            }
          }
        }
        Array.from(document.getElementsByClassName('inputsUnityDataJT'))[i].getElementsByClassName('btnsRowRight')[0].insertAdjacentHTML('beforebegin', `
          <button class="dataJTinputs"  placeholder="try ${j + 1}" style="display:${j < 1 ? 'flex' : 'none'};">
          <div class="btnDataMinus">-</div><label class="btnDataCounter">${valueInput}</label><div class="btnDataPlus">+</div></button>`);
        Array.from(Array.from(document.getElementsByClassName('inputsUnityDataJT'))[i].getElementsByClassName('btnDataMinus')).forEach(
          element => element.addEventListener('click', (event) => {
            event.target.parentElement.parentElement.getElementsByClassName('btnDataCounter')[j].innerText < 1 ?
              0 : event.target.parentElement.parentElement.getElementsByClassName('btnDataCounter')[j].innerText--;
              onDataInputsChange(event)
          }));
        Array.from(Array.from(document.getElementsByClassName('inputsUnityDataJT'))[i].getElementsByClassName('btnDataPlus')).forEach(
          element => element.addEventListener('click', (event) => { event.target.parentElement.parentElement.getElementsByClassName('btnDataCounter')[j].innerText++; onDataInputsChange(event)}));
      }
    } else {
      for (let j = 0; j < approachLength; j++) {
        valueInput = '';
        if (localData){
          if (localData.data !== undefined){
            if (localTargets.includes(allTargets[i])){
              if (localData.data[allTargets[i].name].length > 0){
                valueInput = localData.data[allTargets[i].name][j]
              }
            }
          }
        }
        Array.from(document.getElementsByClassName('inputsUnityDataJT'))[i].getElementsByClassName('btnsRowRight')[0].insertAdjacentHTML('beforebegin', `
          <input class="dataJTinputs" type="number" placeholder="try ${j + 1}" value="${valueInput}" style="display:${j < 1 ? 'block' : 'none'};">`);
      }
    }
  }
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
    let nowTarget = Array.from(document.getElementsByClassName('dataBlockJT')).findIndex(e => e == event.target.parentElement.parentElement.parentElement)
    if (nowAproach < 0) {
      nowAproach = 0;
    }
    approachLength = allTargets[Array.from(document.getElementsByClassName('dataBlockJT')).findIndex(e => e == dataJTinputs[nowAproach].parentElement.parentElement.parentElement)].approach
    let type;
    if (dataJTinputs[nowAproach] !== undefined) {
      type = dataJTinputs[nowAproach].type;
    }
    if (dataJTinputs.length < nowAproach + 2) {
      if (Number(approachLength) < 1 || Number(approachLength) > nowAproach+1){
        if (type == 'number') {
          let valueInput = ''
          if (localData.data[localTargets[nowTarget].name].length > nowAproach+1){
            valueInput = localData.data[localTargets[nowTarget].name][nowAproach+1]
          }
          dataJTinputs[nowAproach].insertAdjacentHTML('afterend', `<input class="dataJTinputs" type="${type}" value="${valueInput}" placeholder="try ${nowAproach + 2}"
        style="transform: translate(-150%, 0); width: 35%;"></input>`);
        } else
          if (type == 'submit') {
            let valueInput = ''
            if (localData.data[localTargets[nowTarget].name].length > nowAproach+1){
              valueInput = localData.data[localTargets[nowTarget].name][nowAproach+1]
            }
            dataJTinputs[nowAproach].insertAdjacentHTML('afterend', `
            <button class="dataJTinputs" style="display:flex;">
            <div class="btnDataMinus">-</div> <label class="btnDataCounter">${valueInput}</label> <div class="btnDataPlus">+</div></button>`);
            Array.from(dataJTinputs[nowAproach + 1].getElementsByClassName('btnDataMinus')).forEach(
              element => element.addEventListener('click', (event) => {
                event.target.parentElement.parentElement.parentElement.getElementsByClassName('btnDataCounter')[nowAproach].innerText < 1 ?
                  0 : event.target.parentElement.parentElement.parentElement.getElementsByClassName('btnDataCounter')[nowAproach].innerText--;
                  onDataInputsChange(event)
              }));
            Array.from(event.target.parentElement.parentElement.parentElement.getElementsByClassName('dataJTinputs')[nowAproach + 1].getElementsByClassName('btnDataPlus')).forEach(
              element => element.addEventListener('click', (event) => { event.target.parentElement.parentElement.parentElement.getElementsByClassName('btnDataCounter')[nowAproach].innerText++; onDataInputsChange(event) }));
          } else {
            let valueInput = 0
            if (localData.data[localTargets[nowTarget].name].length > nowAproach+1){
              valueInput = localData.data[localTargets[nowTarget].name][nowAproach+1]
            }
            dataJTinputs[nowAproach].insertAdjacentHTML('afterend', `<input class="dataJTinputs" value="${valueInput}" type="${type}" placeholder="try ${nowAproach + 2}"
          style="transform: translate(-150%, 0); width: 35%;"></input>`);
            event.target.parentElement.parentElement.parentElement.getElementsByClassName('lblAndInputDataJT')[0].insertAdjacentHTML('beforeend', `
            <label class="labelCounter" style="display: block;">${valueInput}</label>`);
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
  if (document.getElementById('content').firstElementChild.getAttribute('id') == 'joinedTournament'){
    getTournamentTime();
  }
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
  let data = {}, targetsOnSave
  targetsOnSave = allTargets
  console.log(targetsOnSave)
  if (document.getElementById('content').firstElementChild.getAttribute('id') !== 'joinedTournament'){
    tournamentID = event.target.tagName == 'DIV' ? event.target.parentElement.parentElement.parentElement.parentElement.getAttribute('trnid') : event.target.parentElement.parentElement.parentElement.getAttribute('trnid')
    targetsOnSave = targetsOnSave.filter(target => target.trnID == tournamentID)
    let thisTrn = firebaseTournaments.find(trn => trn.ID == tournamentID) 
    dateDiff = (Date.now() - thisTrn.start)
    seasonNumber = Math.floor(dateDiff / 1000 / 60 / 60 / 24 / 30)
    dateDiff -= seasonNumber * 30 * 24 * 60 * 60 * 1000
    roundNumber = Math.floor(dateDiff / 1000 / 60 / 60 / 24)
  }
  console.log(targetsOnSave)
  for (const target in targetsOnSave){
    if (targetsOnSave[target].type == "clicker"){
      // data[targetsOnSave[target].name] = Array.from(document.getElementsByClassName('dataBlockJT')[target].getElementsByClassName('btnDataCounter'))
      // .reduce((partialSum, e) => partialSum + Number(e.innerText) * targetsOnSave[target].points, 0)
      data[targetsOnSave[target].name] = Array.from(document.getElementsByClassName('dataBlockJT')[target].getElementsByClassName('btnDataCounter')).map(e => Number(e.innerText))
    } else {
      // data[targetsOnSave[target].name] = Array.from(document.getElementsByClassName('dataBlockJT')[target].getElementsByClassName('dataJTinputs'))
      // .reduce((partialSum, e) => partialSum + e.value * targetsOnSave[target].points, 0)
      data[targetsOnSave[target].name] = Array.from(document.getElementsByClassName('dataBlockJT')[target].getElementsByClassName('dataJTinputs')).map(e => Number(e.value))
    }
  }
  let transaction = {
    season: seasonNumber,
    round: roundNumber,
    data: data
  }
  console.log('transaction: ' + transaction)
  localStorage.setItem(tournamentID, JSON.stringify(transaction));
  console.log(JSON.parse((localStorage.getItem(tournamentID))))
  document.getElementById('butulaBtn').innerText = 'Save'
}
function saveTournament(){
  num = firebaseTournaments.findIndex(trn => trn.ID == tournamentID)
  document.getElementById('butulaBtn').innerText = 'Butula'
  let localData = JSON.parse((localStorage.getItem(tournamentID)))
  db.collection("global_tournaments").doc(tournamentID).get().then((doc) => {
    if (doc.exists) {
      let userIndex = firebaseTournaments[num].participants.findIndex(e => e.ID == uid)
      firebaseTournaments[num] = doc.data()
      if (firebaseTournaments[num].participants[userIndex].data == undefined){
        firebaseTournaments[num].participants[userIndex].data = []
      }
      firebaseTournaments[num].participants[userIndex].data = firebaseTournaments[num].participants[userIndex].data.filter(e => e.season !== seasonNumber || e.round !== roundNumber)
      firebaseTournaments[num].participants[userIndex].data.push(localData)
      let thisSeasonData = firebaseTournaments[num].participants[userIndex].data.filter(e => e.season == seasonNumber)
      firebaseTournaments[num].participants[userIndex].points = 0
      for (const dataRound in thisSeasonData){
        for (const target in Object.keys(thisSeasonData[dataRound].data)){
          for (let i = 0; i < thisSeasonData[dataRound].data[firebaseTournaments[num].targets[target].name].length; i++){
            firebaseTournaments[num].participants[userIndex].points += (Number(thisSeasonData[dataRound].data[firebaseTournaments[num].targets[target].name][i]) || 0) * firebaseTournaments[num].targets[target].points
          }
        }
      }
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
function onButulaMenuBtns(){
  document.getElementById('mainMenuHeader').style.display = 'none'
  document.getElementById('defaultHeader').style.display = 'grid'
  document.getElementById('butulaMenu').style.display = 'none'
  while (document.getElementById('content').firstElementChild) {
    document.getElementById('content').firstElementChild.remove()
  }
  document.getElementById('content').appendChild(document.getElementById(this.getAttribute('page')).content.cloneNode(true));
  switch (this.getAttribute('page')) {
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
      break;
    case 'favoritesPage':
      showTournaments(firebaseTournaments.filter(trn => trn.participants.findIndex(e => e.ID == uid) >= 0));
      break;  
    case 'statisticPage':
      createdTrns = firebaseTournaments.filter(trn => trn.creator.ID == uid)
      createdTrns.forEach(trn => trn.targets.forEach(e => document.getElementById('targetSwitch').insertAdjacentHTML('beforeend', `<label trnID="${trn.ID}" class="targetsSwitchLbl">${e.name}</label>`)))
      Array.from(document.getElementsByClassName('targetsSwitchLbl')).forEach(e => e.addEventListener('click', onChangeTargetOfGraphicMaimPage))
      Array.from(document.getElementsByClassName('targetsSwitchLbl'))[1].click()
      break;
    case 'dataPage':
      onNavPanelJTdata()
    break;
  }
}
let createdTrns
function onChangeTargetOfGraphicMaimPage(event){
  Array.from(document.getElementsByClassName('targetsSwitchLbl')).forEach(e => e.style.background = 'transparent')
  event.target.style.background = '#7D8994'
  let thisTrn = createdTrns.find(trn => trn.ID == event.target.getAttribute('trnID'))
  let allTargetsOfTrn = thisTrn.targets.map(e => e.name)
  let targetIndex = allTargetsOfTrn.findIndex(e => e == event.target.innerText)
  let pointsForTarget = thisTrn.targets[targetIndex].points
  let userIndex = thisTrn.participants.findIndex(e => e.ID == uid)
  let data = []
  if (thisTrn.participants[userIndex].data !== undefined){
    for (let i = 0; i < thisTrn.participants[userIndex].data.length; i++){
      data[i] = {
        data: thisTrn.participants[userIndex].data[i].data[event.target.innerText].reduce((acc, e) => acc + e * pointsForTarget),
        round: thisTrn.participants[userIndex].data[i].round,
        season: thisTrn.participants[userIndex].data[i].season
      }
    }
  }
  seasonNumber = Math.floor((Date.now() - thisTrn.start) / 1000 / 60 / 60 / 24 / 30)
  buildDiagramsGraphic(data)
}
function onButulaTournmanetMenuBtns(){
    document.getElementById('butulaTournamentMenu').style.display = 'none'
    document.getElementById(this.getAttribute('page')).style.display = 'grid'
    Array.from(document.getElementsByClassName('pagesJT')).forEach(element => element.style.display = 'none')
    switch (this.getAttribute('page')) {
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
  while (document.getElementById('content').firstElementChild) {
    document.getElementById('content').firstElementChild.remove()
  }
  document.getElementById('content').appendChild(document.getElementById('profilePage').content.cloneNode(true));
  document.getElementById('mainMenuHeader').style.display = 'none'
  document.getElementById('defaultHeader').style.display = 'grid'
  document.getElementById('loginProfile').value = login
  document.getElementById('emailProfile').value = email
  Array.from(document.getElementsByClassName('profileBtns')).forEach(e => e.addEventListener('click', onProfileBtns))
}
function onProfileBtns(event){
  console.log(event.target.innerText)
  switch (event.target.innerText) {
    case 'Edit Profile':
      Array.from(document.getElementsByClassName('profileInputs')).forEach(e => e.style["pointer-events"] = 'visible')
      Array.from(document.getElementsByClassName('profileInputs')).forEach(e => e.style["box-shadow"] = '4px 2px 4px rgba(0, 0, 0, 0.25)')
      Array.from(document.getElementsByClassName('profileInputs')).forEach(e => e.style.background = 'rgba(255, 255, 255, 0.1)')
      event.target.innerText = 'Save Changes'
      break;
    case 'Created Tournaments':
      showCreatedTrns()
      break
    case 'Archive':
      showArchive()
      break;
    case 'Mail':
      showMail()
      break;  
    case 'Log Out':
      document.getElementById('onLogOutPage').style.display = 'flex'
      document.getElementById('yesAreUsureBlock').addEventListener('click', () => {document.getElementById('onLogOutPage').style.display = 'none'; onBtnSignOut()})
      document.getElementById('noAreUsureBlock').addEventListener('click', () => {document.getElementById('onLogOutPage').style.display = 'none'})
      break;
    case 'Save Changes':
      Array.from(document.getElementsByClassName('profileInputs')).forEach(e => e.style["pointer-events"] = 'none')
      Array.from(document.getElementsByClassName('profileInputs')).forEach(e => e.style["box-shadow"] = 'none')
      Array.from(document.getElementsByClassName('profileInputs')).forEach(e => e.style.background = 'none')
      event.target.innerText = 'Edit Profile'
      login = document.getElementById('loginProfile').value
      email = document.getElementById('emailProfile').value
      User.updateProfile({
        displayName: login
      })
      User.updateEmail(email).catch((error) => {});
      break; 
  }
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
let firebaseMail, userInfo
function checkUserMail(){
  db.collection("users_info").doc(`${uid}`).get().then((doc) => {
    userInfo = doc.data()
    firebaseMail = doc.data().mail
    if (doc.exists) {
      if (firebaseMail[0].message == 'Welcome In Butula'){
        firebaseMail.reverse()
      }
      if (firebaseMail.length < 0){
        firebaseMail[0] = {
          isRead: false,
          message: 'Welcome In Butula',
          type: 'text'
        }
      }
      let trnsOfUser = []
      firebaseUser.forEach(e => trnsOfUser.push(firebaseTournaments.filter(trn => trn.ID == e)[0]))
      if (trnsOfUser.length > 0){
        trnsOfUser.forEach(trn => {
          let thisSeasonNumber = Math.floor((Date.now() - trn.start) / 1000 / 60 / 60 / 24 / 30)
          let userData = trn.participants.find(e => e.ID == uid)
          if (userData.data !== undefined){
            if (userData.data.findIndex(e => e.season == thisSeasonNumber) < 0){
              let textsMail = firebaseMail.forEach(e => e.message)
              if (textsMail.findIndex(e => e == `Hey! New season number ${thisSeasonNumber+1} of ${trn.name} tournament starting right now!`) < 0){
                firebaseMail.push({
                  isRead: false,
                  message: `Hey! New season number ${thisSeasonNumber+1} of ${trn.name} tournament starting right now!`,
                  type: 'text'
                })
              }
            }
          } else {
            let textsMail = firebaseMail.map(e => e.message)
              if (textsMail.findIndex(e => e == `Hey! New season number ${thisSeasonNumber+1} of ${trn.name} tournament starting right now!`) < 0){
                firebaseMail.push({
                  isRead: false,
                  message: `Hey! New season number ${thisSeasonNumber+1} of ${trn.name} tournament starting right now!`,
                  type: 'text'
                })
              }
          }
        })
      }
      document.getElementById('numOfUnreadMsg').innerText = firebaseMail.filter(e => e.isRead == false).length < 1 ? '' : firebaseMail.filter(e => e.isRead == false).length
    }
  })
}
function showMail(){
  while (document.getElementById('content').firstElementChild) {
    document.getElementById('content').firstElementChild.remove()
  }
  document.getElementById('content').appendChild(document.getElementById('mail').content.cloneNode(true));
  document.getElementById('mainMenuHeader').style.display = 'none'
  document.getElementById('defaultHeader').style.display = 'grid'
  firebaseMail.forEach(msg => {
    if (msg.type == 'text'){
      document.getElementById('mailBlock').insertAdjacentHTML('beforeend', `<div class="message"><label>${msg.message}</label></div>`)
    } else {
      document.getElementById('mailBlock').insertAdjacentHTML('beforeend', `<div class="message"><label>${msg.message}</label><div><div class="chooseUserVerdict"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect width="32" height="32" fill="url(#approve)"/>
      <defs>
      <pattern id="approve" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlink:href="#image0_40_470" transform="scale(0.00581395)"/>
      </pattern>
      <image id="image0_40_470" width="172" height="172" xlink:href="data:image/png;base64,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"/>
      </defs>
      </svg>
      <label>Approve</label></div><div class="chooseUserVerdict"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect width="32" height="32" fill="url(#cancel)"/>
      <defs>
      <pattern id="cancel" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlink:href="#image0_40_472" transform="scale(0.00581395)"/>
      </pattern>
      <image id="image0_40_472" width="172" height="172" xlink:href="data:image/png;base64,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"/>
      </defs>
      </svg>
      <label>Cancel</label></div></div></div>`)
    }
  })
  Array.from(document.getElementsByClassName('chooseUserVerdict')).forEach(e => e.addEventListener('click', onChooseUserVerdict))
  firebaseMail.forEach(e => e.isRead = true)
  userInfo.mail = firebaseMail
  document.getElementById('numOfUnreadMsg').innerText = firebaseMail.filter(e => e.isRead == false).length < 1 ? '' : firebaseMail.filter(e => e.isRead == false).length
  db.collection("users_info").doc(`${uid}`).set(userInfo)
}
function onChooseUserVerdict(){
  let indexOfMsg = Array.from(document.getElementsByClassName('message')).findIndex(e => e == this.parentElement.parentElement)
  if (this.getElementsByTagName('label')[0].innerText == 'Approve'){
    db.collection("users_info").doc(`${firebaseMail[indexOfMsg].uid}`).get().then((doc) => {
      let thisUserData = doc.data()
      thisUserData.joined_tournaments.push(`${firebaseMail[indexOfMsg].trnID}`)
      if (thisUserData.mail == undefined){
        thisUserData.mail = []
      }
      thisUserData.mail.push({
        isRead: false,
        message: `You have been accepted to the ${firebaseMail[indexOfMsg].trnName} tournament`,
        type: 'text'
      })
      db.collection("users_info").doc(`${firebaseMail[indexOfMsg].uid}`).set(JSON.parse(JSON.stringify(thisUserData))).then(() => {
        db.collection("global_tournaments").doc(`${firebaseMail[indexOfMsg].trnID}`).update({
          participants: firebase.firestore.FieldValue.arrayUnion({
            ID: firebaseMail[indexOfMsg].uid,
            login: firebaseMail[indexOfMsg].login,
            data: []
          }) 
        }).then(() => {
          document.getElementById('numOfUnreadMsg').innerText = firebaseMail.filter(e => e.isRead == false).length < 1 ? '' : firebaseMail.filter(e => e.isRead == false).length
          firebaseMail.splice(indexOfMsg, 1)
          console.log(firebaseMail)
          userInfo.mail = firebaseMail
          db.collection("users_info").doc(`${uid}`).set(userInfo)
          Array.from(document.getElementsByClassName('message'))[indexOfMsg].remove()
         })
      })
  })
  } else {
    db.collection("users_info").doc(`${firebaseMail[indexOfMsg].uid}`).get().then((doc) => {
      let thisUserData = doc.data()
      thisUserData.mail.push({
        isRead: false,
        message: `You dont't have been accepted to the ${firebaseMail[indexOfMsg].trnName} tournament`,
        type: 'text'
      })
      db.collection("users_info").doc(`${firebaseMail[indexOfMsg].uid}`).set(JSON.parse(JSON.stringify(thisUserData)))
    })
  document.getElementById('numOfUnreadMsg').innerText = firebaseMail.filter(e => e.isRead == false).length < 1 ? '' : firebaseMail.filter(e => e.isRead == false).length
  firebaseMail.splice(indexOfMsg, 1)
  console.log(firebaseMail)
  userInfo.mail = firebaseMail
  db.collection("users_info").doc(`${uid}`).set(userInfo)
  Array.from(document.getElementsByClassName('message'))[indexOfMsg].remove()
  
  }
}
function showArchive(){
  while (document.getElementById('content').firstElementChild) {
    document.getElementById('content').firstElementChild.remove()
  }
  document.getElementById('content').appendChild(document.getElementById('archive').content.cloneNode(true));
  document.getElementById('mainMenuHeader').style.display = 'none'
  document.getElementById('defaultHeader').style.display = 'grid'
  let trnsOfUser = []
  firebaseUser.forEach(e => trnsOfUser.push(firebaseTournaments.filter(trn => trn.ID == e)[0]))
  let allSeasonsNum = trnsOfUser.map(e => Math.floor((Date.now() - e.start) / 1000 / 60 / 60 / 24 / 30))
  let maxSeason = Math.max.apply(null, allSeasonsNum)
  for (let i = 0; i < maxSeason+1; i++){
    trnsOfUser.forEach(trn => {
      let usersPoints = []
      trn.participants.forEach(user => {
        usersPoints.push({
          ID: user.ID,
          login: user.login,
          points: 0
        })
        if (user.data !== undefined){
          let userData = user.data.filter(e => e.season == i)
          userData.forEach(round => {
            for (let j = 0; j < Object.values(round.data).length; j++){
              usersPoints[usersPoints.length-1].points += Object.values(round.data)[j].reduce((accumulator, currentValue) => {accumulator + currentValue}) * trn.targets.find(e => e.name == Object.keys(round.data)[j]).points
            }
          }) 
        }
      })
      usersPoints.sort((a, b) => {
        if (a.points > b.points) { return -1 }
        if (a.points < b.points) { return 1 }
        return 0
      })
      let place = Number(usersPoints.findIndex(e => e.ID == uid)+1)
      switch (place) {
        case 1:
          place = place + 'st'
          break;
        case 2:
          place = place + 'nd'
          break;
        case 3:
          place = place + 'rd'
          break;
        default:
        place = place + 'th'
          break;
      }
      document.getElementById('archiveBlock').insertAdjacentHTML('afterbegin', `<div class="fileArchive" trnId="${trn.ID}" season="${i}"><label>Tournament ${trn.name}, season ${i+1} - ${place} place, ${usersPoints.find(e => e.ID == uid).points} points</label></div>`)
    })
  }
  Array.from(document.getElementsByClassName('fileArchive')).forEach(e => e.addEventListener('click', onFileArchive))
}
function onFileArchive(){
  document.getElementById('archiveBlock').style.display = 'none'
  document.getElementById('leaderAndStatOfArchive').style.display = 'grid'
  document.getElementById('midleBtnHeader').addEventListener('click', onMidleBtnHeader)
  num = firebaseTournaments.findIndex(e => e.ID == this.getAttribute('trnId'))
  seasonNumber = this.getAttribute('season')
  document.getElementById('midleBtnHeader').click()
} 
function onMidleBtnHeader(){
  console.log(document.getElementById('content').firstElementChild.getAttribute('id'))
  switch (document.getElementById('content').firstElementChild.getAttribute('id')) {
    case 'archiveBlock':
      document.getElementById('midleBtnHeader').innerText = document.getElementById('midleBtnHeader').innerText == 'leader board' ? 'statistics' : 'leader board'
      if (document.getElementById('midleBtnHeader').innerText == 'leader board'){
        document.getElementById('statisticsPageJT').style.display = 'none'
        document.getElementById('leadersPageJT').style.display = 'grid'
        while (document.getElementById('dataLeadersTable').firstElementChild){
          document.getElementById('dataLeadersTable').firstElementChild.remove()
        }
        let participantsSorted = firebaseTournaments[num].participants.sort((a, b) => {
          if (a.points > b.points) { return -1 }
          if (a.points < b.points) { return 1 }
          return 0 })
        for (const participant in participantsSorted){
          let bgColor = participantsSorted[participant].ID == uid ? '#737B8B' : 'transparent'
          document.getElementById('dataLeadersTable').insertAdjacentHTML('beforeend', `
          <div style="background:${bgColor};"><label>${Number(participant)+1}.</label><label>${participantsSorted[participant].login}</label><label>${Number(participantsSorted[participant].points) || 0}</label></div>
          `)
        }
      } else {
        document.getElementById('leadersPageJT').style.display = 'none'
        document.getElementById('statisticsPageJT').style.display = 'grid'
        while (document.getElementById('targetSwitch').firstElementChild){
          document.getElementById('targetSwitch').firstElementChild.remove()
        }
        firebaseTournaments[num].targets.forEach(e => document.getElementById('targetSwitch').insertAdjacentHTML('beforeend', `<label class="targetsSwitchLbl">${e.name}</label>`))
        Array.from(document.getElementsByClassName('targetsSwitchLbl')).forEach(e => e.addEventListener('click', onChangeTargetOfGraphic))
        Array.from(document.getElementsByClassName('targetsSwitchLbl'))[1].click()
      }
      break;
    // case value:
      
    //   break;
  }
}
function showCreatedTrns(){
  while (document.getElementById('content').firstElementChild) {
    document.getElementById('content').firstElementChild.remove()
  }
  document.getElementById('content').appendChild(document.getElementById('createdTrnsProfile').content.cloneNode(true));
  document.getElementById('mainMenuHeader').style.display = 'none'
  document.getElementById('defaultHeader').style.display = 'grid'
  let createdTrns = firebaseTournaments.filter(trn => trn.creator.ID == uid)
  showTournaments(createdTrns)
  Array.from(document.getElementsByClassName('tournament')).forEach(element => element.removeEventListener('click', onTournament));
  Array.from(document.getElementsByClassName('tournament')).forEach(element => element.addEventListener('click', onCreatedTournament));
}
function onCreatedTournament(){
  tournamentID = this.getAttribute('id')
  num = firebaseTournaments.findIndex(trn => trn.ID == tournamentID)
  docName = firebaseTournaments[num].name;
  while (document.getElementById('content').firstElementChild) {
    document.getElementById('content').firstElementChild.remove()
  }
  document.getElementById('content').appendChild(document.getElementById('tournamentCreatePanel').content.cloneNode(true));
  Array.from(document.getElementsByClassName('switchPageBtn')).forEach(e => e.addEventListener('click', onSwitchPageBtn))
    Array.from(document.getElementsByClassName('trnAccessBtn')).forEach(e => e.addEventListener('click', onTrnAccessBtn))
    document.getElementById('targetsBlock').appendChild(document.getElementById('targetCT').content.cloneNode(true));
    Array.from(document.getElementsByClassName('targetsName')).forEach(e => e.addEventListener('change', onTargetsName))
    document.getElementById('noAreUsureBlock').addEventListener('click', () => {
      document.getElementById('areUsureBlock').style.display = 'none'
    })
    document.getElementById('yesAreUsureBlock').addEventListener('click', onTournamentUpdateBtn)
    document.getElementById('goNextTC').addEventListener('click', onbtnHome)
    document.getElementById('trnNameInput').value = docName
    let thisType = Array.from(document.getElementsByClassName('trnAccessBtn')).find(e => e.innerText.toLowerCase() == firebaseTournaments[num].type)
    Array.from(document.getElementsByClassName('trnAccessBtn')).forEach(e => e.style.background = '#6F7C88')
    thisType.style.background = '#7D8994'
    firebaseTournaments[num].targets.forEach((target, index) => {
      document.getElementById('targetsBlock').appendChild(document.getElementById('targetCT').content.cloneNode(true))
      Array.from(document.getElementsByClassName('targetsName'))[index].value = target.name
      Array.from(document.getElementsByClassName('pointsOfTargetCT'))[index].value = target.points
      Array.from(document.getElementsByClassName('typeOfTargetCT'))[index].value = target.type
      Array.from(document.getElementsByClassName('amountOfTargetCT'))[index].value = target.approach
    })
    Array.from(document.getElementsByClassName('targetsName')).forEach(e => e.addEventListener('change', onTargetsName))
    document.getElementById('areUsureBlock').getElementsByTagName('label')[0].innerText = 'Are you sure you want to update this tournament?'
}
function onTournamentUpdateBtn(){
  console.log('Loading...')
  firebaseTournaments[num].targets = []
  for (const targetBlock in Array.from(document.getElementsByClassName('targetBlock'))){
    firebaseTournaments[num].targets.push({
      name: document.getElementsByClassName('targetsName')[targetBlock].value,
      approach: Math.abs(Math.floor(Number(document.getElementsByClassName('amountOfTargetCT')[targetBlock].value))),
      type: document.getElementsByClassName('typeOfTargetCT')[targetBlock].value,
      points: Math.max(Math.floor(Number(document.getElementsByClassName('pointsOfTargetCT')[targetBlock].value)), 1)
    })
  }
  firebaseTournaments[num].targets.pop()
  docName = document.getElementById('trnNameInput').value;
  firebaseTournaments[num].name = docName
  firebaseTournaments[num].type = (Array.from(document.getElementsByClassName('trnAccessBtn')).find(e => getComputedStyle(e).backgroundColor == 'rgb(125, 137, 148)').innerText).toLowerCase()
  db.collection("global_tournaments").doc(`${firebaseTournaments[num].ID}`).set(firebaseTournaments[num]).then(() => {
    document.getElementById('areUsureBlock').style.display = 'none'
    document.getElementById('trnCreatedBlock').style.display = 'flex'
  })
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
