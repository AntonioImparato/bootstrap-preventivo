'use strict'

// dichiarazione variabili
const invioDati = document.getElementById('invioDati');
const sviluppoBackend = 'backend';
const sviluppoFrontend = 'frontend';
const analisiProgettuale = 'analisi';
const sviluppoBackendPrezzo = 20.5;
const sviluppoFrontendPrezzo = 15.30;
const analisiProgettualePrezzo = 33.60;
const scontoPromo = 25;
const ore = 15;
const promo = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];
let parteIntera = 0;
let parteDecimale = 0;

// dichiarazione variabili



// funzione per applicare lo sconto 
function sconto(scontoApplicato) {
    scontoApplicato = scontoApplicato * ore;
    scontoApplicato = scontoApplicato - ((scontoApplicato * scontoPromo) / 100);
    return scontoApplicato.toFixed(2);

}
// funzione per applicare lo sconto



// funzione per la tariffa normale 
function noSconto(tariffa) {
    tariffa = (tariffa * ore);

    return tariffa.toFixed(2);

}
// funzione per la tariffa normale 


//funzione per dividere il numero 
function dividiPrezzoScontato(prezzo) {
    // Convertire il numero in una stringa
    let numeroStringa = prezzo.toString().replace('.', ',');


    // Dividere la stringa in base alla virgola
    let parti = numeroStringa.split(',');

    // Convertire le parti in numeri interi
    let parteIntera = parseInt(parti[0], 10);
    let parteDecimale = parseInt(parti[1], 10);
    document.getElementById('parteIntera').textContent = '€ ' + parteIntera;
    document.getElementById('parteDecimale').textContent = parteDecimale;


}

function dividiPrezzo(prezzo) {
    // Convertire il numero in una stringa
    let numeroStringa = prezzo.toString().replace('.', ',');


    // Dividere la stringa in base alla virgola
    let parti = numeroStringa.split(',');

    // Convertire le parti in numeri interi
    let parteIntera = parseInt(parti[0], 10);
    let parteDecimale = parseInt(parti[1], 10);
    document.getElementById('parteIntera').textContent = '€ ' + parteIntera;
    document.getElementById('parteDecimale').textContent = parteDecimale + ' prezzo senza sconto';
}


//form 
invioDati.addEventListener('submit', function (event) {
    event.preventDefault();
    let servizio = document.getElementById('lavoro');
    servizio = lavoro.value;
    let offerta = document.getElementById('promo');
    offerta = offerta.value.toUpperCase();
    let esempio = '';
    let prezzo = 0;




    // controllo per codice sconto
    promo.forEach(function (element) {
        if (element === offerta) {
            esempio = 'true';
        }
    })

    // codice sconto corretto. applica sconto sul servizio richiesto 
    if (esempio === 'true') {
        if (servizio === sviluppoBackend) {
            prezzo = sconto(sviluppoBackendPrezzo);
            dividiPrezzoScontato(prezzo);

        }
        else if (servizio === sviluppoFrontend) {
            prezzo = sconto(sviluppoFrontendPrezzo);
            dividiPrezzoScontato(prezzo);

        } else if (servizio === analisiProgettuale) {
            prezzo = sconto(analisiProgettualePrezzo);
            dividiPrezzoScontato(prezzo);

        }
    }
    // codice sconto assente o non vaido. nessuno sconto 
    else {
        if (servizio === sviluppoBackend) {
            prezzo = noSconto(sviluppoBackendPrezzo);
            dividiPrezzo(prezzo);

        }
        else if (servizio === sviluppoFrontend) {
            prezzo = noSconto(sviluppoFrontendPrezzo);
            dividiPrezzo(prezzo);

        } else if (servizio === analisiProgettuale) {
            prezzo = noSconto(analisiProgettualePrezzo);
            dividiPrezzo(prezzo);

        }
    }

})