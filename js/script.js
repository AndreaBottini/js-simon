// *Simon says*
// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

// alert('funziona?')

// 1.Devo fare in modo che un alert crei 5 numeri casuali. Per fare ciò creo la funzione e utilizzo getRandomNumber.
var numeriAlert = [];
var partenzaContoInverso = 30;
var contoInverso = setInterval(contoContrario, 1000);
var numeriUtente = [];
var risultato;


for (var i = 0; i < 5; i++) {
  numeriAlert.push(getRandomNumber(1, 100))
}
alert(numeriAlert);

// 2.Devo far partire un timer di 30 secondi e per fare ciò creo una funzione specifica per il conto alla rovescia. LA funzione si trova nella parte funzioni;

// 3.Devo permettere all'utente di inserire attraverso i prompt i 5 numeri visti in precedenza.

setTimeout(function (contoInverso) {
  for (var i = 0; i < 5; i++) {
    var numeriUtente = parseInt(prompt('Inserisci i numeri che hai visto in precedenza'));
    console.log(numeriUtente);
    if (numeriAlert == numeriUtente) {
      risultato = alert('Hai vinto il gioco');
    }
  }
}, 30000);


// FUNZIONI
function getRandomNumber(numMin, numMax) {
  numMin = Math.ceil(numMin);
  numMax = Math.floor(numMax);
  var risultato = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
  return risultato;
};

function contoContrario () {
  if (partenzaContoInverso == 0) {
    clearInterval(contoInverso)
  }
  else {
    partenzaContoInverso--;
  }
  console.log('Mancano esattamente:', partenzaContoInverso, 'secondi');
}
