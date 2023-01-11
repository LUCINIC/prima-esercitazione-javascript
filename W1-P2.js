/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
string-serie di caratteri racchiusi da apici o doppi 
//let auto1 = "punto" 
  let auto2 = 'yaris' 

number : numeri float 
// let numero intero = 42 
//  console.log(numerointero) ; 

// let numerovirgolaMobile = 3,14;
//  console.log (numerovirgolaMobile) ; 

// let somma = numerointero + numerovirgolaMobile;
// console.log (somma) => 45,14 

Boolean: rappresenta un valore "vero" o "falso"  
// let età = 18; 
// if (età >= 18);

// console.log ("benvenuto nel sito") // else ("spiacente non hai l'età per accedere") Null: utilizzato per indicare che una variabile ha un valore di “nessun oggetto”: Undefined: variabile dichiarata ma non ha ancora un valore assegnato;



/* SCRIVI QUI LA TUA RISPOSTA */ 

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/ 

Un oggetto è una raccolta di coppie chiave-valore. Un oggetto può rappresentare qualsiasi cosa, delle info di una persona ( come può essere nome e età ) 
let persona = {
  nome : "Mario" ; 
  età : "30" ;
  sesso : "Maschio" 
}
  




/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20. 
*/ 
Per effettuare un addizione  ( una somma  ) dei numeri 12 e 28

let num1 =12 //dichiarando una variabile 
let num 2 = 20 //dichiaro la variabile 
let somma num1+num2 // dichiaro una terza variabile (somma) 

console.log(somma); // stampa 32

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/ 
per creare una variabile in javascripy e assegnare un valore, si può utilizzare la parola chiave  "let seguita dal nome della variabile e seguita dal nome della variabile e del simbolo di assegnazione (=) .

let x = 12

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/ 
per creare una variabile in javascripy e assegnare un valore, si può utilizzare la parola chiave  "let seguita dal nome della variabile e seguita dal nome della variabile e del simbolo di assegnazione (=) .

let name = "luca" ;
console.log ; // stampa luca 

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/ 
let x = 12 // dichiariamo una variabile 
let y = 4 // dichiaro una variabile 
let differenza = y - x ; // dichiaro una terza variabile (differenza) 

console.log (differenza) ; // stampa - 8

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/ 

Per creare due variabili e segnare dei valori , utilzziamo let seguita dal nome delle varabili e dal simbolo di assegnazione  (=). 

let name1 = "john" ; // Dichiariamo variabile
let name2 = "John"; // Dichiariamo variabile 

per verificare che name1 sia diversa da name2, si può utilizzare l' operatore di diseguaglianza (!=) 

console.log( name1 != name2 ) ; // stampa True 

console.log (name1.tolowerCase() == name2.tolowerCase()) 



let num = 5 ; 
let num2 = 10 ; 

console.log ( num != num2 ) ; //stampa true

/* SCRIVI QUI LA TUA RISPOSTA */
