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





// funzione per applicare lo sconto 
function sconto(scontoApplicato) {
    scontoApplicato = scontoApplicato * ore;
    scontoApplicato = scontoApplicato - ((scontoApplicato * scontoPromo) / 100);
    return scontoApplicato.toFixed(2);

}



// funzione per la tariffa normale 
function noSconto(tariffa) {
    tariffa = (tariffa * ore);
    // ritorna il numero con massimo 2 decimali
    return tariffa.toFixed(2);

}


//funzione per scomporre il numero 
function dividiPrezzo(prezzo) {
    // Convertire il numero in una stringa
    let numeroStringa = prezzo.toString().replace('.', ',');


    // Dividere la stringa in base alla virgola
    let parti = numeroStringa.split(',');

    // Convertire le parti in numeri interi
    let parteIntera = parseInt(parti[0], 10);
    let parteDecimale = parseInt(parti[1], 10);
    // scrivi il risultto nel html
    document.getElementById('parteIntera').textContent = '€ ' + parteIntera + '.';
    document.getElementById('parteDecimale').textContent = parteDecimale;
}


//form 
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
        // rimuovi l'avviso
        avviso.classList.add('d-none');
        if (servizio === sviluppoBackend) {
            prezzo = sconto(sviluppoBackendPrezzo);
            dividiPrezzo(prezzo);

        }
        else if (servizio === sviluppoFrontend) {
            prezzo = sconto(sviluppoFrontendPrezzo);
            dividiPrezzo(prezzo);

        } else if (servizio === analisiProgettuale) {
            prezzo = sconto(analisiProgettualePrezzo);
            dividiPrezzo(prezzo);

        }
    }
    // codice sconto assente  
    else if (offerta === '') {
        //rimuovi l'avviso di errore
        avviso.classList.add('d-none');


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

    // codice sconto erratto 
    else {
        //aggiungi avviso errore codice sconto 
        avviso.classList.remove('d-none');


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