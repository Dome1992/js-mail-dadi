//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// creare lista di email sistenti 
const listUl = document.querySelector(".listaiscritti");

// Array iniziale
const emailArray = ['forlanodomenico92@gmail.com', 'pippo@hotmail.it', 'giorgiorossi@gmail.com', 'marco@gmail.com' ];

// Chiedi all'utente di inserire la sua email
const nuovaEmail = prompt('Inserisci la tua email:');

// Aggiunta nuova email ad Array iniziale
emailArray.push(nuovaEmail);


// Inizializza la stringa del risultato
let risultato = '';

// Utilizzo di un ciclo for per visualizzare ogni email
for (let i = 0; i < emailArray.length; i++) {

    console.log(emailArray[i]);

    // Verifica se l'utente può entrare
    if (nuovaEmail === emailArray[i]) {
        console.log("puoi entrare");
        risultato = 'Puoi entrare'

    } else {

        console.log("non puoi entrare");
        risultato = 'Non puoi entrare'
    
    }

    const risultato = < li class = {risultato} ></li>
    
}


// Che me lo stampa in console nel browser
console.log(emailArray);




