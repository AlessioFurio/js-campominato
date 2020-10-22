// il pc deve generare 16 numeri casuali da 1 a 100

// dopo deve chiedere all utente di inserire un numero alla volta, sempre compreso fra 1 e 100

// se il numero e' presente nella lista dei numeri generati, la partite finisce,
//altrimenti si continua chiedendo all' utente un altro numero

// la partita termina qnd il giocatore inserisce un numero "vietato " o raggiunge il numero max di "tiri consentiti"

// a end game, il software comunica il punteggio, ovvero il numero di volte che l utente ha inserito un numero consentito


var numeriRandomPC = [];  // INIZIALIZZO ARRAY
var bombe = 16;
var numeriUtente = [];
var numMinRange = 1;
var numMaxRange = 0;

var difficolta = prompt('scegli una difficolta fra facile - media - difficile');

if (difficolta == 'facile') {
    numMaxRange = 100;
}
else if (difficolta == 'media') {
    numMaxRange = 80;
}
else if (difficolta == 'difficile') {
    numMaxRange = 50;
}

var tiriConsentiti = numMaxRange - bombe;

while (numeriRandomPC.length < 16) {    // genero 16 numeri random (da 1 a 100) e pusho in numeriRandomPC
    var bomba = (getRndInteger(numMinRange, numMaxRange));
    if (!numeriRandomPC.includes(bomba)){  // se non è incluso allora lo pusho
        numeriRandomPC.push(bomba);
    }
}

console.log(numeriRandomPC);  //stampo array

var numeroTiriUtente = 0;

do {
    var esito = false;  // inizializzo la var esito su false
    var tiroUtente = parseInt(prompt('scegli un numero fra 1 e 100'));  //chiedo un numero all'utente
    console.log('hai digitato: ' + tiroUtente);

    if (numeriUtente.includes(tiroUtente)) {
        alert('hai gia digitato qst numero')
        console.log('inserisci un numero diverso');
    }

    else {
        numeriUtente.push(tiroUtente);

        for (var i = 0; i < numeriRandomPC.length && esito!=true; i++) {  // ciclo finchè non scorro tutto l'array e l'esito sia diverso da true

            if (tiroUtente != numeriRandomPC[i]){
                esito = false;
            }
            else {
                esito = true;  // esci dal ciclo perchè hai beccato una bomba
            }

        }
        numeroTiriUtente++;  // aggiorno il conteggio del punteggio
        console.log('il numero di tiri che Alessio ha fatto: ' + numeroTiriUtente);
    }
}
while (esito == false && numeroTiriUtente < tiriConsentiti) // resta nel ciclo finchè esito è uguale a falso e numeroTiriUtente è < di tiriConsentiti

console.log('il tuo punteggio: ' + (numeroTiriUtente - 1) + ' su ' + tiriConsentiti);  // stampo il punteggio e lo stampo col -1 perchè l'ultimo tiro non bisogna conteggiarlo




// GENERATORE NUMERI RANDOM PER PC
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
