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
    }
]

// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

// squadre[0].punti = Math.floor(Math.random() * 10);
// console.log(`L'Inter ha segnato un totale di ${squadre[0].punti} punti`);
// let random = ;

const randomNumeri = (min, max) => Math.floor(Math.random() * (max - min) + min);

let min = 0;
let max = 20;

    for (let i = 0; i <squadre.length; i++) {
        squadre.punti = randomNumeri(min, max);
        squadre.falli = randomNumeri(min, max);
}  
console.log(squadre.punti);
console.log(squadre.falli);


  


// console.log(randomNumeri(random1, random2));
// console.log(randomNumeri(random1, random2));


// randomNumeri (num1, num2){
//     for (let i = 0; i < squadre.length; i++) {
//             if (squadre[i].punti == 0){
//                 squadre[i].punti = Math.floor(Math.random() * (max - min) ) + min;
//             }
//         }
// } 
// console.log(randomNumeri(1, 20));

// for (let i = 0; i <= 0; i++) {
//     if (squadre[i].punti == 0){
//         squadre[i].punti = Math.floor(Math.random() (max - min) ) + min);
//     }
// }

// console.log(`L'${squadre[0].nome} ha segnato un totale di ${squadre[0].punti} punti`);
// console.log(`Il ${squadre[1].nome} ha segnato un totale di ${squadre[0].punti} punti`);
// console.log(`Il ${squadre[2].nome} ha segnato un totale di ${squadre[0].punti} punti`);






// Infine usando la destrutturazione creiamo un nuovo array di oggetti i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.