import data from '../constants/data';
import copiedtext from '../elements/Social';
const level = document.getElementById('level');
var usedtime = 0;
var finish = false;
var played;

function setUsedTime() {
  usedtime++;
  console.log(usedtime);
}
var i = 0;
function nextTheme() {
  const todaytheme = document.getElementById('todaytheme');

  var currentDate = new Date();
  var seconds = currentDate.getSeconds();
  var minutes = currentDate.getMinutes();
  var hours = currentDate.getHours();
  var targethour = 24 - (hours - 4);
  var targetminutes = 59 - minutes;
  var targetseconds = 59 - seconds;
  if (targethour === 0 && targetminutes === 0 && targetseconds === 0) {
    todaytheme.innerHTML = data.themes[i];
  } else {
    if (targethour < 10) {
      targethour = '0' + targethour;
    }
    if (targetminutes < 10) {
      targetminutes = '0' + targetminutes;
    }
    if (targetseconds < 10) {
      targetseconds = '0' + targetseconds;
    }
    todaytheme.innerHTML =
      targethour + ':' + targetminutes + ':' + targetseconds;
  }
}
function done() {
  finish = true;
}
function copyFocus() {
  const copied = document.getElementById('copied');
  copied.addEventListener('focus', copyResult());
}
function copyResult() {
  const copied = document.getElementById('copied');
  copied.addEventListener('focus', console.log(''));
  copied.classList.remove('hide');
  console.log(copiedtext);
  copiedtext.select();
  copiedtext.setSelectionRange(0, 1);
  navigator.clipboard.writeText(copiedtext.value);
}
function hideLevels() {
  const listlevels = document.getElementById('listlevels');
  listlevels.classList.add('hide');
}
function setLevelEasy() {
  const selectedeasy = document.getElementById('selecteasy');
  selectedeasy.classList.add('selected');
  const selectedmedium = document.getElementById('selectmedium');
  selectedmedium.classList.remove('selected');
  const selectedhard = document.getElementById('selecthard');
  selectedhard.classList.remove('selected');

  const level = document.getElementById('level');
  level.innerHTML = 'Easy';
  var cdata = document.getElementById('cdata');
  cdata.innerHTML = "03'00''";
  var cd = document.getElementById('cd');
  cd.innerHTML = 180;

  const buttonplay = document.getElementById('buttonplay');
  buttonplay.classList.remove('disabled');
}
function setLevelMedium() {
  const selectedmedium = document.getElementById('selectmedium');
  selectedmedium.classList.add('selected');
  const selectedeasy = document.getElementById('selecteasy');
  selectedeasy.classList.remove('selected');
  const selectedhard = document.getElementById('selecthard');
  selectedhard.classList.remove('selected');

  const level = document.getElementById('level');
  level.innerHTML = 'Medium';
  var cdata = document.getElementById('cdata');
  cdata.innerHTML = "01'00''";
  var cd = document.getElementById('cd');
  cd.innerHTML = 60;

  const buttonplay = document.getElementById('buttonplay');
  buttonplay.classList.remove('disabled');
}
function setLevelHard() {
  const selectedhard = document.getElementById('selecthard');
  selectedhard.classList.add('selected');
  const selectedeasy = document.getElementById('selecteasy');
  selectedeasy.classList.remove('selected');
  const selectedmedium = document.getElementById('selectmedium');
  selectedmedium.classList.remove('selected');

  const level = document.getElementById('level');
  level.innerHTML = 'Hard';
  var cdata = document.getElementById('cdata');
  cdata.innerHTML = "00'30''";
  var cd = document.getElementById('cd');
  cd.innerHTML = 30;

  const buttonplay = document.getElementById('buttonplay');
  buttonplay.classList.remove('disabled');
}
function startCount() {
  hideLevels();
  var cd = document.getElementById('cd');
  var timelevel = cd.innerHTML;
  const level = document.getElementById('level');
  level.classList.remove('hide');
  var cdata = document.getElementById('cdata');
  cdata.classList.remove('hide');
  const palette = document.getElementById('palette');
  palette.classList.remove('hide');

  const principalcountdown = setInterval(cdgeneral, 1000);
  var countdowngeneral = 3;
  var word = 'HOLA';
  function cdgeneral() {
    if (countdowngeneral === 0) {
      const countdowngeneral = document.getElementById('countdowngeneral');
      var cd = document.getElementById('cd');
      var timelevel = cd.innerHTML;
      clearInterval(principalcountdown);

      cdata.classList.add('hide');
      cd.innerHTML = cdata.innerHTML;
      cd.classList.remove('hide');
      const levels = document.getElementById('levels');
      levels.classList.add('hide');
      countdowngeneral.classList.add('hide');
      const buttonplay = document.getElementById('buttonplay');
      buttonplay.classList.add('hide');
      const buttondone = document.getElementById('buttondone');
      buttondone.classList.remove('hide');
      const todaytheme = document.getElementById('todaytheme');
      todaytheme.innerHTML = data.themes[0];
      const gamecountdown = setInterval(cdgame, 1000);
      function cdgame() {
        if (timelevel === 0 || finish === true) {
          clearInterval(gamecountdown);
          const countdowngeneral = document.getElementById('countdowngeneral');
          countdowngeneral.classList.add('hide');
          const levels = document.getElementById('levels');
          levels.classList.remove('hide');
          levels.style.opacity = '0';
          const headergradient = document.getElementById('header');
          headergradient.classList.add('gradientfinal');
          const themeheader = document.getElementById('themeheader');
          themeheader.innerHTML = 'Next Theme:';
          const palette = document.getElementById('palette');
          palette.classList.add('hide');
          const social = document.getElementById('socialsection');
          social.classList.remove('hide');
          const levelandtimepanel =
            document.getElementById('levelandtimepanel');
          levelandtimepanel.classList.add('hide');
          const level = document.getElementById('level');
          level.classList.add('hide');
          var cd = document.getElementById('cd');
          cd.classList.add('hide');
          const finalpanel = document.getElementById('finalpanel');
          finalpanel.classList.remove('hide');
          const buttondone = document.getElementById('buttondone');
          buttondone.classList.add('hide');
          const buttoncopy = document.getElementById('buttoncopy');
          buttoncopy.classList.remove('hide');
          const finaltheme = document.getElementById('finaltheme');
          finaltheme.classList.remove('hide');
          var i = 0;
          finaltheme.innerHTML = '#' + data.themes[i];
          const finallevel = document.getElementById('finallevel');
          finallevel.classList.remove('hide');
          finallevel.innerHTML = '/' + level.innerHTML;
          const usedtimediv = document.getElementById('usedtime');
          usedtimediv.classList.remove('hide');

          if (usedtime < 10) {
            usedtime = '0' + usedtime;
          }
          var minutes = Math.floor(usedtime / 60);
          var seconds = usedtime - minutes * 60;
          if (seconds < 10) {
            seconds = '0' + seconds;
          }
          usedtimediv.innerHTML = '/' + '0' + minutes + "'" + seconds + "''";

          setInterval(nextTheme, 1000);

          nextTheme();
        }

        if (timelevel === 179 || timelevel === 59 || timelevel === 29) {
          var cdata = document.getElementById('cdata');
          cdata.classList.add('hide');
        }

        if (timelevel < 10 && timelevel % 2 === 1) {
          const headergradient = document.getElementById('header');
          headergradient.classList.add('gradientcountdown');
        }
        if (timelevel < 10 && timelevel % 2 === 0) {
          const headergradient = document.getElementById('header');
          headergradient.classList.remove('gradientcountdown');
        }

        setUsedTime();
        var minutes = Math.floor(timelevel / 60);
        var seconds = timelevel - minutes * 60;
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
        if (seconds < 10) {
          seconds = '0' + seconds;
        }

        document.getElementById('cd').innerHTML =
          minutes + "'" + seconds + "''";
        timelevel--;
      }
    }
    document.getElementById('countdowngeneral').innerHTML = countdowngeneral--;
  }
}

export {
  setLevelEasy,
  setLevelMedium,
  setLevelHard,
  done,
  copyFocus,
  startCount,
};
