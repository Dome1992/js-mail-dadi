//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// creare lista di email sistenti 
const listUl = document.querySelector(".listaiscritti");

const emailArray = ['forlanodomenico92@gmail.com', 'pippo@hotmail.it', 'giorgiorossi@gmail.com', 'marco@gmail.com' ];

// Chiedi all'utente di inserire la sua email
const nuovaEmail = prompt('Inserisci la tua email:');

// Aggiunta nuova email ad Array
emailArray.push(nuovaEmail);


// Che me lo stampa in console nel browser
console.log(emailArray);




