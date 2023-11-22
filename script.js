//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// creare lista di email sistenti 
const listUl = document.querySelector(".listaiscritti");

// Array iniziale
const emailArray = ['forlanodomenico92@gmail.com', 'pippo@hotmail.it', 'giorgiorossi@gmail.com', 'marco@gmail.com' ];

// Chiedi all'utente di inserire la sua email
const nuovaEmail = prompt('Inserisci la tua email:');

// Aggiunta nuova email ad Array iniziale
emailArray.push(nuovaEmail);


// Inizializza la stringa del risultato con variabile 
let risultato = false;

// Utilizzo di un ciclo for per visualizzare ogni email
for (let i = 0; i < emailArray.length; i++) {

    console.log(emailArray[i]);

    // Verifica se l'utente può entrare
    if (nuovaEmail === emailArray[i]) {
        
        risultato = true;

    } 
}

 // Stampa un messaggio in base al risultato
    if (risultato = true) {
        
        console.log('Puoi entrare');

    } else {
        console.log('Non puoi entrare');

    }

    console.log(emailArray);







