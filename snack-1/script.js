// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const bici = [

    {
        'nome': 'bike1',
        'peso': 13
    },

    {
        'nome': 'bike2',
        'peso': 10
    },

    {
        'nome': 'bike3',
        'peso': 15
    }
];
   

// Stampare a schermo la bici con peso minore
let pesoMinore = bici[0];

for (let i = 0; i < bici.length; i++) {
    if (bici[i].peso < pesoMinore.peso){
        pesoMinore = bici[i];
    }
}



// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
const {nome, peso} = pesoMinore;

console.log(`La bici più leggera è ${nome} e pesa ${peso}kg`)