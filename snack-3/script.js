// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

// FILTER

const lettere = ['a', 'b', 'c', 'd', 'e'];

const posizione = lettere.filter((elementi) => {
    if(elementi>= lettere[2] && elementi <= lettere[4] ) {
        return true;
    }
    return false;
    }
);
console.log(posizione);


// function funzione(arr, min, max){
//     let vuoto = [];
//     for(let i = min; i <= max; i++){
//         vuoto.push(arr[i]);
//     }
//     return vuoto;
// } 
// console.log(funzione(arr, a, b));
