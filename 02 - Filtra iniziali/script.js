/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function filterStringInArray (array, char){
    
    let newArr = []

    for (let i = 0; i < array.length; i++){
        //crea una variabile che contenga una stringa parte dell'array
        let nameElement = array[i]
        //verifico che l'elemento inizi con il carattere richiesto
        if (nameElement[0] === char){
            newArr.push(nameElement)
        }
        //pusho dentro l'array
    }
    return newArr
}

console.log(filterStringInArray(names, 'A'));
// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]