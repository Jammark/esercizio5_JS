// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n){
    var lista = [];
    for(var i = 0; i < n; i++){
        lista.push(Math.floor(Math.random() * 10));
    }
    return lista;
}

function checkArray(lista){
    for(var i in lista){
        let element = lista[i];
        console.log(`${element} ${element > 5 ? 'maggiore di 5' : 'non maggiore di 5'}`);
    }
}

checkArray(giveMeRandom(8));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var eCommerce =[
    {
        price: 23,
        name: 'carota',
        id: 4,
        quantity: 24,
    },
    { 
        price: 26,
        name: 'banana',
        id: 6,
        quantity: 27,
    },
    { 
        price: 30,
        name: 'mela',
        id: 2,
        quantity: 35,
    }
];

function shoppingCartTotal(){
    var total = 0;
    for(var i = 0; i < eCommerce.length; i++){
        let o = eCommerce[i];
        total += o.price * o.quantity;
    }
    return total;
}

console.log(`total: ${shoppingCartTotal()}`);

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var shoppingCart =[
    {
        price: 23,
        name: 'carota',
        id: 4,
        quantity: 24,
    },
    { 
        price: 26,
        name: 'banana',
        id: 6,
        quantity: 27,
    },
    { 
        price: 30,
        name: 'mela',
        id: 2,
        quantity: 35,
    }
];

function addToShoppingCart(element){
    shoppingCart.push(element);
    return shoppingCart.length;
}

console.log(`shopping cart size: ${addToShoppingCart({
    price: 3,
    name: 'noce',
    id: 8,
    quantity: 350,
})}`);
/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function maxShoppingCart(array){
    var index = 0;
    var max = 0;
    for(var i in array){
        let element = array[i];
        if(element.price > max){
            max = element.price;
            index = i;
        }
    }
    return array[index];
}

console.log(`cart max: ${maxShoppingCart(shoppingCart).price}`);

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function latestShoppingCart(array){
    return array.pop();
}

console.log(`last cart: ${latestShoppingCart(shoppingCart).name}`);

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function loopUntil(x){
    for(var i = 0; i < 3; i++){
        let number = Math.floor(Math.random() * 10);
        if(number > x){
            return;
        }
        console.log(number);
    }
}

loopUntil(6);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function average(array){
    return array.filter(function(val){
        return Number.isInteger(val);
    }).reduce(function(sum, val, index, array){
        console.log();
        return sum/(index == 1 ? array.length : 1) + val/array.length;
    }) ;
}

console.log(`average: ${average([4, 6, 8, '', 2])}`);

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function longest(stringhe){
    var valore = stringhe.reduce((val1 , val2, index) => 
         val1.length >= val2.length ? val1 : val2
    );
    return valore;
}

console.log(`stringa più lunga: ${longest(['prova1','prova123','prova12'])}`);

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function matrixGenerator(x,y){
    var array = [];
    for(var i = 0; i < x; i++){
        for(var j = 0; j<y; j++){
            array.push(`${i}${j}`);
        }
    }
    console.table(array);
}

matrixGenerator(4,5);
