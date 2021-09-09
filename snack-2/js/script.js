// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

const squadre = [

    {
        'nome': 'Inter',
        'punti': 0,
        'falli': 0
    },

    {
        'nome': 'Palermo',
        'punti': 0,
        'falli': 0
    },

    {
        'nome': 'Cagliari',
        'punti': 0,
        'falli': 0
    },

    {
        'nome': 'Juventus',
        'punti': 0,
        'falli': 0
    }
]

// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

const randomNumeri = (min, max) => Math.floor(Math.random() * (max - min) + min);

let min = 0;
let max = 20;

    for (let i = 0; i < squadre.length; i++) {
        squadre[i].punti = randomNumeri(min, max);
        squadre[i].falli = randomNumeri(min, max);
}  

console.log(squadre);

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi 
// e falli subiti e stampiamo tutto in console.

let arr = [];

for (let i = 0; i < squadre.length; i++) {
    const {nome, falli} = squadre[i];
    arr.push({nome, falli});
}
console.log(arr);




