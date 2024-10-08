/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function greetings(name){
    let greet;
    //recupero l'ora attuale e la salvo in una variabile
    let ora = new Date().getHours()
    console.log(ora);
    //in base all'ora cambiare il saluto
    if(ora < 12){
        greet = 'Buongiorno'
    } else if (ora < 18){
        greet = 'Buon pomeriggio'
    } else {
        greet = 'Buonasera'
    }
    return `${greet} ${name}`
}

// Invoca la funzione qui e stampa il risultato in console
console.log(greetings(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.

