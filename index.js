
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
const createTournament = document.getElementById('createTournament');
const footerPanel = document.getElementById('footerPanel');
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
const prewPageTurn = document.getElementById('prewPageTurn');
const nextPagTurn = document.getElementById('nextPagTurn');
const tournamentCreatePanel = document.getElementById('tournamentCreatePanel');
let numsOfTrnsOnthePage = document.getElementById('numsOfTrnsOnthePage')
let numsOfTrnsOnthePageOpt = Array.from(document.getElementsByClassName('numsOfTrnsOnthePageOpt'))
let tournamentsPanel
let typeMaxBtns;
let secondMpage;
let firstMpage;
let pageNumLbl;
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
let password, email, width, height, temporaryElementsTI, isMobileVersion;
// numsOfTrnsOnthePage.addEventListener('change', onchangeTrnNumsOnPage)
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
prewPageTurn.addEventListener('click', onPrewPageTurn);
nextPagTurn.addEventListener('click', onNextPagTurn);
crossIcon.addEventListener('click', onCrossTournamentInfo);

// let counterDegGradBg = 0;
// setInterval(() =>{
//   counterDegGradBg++
//   root.style.setProperty('--gradient-deg-bg', `${counterDegGradBg}deg`)
// }, 40)

width = window.innerWidth;
height = window.innerHeight;
function onresize() {
  setTimeout(function () {
    if ((width != window.innerWidth) || (height !== window.innerHeight)) {
      width = window.innerWidth;
      height = window.innerHeight;
      checkAspectRatio();
      // console.log('resized');
    }
  }, 300);
}

window.addEventListener("resize", onresize);

blackout.style.display = 'none';
dataEnterSqr.forEach(element => element.style.display = 'block');

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
  dataEnterSqr.forEach(element => element.style.display = 'none');
  body.style["background-color"] = "white";
  // body.style.background = "none"
}

function showMainPage() {
  mainBlock.style.display = 'grid';
  getFirebaseData();
}
let login;
function getNickName() {
  login = email;
  login = email[0].toUpperCase() + email.slice(1, email.indexOf('@')).toLowerCase();
  if (login.length > 10) { login = login.slice(0, login.length); }
  nickForLabel.innerHTML = login;
}
function onSignIn() {
  document.getElementById('eMail').innerText = email
  getNickName();
  password = null;
  clearMenuOfAuth();
  showMainPage();
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
let firebaseTornemnts = [];
let from = 0;
function getFirebaseData() {
  firebaseTornemnts = [];
  blackout.style.display = 'block';
  db.collection("global_tournaments").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      firebaseTornemnts.push(doc.data());
      // console.log(firebaseTornemnts);
    });
  }).then(() => onbtnHome());
}
let tournamentsOnThePage = 5
function onbtnHome(event) {
  blackout.style.display = 'none';
  root.style.setProperty('--tournamnets-on-the-page', `${tournamentsOnThePage}`);
  root.style.setProperty('--like-btn-size-scale', '0.25')
  let k = 0;
  clearMenu();
  btnHome.removeEventListener('click', onbtnHome);
  // btnHome.style["margin-top"] = '20%';
      btnHome.classList.add("moveDown");
  btnHome.style.color = 'black';
  btnMobHome.parentElement.style["background-color"] = 'rgba(158, 132, 94, 0.4)';
  contentBlock.insertAdjacentHTML('beforeend', ` <div id="tournamentsPanel"></div>
  <div id="footerPanel"><button id="createTournament">
  <img src="img/createTrn.png" alt="create" id="createTrnIcon"></button>
  <button id="prewPageTurn"><img src="img/prewPageIcon.png" alt="prewPage" id="prewPageIcon"></button>
  <label for="pageNumLbl" id="pageNumLbl">1</label>
  <button id="nextPagTurn"><img src="img/nextPageIcon.png" alt="nextPage" id="nextPageIcon"></button>
  <select name="numsOfTrnsOnthePage" id="numsOfTrnsOnthePage">
  <option class="numsOfTrnsOnthePageOpt" value="3">3</option>
  <option class="numsOfTrnsOnthePageOpt" value="5">5</option>
  <option class="numsOfTrnsOnthePageOpt" value="7">7</option>
  <option class="numsOfTrnsOnthePageOpt" value="9">9</option>
  <option class="numsOfTrnsOnthePageOpt" selected="selected" value=""></option>
                </select></div>`);
                let numsOfTrnsOnthePageOpt = Array.from(document.getElementsByClassName('numsOfTrnsOnthePageOpt'))
                let numsOfTrnsOnthePage = document.getElementById('numsOfTrnsOnthePage')
                numsOfTrnsOnthePage.addEventListener("change", onchangeTrnNumsOnPage)
  pageNumLbl = document.getElementById('pageNumLbl');
  tournamentsPanel = document.getElementById('tournamentsPanel');
  const prewPageTurn = document.getElementById('prewPageTurn');
  const nextPagTurn = document.getElementById('nextPagTurn');
  const createTournament = document.getElementById('createTournament');
  prewPageTurn.addEventListener('click', onPrewPageTurn);
  nextPagTurn.addEventListener('click', onNextPagTurn);
  createTournament.addEventListener('click', onCreateTournament);
  k = firebaseTornemnts.length;
  // console.log(k);

  if (k > tournamentsOnThePage) {
    k = tournamentsOnThePage;
  }
  showTournaments(from);

  tournament = Array.from(document.getElementsByClassName('tournament'));
  tournamentNameBlock = document.getElementById('tournamentNameBlock');
  tournamentDescriptionBlock = document.getElementById('tournamentDescriptionBlock');
  tournamentTypeBlock = document.getElementById('tournamentTypeBlock');
  tournamentMaxMembersBlock = document.getElementById('tournamentMaxMembersBlock');
  tournamentName = Array.from(document.getElementsByClassName('tournamentName'));
  tournamentDescription = Array.from(document.getElementsByClassName('tournamentDescriptionBlock'));
  tournamentType = Array.from(document.getElementsByClassName('tournamentTypeBlock'));
  tournamentMaxMembers = Array.from(document.getElementsByClassName('tournamentMaxMembers'));
  onTournamentInfoBlock.forEach(element => element.addEventListener('click', onTournament));
  checkAspectRatio();
}
let to = 0;
function showTournaments(from) {
  pageNumLbl.innerHTML = Math.floor(to / tournamentsOnThePage);
  if (from < 0) return from = 0;
  to = from + tournamentsOnThePage;
  if (to > firebaseTornemnts.length) { to = firebaseTornemnts.length; }
  // console.log(from, to);
  tournamentsPanel = document.getElementById('tournamentsPanel');
  while (tournamentsPanel.firstChild) {
    tournamentsPanel.removeChild(tournamentsPanel.firstChild);
  }
  for (let i = from; i < to; i++) {
    tournamentsPanel.insertAdjacentHTML('beforeend', `<div class="tournament" ><div class="onTournamentInfoBlock">               
          <div id="tournamentNameBlock"><label class="tournamentName" for="tournamentName">${firebaseTornemnts[i].name}</label></div>
          <div id="tournamentDescriptionBlock"><label class="tournamentDescription" for="tournamentDescription">${firebaseTornemnts[i].description}</label></div>
          <div id="tournamentTypeBlock"><label class="tournamentType" for="tournamentType">type: ${firebaseTornemnts[i].type}</label></div>
          <div id="tournamentMaxMembersBlock"><label class="tournamentMaxMembers" for="tournamentMaxMembers">${firebaseTornemnts[i].curr_members} / ${firebaseTornemnts[i].max_members}</label></div>
          </div><div class="heart-like-button tournamentLikeBtn"></div></div>`);
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
  pageNumLbl.innerHTML = Math.ceil(to / tournamentsOnThePage);
  // console.log();
  checkAspectRatio();
}
function onTournament(event) {
  mainBlock.style.display = 'none';
  tournamentInfo.style.display = 'grid';
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
    tournamentBtnsInfo.style.display = 'inline-flex';
  }
  tournamentAdminLabelInfo.innerText = isMobileVersion ? 'ADMIN' : 'ADMINISTRATOR'
  if (firebaseTornemnts[num].targets[0] !== "" && firebaseTornemnts[num].targets.length !== 0) {
    for (let i = 0; i < firebaseTornemnts[num].targets.length; i++) {
      tournamentsTargetInfo.insertAdjacentHTML('beforeend', `<li class="temporaryElementsTI tournamentGoalsInfo">${firebaseTornemnts[num].targets[i]}</li>`);
    }
  } else { tournamentsTargetInfo.insertAdjacentHTML('beforeend', `<li style="list-style-type:none;" class="temporaryElementsTI tournamentGoalsInfo">no goals :(</li>`); }
  tournamentAdminLabelInfo.insertAdjacentHTML('afterend',
    `<li class="temporaryElementsTI" id="id="tournamentAdminInfo"><img src="img/icons8-test-account-48.png" alt="userIcon" class="userIconTI"> ${firebaseTornemnts[num].administrator}</li>`);
  let membersNums;
  firebaseTornemnts[num].participants.length > 5 ? membersNums = 5 : membersNums = firebaseTornemnts[num].participants.length;
  if (firebaseTornemnts[num].participants[0] !== "" && firebaseTornemnts[num].participants.length !== 0) {
    for (let i = 0; i < membersNums; i++) {
      tournamentMembersLabelInfo.insertAdjacentHTML('afterend', `<li class="temporaryElementsTI tournamentParticipantsInfo">
      <img src="img/icons8-test-account-48.png" alt="userIcon" class="userIconTI"
       style="margin-left: 20px; margin-top: 5px;"> ${firebaseTornemnts[num].participants[i]}<br>`);
    }
  } else { tournamentMembersLabelInfo.insertAdjacentHTML('afterend', `<li style="list-style-type:none;" class="temporaryElementsTI tournamentGoalsInfo">no participants :(</li>`); }
  if (firebaseTornemnts[num].requirements[0] !== "" && firebaseTornemnts[num].requirements.length !== 0) {
    for (let i = 0; i < firebaseTornemnts[num].requirements.length; i++) {
      tournamentReqLabelInfo.insertAdjacentHTML('afterend', `<li class="temporaryElementsTI tournamentReqsInfo">${firebaseTornemnts[num].requirements[i]}</li>`);
    }
  } else { tournamentReqLabelInfo.insertAdjacentHTML('afterend', `<li style="list-style-type:none;" class="temporaryElementsTI tournamentGoalsInfo">no requirements :(</li>`); }
  temporaryElementsTI = Array.from(document.getElementsByClassName('temporaryElementsTI'));
  checkAspectRatio();
}

function onCrossTournamentInfo(event) {
  mainBlock.style.display = 'grid';
  tournamentInfo.style.display = 'none';
  temporaryElementsTI.forEach(element => element.remove());
  if (button.classList.contains("liked")) {
    button.classList.remove("liked");
  }
  checkAspectRatio();
}
let canMakeNewTarg = true;
function ontournamentTargetsInputAtCreatePanel(event) {
  if (canMakeNewTarg) {
    tournamentTargetsInputAtCreatePanel[tournamentTargetsInputAtCreatePanel.length - 1].removeEventListener('input', ontournamentTargetsInputAtCreatePanel);
    tournamentTargetsInputAtCreatePanel[tournamentTargetsInputAtCreatePanel.length - 1].insertAdjacentHTML('afterend', ' <input type="text" class="trnCrtPanel tournamentTargetsInputAtCreatePanel"><br>');
    tournamentTargetsInputAtCreatePanel = Array.from(document.getElementsByClassName('tournamentTargetsInputAtCreatePanel'));
    trnCrtPanel = Array.from(document.getElementsByClassName('trnCrtPanel'));
    tournamentTargetsInputAtCreatePanel[tournamentTargetsInputAtCreatePanel.length - 1].addEventListener('input', ontournamentTargetsInputAtCreatePanel);
    checkAspectRatio();
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
    checkAspectRatio();
  }
  canMakeNewReq = (tournamentRequirementsInputAtCreatePanel.length == 1) || (tournamentRequirementsInputAtCreatePanel.length < 5) &&
    (tournamentRequirementsInputAtCreatePanel[tournamentRequirementsInputAtCreatePanel.length - 2].value !== "");
}
let trnTargets = [];
let trnRequirements = [];
let tournamentNameCP, MaxMembers, description;
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
    db.collection("global_tournaments").add({
      name: tournamentNameInputAtCreatePanel.value,
      targets: trnTargets,
      requirements: trnRequirements,
      description: tournamentDescriptionTextAreaAtCreatePanel.value,
      max_members: tournamentMaxMembersInputAtCreatePanel.value,
      type: trnType,
      curr_members: 1,
      administrator: login,
      participants: ""
    })
      .then((docRef) => {
        getFirebaseData();
        oncrossIcononCreate();
      })
      .catch((error) => {
        // console.error("Error adding document: ", error);
      });
  }
}

function newPageHome() {
  // k more tournaments we need to render
  // console.log(Math.ceil(k / tournamentsOnThePage) + ' more new page created')
}
function onbtnFavorites(event) {
  clearMenu();
  btnFavorites.classList.add("moveDown");
  btnFavorites.removeEventListener('click', onbtnFavorites);
  btnFavorites.style.color = 'black';
  btnMobFav.parentElement.style["background-color"] = 'rgba(158, 132, 94, 0.4)';

}
function onbtnData(event) {
  clearMenu();
  btnData.removeEventListener('click', onbtnData);
  btnData.classList.add("moveDown");
  btnData.style.color = 'black';
  btnMobData.parentElement.style["background-color"] = 'rgba(158, 132, 94, 0.4)';


}
function onbtnStatistics(event) {
  clearMenu();
  btnStatistics.removeEventListener('click', onbtnStatistics);
  btnStatistics.classList.add("moveDown");
  btnStatistics.style.color = 'black';
  btnMobStat.parentElement.style["background-color"] = 'rgba(158, 132, 94, 0.4)';

}
function onbtnAbout(event) {
  clearMenu();
  btnAbout.removeEventListener('click', onbtnAbout);
  btnAbout.classList.add("moveDown");
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
  prewPageTurn.removeEventListener('click', onPrewPageTurn);
  nextPagTurn.removeEventListener('click', onNextPagTurn);
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
  while (contentBlock.firstChild) {
    contentBlock.removeChild(contentBlock.firstChild);
  }

}
checkAspectRatio();
function checkAspectRatio() {
  if (width > 1100) {
    // NavPanelBtns.forEach(element => element.style.font = '32px "Fira Sans", sans-serif');
    profile["font-size"] = '24px';
    tournamentName.forEach(element => element.style["font-size"] = '28px');
    tournamentDescription.forEach(element => element.style["font-size"] = '18px');
    tournamentType.forEach(element => element.style["font-size"] = '16px');
    tournamentsTargetInfo.style["font-size"] = '24px';
    // tournamentMembersInfo.style.font = 'small-caps bold 20px/1 sans-serif';
    // tournamentAdminLabelInfo.style.font = 'small-caps bold 24px/1 sans-serif';
    // tournamentMembersLabelInfo.style.font = 'small-caps bold 24px/1 sans-serif';
    tournamentReqInfo.style["font-size"] = '20px';
    // tournamentReqLabelInfo.style.font = 'bold 24px/1 Tahoma, Verdana, sans-serif';
    // tournamentGoalsLabelInfo.style.font = 'bold 24px/1 Tahoma, Verdana, sans-serif';
  } else if (width > 600) {
    // NavPanelBtns.forEach(element => element.style.font = '24px "Fira Sans", sans-serif');
    profile["font-size"] = '18px';
    tournamentName.forEach(element => element.style["font-size"] = '28px');
    tournamentDescription.forEach(element => element.style["font-size"] = '18px');
    tournamentType.forEach(element => element.style["font-size"] = '16px');
    tournamentsTargetInfo.style["font-size"] = '20px';
    tournamentReqInfo.style["font-size"] = '20px';
    // tournamentMembersInfo.style.font = 'small-caps bold 20px/1 sans-serif';
    // tournamentAdminLabelInfo.style.font = 'small-caps bold 24px/1 sans-serif';
    // tournamentMembersLabelInfo.style.font = 'small-caps bold 24px/1 sans-serif';

  } else {
    tournamentName.forEach(element => element.style["font-size"] = '24px');
    tournamentDescription.forEach(element => element.style["font-size"] = '14px');
    tournamentType.forEach(element => element.style["font-size"] = '12px');
    // tournamentMembersInfo.style.font = 'small-caps bold 17px/1 sans-serif';
    // tournamentAdminLabelInfo.style.font = 'small-caps bold 20px/1 sans-serif';
    // tournamentMembersLabelInfo.style.font = 'small-caps bold 20px/1 sans-serif';
    tournamentsTargetInfo.style["font-size"] = '16px';
    tournamentReqInfo.style["font-size"] = '16px';
    // tournamentReqLabelInfo.style.font = 'bold 20px/1 Tahoma, Verdana, sans-serif';
    // tournamentGoalsLabelInfo.style.font = 'bold 20px/1 Tahoma, Verdana, sans-serif';
  }
}
isMobileVersion = width < 600;

function onCreateTournament(event) {
  tournamentCreatePanel.style.display = 'grid';
  mainBlock.style.display = 'none';
  tournamentCreatePanel.insertAdjacentHTML('beforeend', `
    <img src="img/crossIcon.svg" alt="cross" id="crossIcononCreate">
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
  checkAspectRatio();
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
  if (from > (firebaseTornemnts.length - tournamentsOnThePage - 1)) return;
  from = from + tournamentsOnThePage;
  showTournaments(from);
  // console.log('Next Page');
}
function oncrossIcononCreate(event) {
  while (tournamentCreatePanel.firstChild) {
    tournamentCreatePanel.removeChild(tournamentCreatePanel.firstChild);
  }
  tournamentCreatePanel.style.display = 'none';
  mainBlock.style.display = 'grid';
  checkAspectRatio();
}
function onchangeTrnNumsOnPage(event){
  tournamentsOnThePage = Number(this.value)

  onbtnHome()
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