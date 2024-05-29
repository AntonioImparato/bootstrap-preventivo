Questo programma consiste in un form HTML che permette agli utenti di richiedere un preventivo per servizi di sviluppo (backend, frontend o analisi progettuale). 
Il form prevede l'inserimento di dati come nome, cognome, email, tipo di lavoro, descrizione del lavoro e un eventuale codice promozionale. 


Dichiarazione Variabili: Le variabili iniziali includono i prezzi dei servizi, lo sconto promozionale, le ore di lavoro, e un elenco di codici promozionali validi.

Funzione per Applicare lo Sconto:

La funzione sconto
calcola il prezzo scontato per un servizio, con sconto del 25%.
Il risultato è arrotondato a due decimali.

La funzione noSconto calcola il prezzo totale senza applicare alcuno sconto, 

La funzione dividiPrezzo separa la parte intera e decimale di un prezzo scontato, e aggiorna il contenuto degli elementi HTML per mostrare il prezzo.
Gestione del Form:

Il form ha un event listener per l'evento submit che impedisce l'invio del form se i campi non sono validi.
Dopo la validazione, si ottengono i valori dei campi del form, inclusi il tipo di servizio e il codice promozionale.
Si verifica la validità del codice promozionale.
Se il codice è valido, si calcola il prezzo scontato in base al servizio selezionato e si mostra il prezzo formattato.
Se il codice promozionale non è presente o non è valido, si calcola e mostra il prezzo normale.
In caso di codice promozionale errato, si mostra un avviso di errore.

