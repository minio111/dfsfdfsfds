let zarobkiRazem = 0;

let start = 0;
let podnos = 0;

document.getElementsByTagName("button")[1].addEventListener('click', function () {

  console.log('zarobki razem'+ zarobkiRazem)
  const terazZarobki = Number(zarobkiRazem);
  zarobkiRazem = terazZarobki+  Number(document.getElementsByTagName('input')[1].value);
  console.log('ile dodaje ' + Number(document.getElementById('aktualnie').innerText))
  console.log('po dodaniu' + zarobkiRazem);
  document.getElementById('ile').innerText = String(zarobkiRazem);

  var date = new Date();
  const daysCurret = date.getDate();

  let dotychczasZarobione = (zarobkiRazem * daysCurret) / days;
  start = dotychczasZarobione;

  chrome.storage.sync.set({zarobkiRazem: zarobkiRazem}, function() {
  });


  chrome.storage.sync.set({start: start}, function() {
  });
  let seconds = (days-daysCurret) * 24 * 60 * 60 *60;
  podnos = zarobkiRazem / seconds;

  chrome.storage.sync.set({podnos: podnos}, function() {
  });

  document.getElementsByTagName('input')[1].value = '';
});

startXD();
function startXD () {

  chrome.storage.sync.get(['start'], function(result) {
    console.log('Value currently is ' + result.start);
    if (result.start !== undefined) {
      start = result.start;
    } else {
      start = 0;
    }
    document.getElementById('aktualnie').innerText = start + 'zł';
  });


  chrome.storage.sync.get(['zarobkiRazem'], function(result) {
    console.log('Value currently is ' + result.zarobkiRazem);
    if (result.zarobkiRazem !== undefined) {
      zarobkiRazem = result.zarobkiRazem;
      document.getElementById('ile').innerText = zarobkiRazem;
    } else {
      zarobkiRazem = 0;
    }
  });

  chrome.storage.sync.get(['podnos'], function(result) {
    console.log('Value currently is ' + result.podnos);
    if (result.podnos !== undefined) {
      podnos = result.podnos;
    } else {
      podnos = 0;
    }
  });



  setTimeout(function () {
    console.log('przed interwałem');
    console.log('zarobki razem ' +zarobkiRazem)
    console.log('start ' + start)
    console.log('podnos '+ podnos)
  }, 1000)

  setInterval(function () {
    start += podnos;

    console.log('podnos ' + podnos);
    document.getElementById('aktualnie').innerText = start + 'zł';

  }, 1000);

}


document.getElementsByTagName("button")[0].addEventListener('click', function () {

  document.getElementById('ile').innerText = document.getElementsByTagName('input')[0].value;
  zarobkiRazem = document.getElementById('ile').innerText;
  chrome.storage.sync.set({zarobkiRazem: zarobkiRazem}, function() {
  });

  var date = new Date();
  const daysCurret = date.getDate();

  console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  console.log('razem ' + zarobkiRazem)
  console.log('getDate ' + date.getDate())
  console.log('day ' + date.getDay());
  let dotychczasZarobione = (zarobkiRazem * daysCurret) / days;
  console.log('dotychczas zarobione ' + dotychczasZarobione)




  let seconds = (days-daysCurret) * 24 * 60 * 60 *60;
  podnos = zarobkiRazem / seconds;
  console.log(podnos);
  console.log('sekund ' + seconds)
  start = dotychczasZarobione;

  chrome.storage.sync.set({start: start}, function() {
  });

  chrome.storage.sync.set({podnos: podnos}, function() {
  });

  document.getElementsByTagName('input')[0].value = '';
});


let days = 0;
const date = new Date();
console.log(date.getDate());
GFG_Fun();
// document.getElementById("demo").innerHTML = d.getTime();

function daysInMonth (month, year) {
  return new Date(year, month, 0).getDate();
}

function GFG_Fun() {
  var date = new Date();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  days = daysInMonth(month, year);
  console.log("Number of days in " + month
    + "th month of the year " + year
    + " is " + daysInMonth(month, year));



}
