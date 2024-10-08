/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVowels(str) {
    //crea una variabile dove scrivere le vocali
    let vowels = ['a','e','i','o','u']
    let counter = 0
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        //verifico se il carattere selezionato è presente nell'array vocale
        if (vowels.includes(element)) {
            counter++
        }
    }
    return counter
}

// Invoca la funzione qui e stampa il risultato in console
console.log(countVowels(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)