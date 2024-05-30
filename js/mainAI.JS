'use strict';

// dichiarazione variabili
const invioDati = document.getElementById('invioDati');
const sviluppoBackend = 'backend';
const sviluppoFrontend = 'frontend';
const analisiProgettuale = 'analisi';
const sviluppoBackendPrezzo = 20.5;
const sviluppoFrontendPrezzo = 15.30;
const analisiProgettualePrezzo = 33.60;
const scontoPromo = 25;
const ore = 10;
const promo = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];
let parteIntera = 0;
let parteDecimale = 0;

// funzione per applicare lo sconto 
function sconto(tariffa) {
    let scontoApplicato = tariffa * ore;
    scontoApplicato -= (scontoApplicato * scontoPromo) / 100;
    return scontoApplicato.toFixed(2);
}

// funzione per la tariffa normale 
function noSconto(tariffa) {
    tariffa = tariffa * ore;
    return tariffa.toFixed(2);
}

// funzione per scomporre il numero 
function dividiPrezzo(prezzo) {
    let numeroStringa = prezzo.toString().replace('.', ',');
    let [parteIntera, parteDecimale] = numeroStringa.split(',');
    document.getElementById('parteIntera').textContent = '€ ' + parteIntera + '.';
    document.getElementById('parteDecimale').textContent = parteDecimale;
}

// form 
invioDati.addEventListener('submit', function (event) {
    event.preventDefault();

    // Verifica validità dei campi
    if (!invioDati.checkValidity()) {
        invioDati.classList.add('was-validated');
        return;
    }

    // Ottieni i valori dei campi del form
    let servizio = document.getElementById('lavoro').value;
    let offerta = document.getElementById('promo').value.toUpperCase();
    let avviso = document.getElementById('errore');
    let prezzo = 0;
    //diamo a applcasconto il valore vero o falso in base all'input utente su codice sconto 
    let applicaSconto = promo.includes(offerta);

    // aggiungi o rimuovi avviso cliente codice errato 
    if (applicaSconto) {
        avviso.classList.add('d-none');
    } else if (offerta !== '') {
        avviso.classList.remove('d-none');
    } else {
        avviso.classList.add('d-none');
    }

    //controllo in base al servizio cliente richiesto + controllo codice sconto
    if (servizio === sviluppoBackend) {
        if (applicaSconto) {
            prezzo = sconto(sviluppoBackendPrezzo);
        } else {
            prezzo = noSconto(sviluppoBackendPrezzo);
        }
    } else if (servizio === sviluppoFrontend) {
        if (applicaSconto) {
            prezzo = sconto(sviluppoFrontendPrezzo);
        } else {
            prezzo = noSconto(sviluppoFrontendPrezzo);
        }
    } else if (servizio === analisiProgettuale) {
        if (applicaSconto) {
            prezzo = sconto(analisiProgettualePrezzo);
        } else {
            prezzo = noSconto(analisiProgettualePrezzo);
        }
    }

    dividiPrezzo(prezzo);
});
