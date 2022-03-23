import data from '../constants/data';
import title from '../elements/Social';
const level = document.getElementById('level');

var usedtime;
var finish = false;
var i = 0;

function done() {
  finish = true;
  const buttondone = document.getElementById('buttondone');
  const buttoncopy = document.getElementById('buttoncopy');
  const palette = document.getElementById('palette');
  const share = document.getElementById('share');
  const socialsection = document.getElementById('socialsection');
  const header = document.getElementById('header');
  const themeheader = document.getElementById('themeheader');
  const todaytheme = document.getElementById('todaytheme');
  const finaltheme = document.getElementById('finaltheme');
  const finallevel = document.getElementById('finallevel');
  const usedtimediv = document.getElementById('usedtime');
  const level = document.getElementById('level');
  const levels = document.getElementById('levels');
  levels.classList.remove('hide');
  levels.style.opacity = '0';
  level.classList.add('hide');
  var cd = document.getElementById('cd');
  buttondone.classList.add('hide');
  buttoncopy.classList.remove('hide');
  palette.classList.add('hide');
  share.classList.remove('hide');
  socialsection.classList.remove('hide');
  header.classList.remove('gradient');
  header.classList.add('gradientfinal');
  themeheader.innerHTML = 'Next Theme: ';

  cd.classList.add('hide');
  finaltheme.classList.remove('hide');
  finaltheme.innerHTML = '#' + data.themes[i];
  finallevel.classList.remove('hide');
  finallevel.innerHTML = '/' + level.innerHTML;
  usedtimediv.classList.remove('hide');
  usedtimediv.innerHTML = '/' + usedtime + "''";
}
function copyResult() {
  const copied = document.getElementById('copied');
  copied.classList.remove('hide');
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
  cdata.innerHTML = "3'00''";
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
  cdata.innerHTML = "1'00''";
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
  cdata.innerHTML = "0'30''";
  var cd = document.getElementById('cd');
  cd.innerHTML = 30;

  const buttonplay = document.getElementById('buttonplay');
  buttonplay.classList.remove('disabled');
}
function startCount() {
  hideLevels();
  const level = document.getElementById('level');
  level.classList.remove('hide');
  var cdata = document.getElementById('cdata');
  cdata.classList.remove('hide');
  var cd = document.getElementById('cd');
  const palette = document.getElementById('palette');
  palette.classList.remove('hide');

  const principalcountdown = setInterval(cdgeneral, 1000);
  var countdowngeneral = 3;
  function cdgeneral() {
    if (countdowngeneral === 0) {
      clearInterval(principalcountdown);
      const levels = document.getElementById('levels');
      levels.classList.add('hide');
      const countdowngeneral = document.getElementById('countdowngeneral');
      countdowngeneral.classList.add('hide');
      const buttonplay = document.getElementById('buttonplay');
      buttonplay.classList.add('hide');
      const buttondone = document.getElementById('buttondone');
      buttondone.classList.remove('hide');
      const todaytheme = document.getElementById('todaytheme');
      todaytheme.innerHTML = data.themes[0];

      const gamecountdown = setInterval(cdgame, 1000);
      var usedtime = 0;
      var timelevel = cd.innerHTML;
      function cdgame() {
        if (timelevel === 0) {
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
          usedtimediv.innerHTML = '/' + usedtime + "''";

          setInterval(nextTheme, 1000);

          function nextTheme() {
            i++;
            const todaytheme = document.getElementById('todaytheme');

            var currentDate = new Date();
            var seconds = currentDate.getSeconds();
            var minutes = currentDate.getMinutes();
            var hours = currentDate.getHours();
            var targethour = 24 - hours;
            var targetminutes = 59 - minutes;
            var targetseconds = 59 - seconds;
            if (
              targethour === 0 &&
              targetminutes === 0 &&
              targetseconds === 0
            ) {
              todaytheme.innerHTML = data.themes[i];
            } else {
              todaytheme.innerHTML =
                targethour + ':' + targetminutes + ':' + targetseconds;
            }
          }
        }
        if (timelevel === 179 || timelevel === 59 || timelevel === 29) {
          var cd = document.getElementById('cd');
          cd.classList.remove('hide');
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
        usedtime++;
        timelevel--;
        var minutes = Math.floor(timelevel / 60);
        var seconds = timelevel - minutes * 60;
        document.getElementById('cd').innerHTML =
          minutes + "'" + seconds + "''";
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
  copyResult,
  startCount,
};
