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
const ore = 10;
const promo = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];
// dichiarazione variabili




//form 
invioDati.addEventListener('submit', function (event) {
    event.preventDefault();
    let servizio = document.getElementById('lavoro');
    servizio = lavoro.value;
    let offerta = document.getElementById('promo');
    offerta = offerta.value.toUpperCase();
    let esempio = '';
    let prezzo = 0;

    // funzione per applicare lo sconto 
    function sconto(scontoApplicato) {
        scontoApplicato = scontoApplicato * ore;
        scontoApplicato = scontoApplicato - ((scontoApplicato * scontoPromo) / 100);
        return scontoApplicato;
    }
    // funzione per applicare lo sconto
    // funzione per la tariffa normale 
    function noSconto(tariffa) {
        tariffa = tariffa * ore;
        return tariffa;
    }
    // funzione per la tariffa normale 

    // controllo per codice sconto
    promo.forEach(function (element) {
        if (element === offerta) {
            esempio = 'true';
        }
    })


    if (esempio === 'true') {
        if (servizio === sviluppoBackend) {
            prezzo = sconto(sviluppoBackendPrezzo)
            console.log(prezzo);
        }
        else if (servizio === sviluppoFrontend) {
            prezzo = sconto(sviluppoFrontendPrezzo)
            console.log(prezzo);
        } else if (servizio === analisiProgettuale) {
            prezzo = sconto(analisiProgettualePrezzo)
            console.log(prezzo);
        }
    }
    else {
        if (servizio === sviluppoBackend) {
            prezzo = noSconto(sviluppoBackendPrezzo)
            console.log(prezzo);
        }
        else if (servizio === sviluppoFrontend) {
            prezzo = noSconto(sviluppoFrontendPrezzo)
            console.log(prezzo);
        } else if (servizio === analisiProgettuale) {
            prezzo = noSconto(analisiProgettualePrezzo)
            console.log(prezzo);
        }
    }

})