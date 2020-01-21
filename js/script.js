// *Simon says*
// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

// alert('funziona?')

// Devo fare in modo che un alert crei 5 numeri casuali. Per fare ciò creo la funzione e utilizzo getRandomNumber

var numeriAlert = [];
for (var i = 0; i < 5; i++) {
  numeriAlert.push(getRandomNumber(1, 100))
}
alert(numeriAlert);


// FUNZIONI
function getRandomNumber(numMin, numMax) {
  numMin = Math.ceil(numMin);
  numMax = Math.floor(numMax);
  var risultato = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
  return risultato;
}
