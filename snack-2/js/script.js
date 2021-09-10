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

    for (let i = 0; i < squadre.length; i++) {
        squadre[i].punti = randomNumeri(0, 20);
        squadre[i].falli = randomNumeri(0, 15);
}  

console.log(squadre);

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi 
// e falli subiti e stampiamo tutto in console.

let arr = [];

for (let i = 0; i < squadre.length; i++) {
    const {nome, falli} = squadre[i];
    arr.push(
        {
            nome, 
            falli
        }
    );

    // Oppure: 
    // for (let i = 0; i < squadre.length; i++) {
       // const nuovoOggettoSquadra = {
    //     'nome': nome,
    //     'falli': falli
    // }
    // arr.push(nuovoOggettoSquadra);
// }
    // console.log(arr);
}
console.log(arr);










