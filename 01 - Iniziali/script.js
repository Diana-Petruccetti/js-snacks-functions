/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function logLetters(array){
    let Letters = [];

    for (let index = 0; index < array.length; index++) {
        letters.push(names[index][0]);
    }
    return Letters;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(getLetters(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]