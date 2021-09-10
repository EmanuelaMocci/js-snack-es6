// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

// FILTER

function funzione(arr, min, max){
    const posizione = arr.filter(
        (elementi, index) => {
        if(index>= min && index <= max ) {
            return true;
        }
        return false;
        }
    ); 
    return posizione;
}

const lettere = ['a', 'b', 'c', 'd', 'e'];
let num1 = 1;
let num2 = 3;

console.log(funzione(lettere, num1, num2));
