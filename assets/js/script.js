/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Saluto personalizzato
   Crea due const "nome" e "cognome".
   Stampa con un template literal: "Ciao, mi chiamo Mario Rossi."
*/
const NOME = 'Manuel';
const COGNOME = 'Burgalassi';

console.log(`Ciao, mi chiamo ${NOME} ${COGNOME}`);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2 — Calcolatrice base
   Due numeri "a" e "b".
   Stampa le 6 operazioni nel formato "10 + 3 = 13":
   somma, differenza, prodotto, divisione, resto (%), elevamento (**).
*/
let a = 10;
let b = 3;

//gli esercizi così non portano a video la richiesta ma solo il risultato
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3);
console.log(10 ** 3);


//correzione
console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} % ${b} = ${a % b}`);
console.log(`${a} ** ${b} = ${a ** b}`);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3 — Età nel tempo
   const annoNascita (scegli un anno).
   const annoCorrente = 2026.
   Stampa: età oggi, età tra 10 anni, età 5 anni fa.
   Formato: "Tra 10 anni avrai 35 anni."
*/
const annoNascita = 1997;
const annoCorrente = 2026;
const etaAttuale = annoCorrente - annoNascita

console.log(`La tua età attale è ${etaAttuale}`);
console.log(`Tra 10 anni avrai ${etaAttuale + 10}`);
console.log(`Tra 5 anni avrai ${etaAttuale + 5}`);

//correzione
console.log(`età oggi ${annoCorrente - annoNascita}`);
console.log(`Tra 10 anni avrai ${(annoCorrente - annoNascita) + 10 }`);
console.log(`Tra 5 anni avrai ${(annoCorrente - annoNascita) + 5 }`);
/*Questo metodo è migliore in quanto creando una variabile in meno
si alleggerisce il carico visto che come si è detto le variabili occupano memoria e quando possibile
è sempre meglio, se la variabile serve in un punto solo, occupare meno memoria possibile 
non è un errore ma uno strumento di ottimizzazione della memoria*/


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/

/*let eta = 25;
let maggiorenne = eta >= 18;

console.log(`Età: ${eta = 25} - Maggiorennte: ${maggiorenne}`)*/

/*correzione la richiesta era di scrivere una variabile senza valore fisso, questo ci prepara ad 
un valore dinamico che ci verrà inserito dall'user sul sito per la compilazione di qualcosa ad esempio
ed in questo modo si riesce a controllare che l'utente sia maggiorenne*/
let eta;
eta = 25
let maggiorenne = eta >= 18;

console.log(`Età: ${eta = 25} - Maggiorennte: ${maggiorenne}`)


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/
let myString = 'Manuel';
let myNumber = 29;
let myBoolean = true;
let myNull = null;
let myUndefined;

console.log(`La variabile ${myString} e di tipo ${typeof myString}`);
console.log(`La variabile ${myNumber} e di tipo ${typeof myNumber}`);
console.log(`La variabile ${myBoolean} e di tipo ${typeof myBoolean}`);
/*ritorna null o in questo caso object nella console in quanto abbiamo attributo alla variabile 'c' il valore di null, se non lo 
avessi fatto avremmo ottenuto undefined come nella linea successiva, null in questo caso è il valore attriubito alla variabile*/
console.log(`La variabile ${myNull} e di tipo ${typeof myNull}`);
console.log(`La variabile ${myUndefined} e di tipo ${typeof myUndefined}`);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6 — === vs ==
   numero = 5
   stringa = "5"
   Stampa il risultato di "numero == stringa" e "numero === stringa".
   In commento, una riga: spiega la differenza.
*/

let numero = 5;
let stringa = '5';

console.log(numero == stringa);
console.log(numero === stringa);
/*i due risultati sono true per Equality e false per la Strict Equality in quanto, nel primo caso anche se il tipo è diverso il valore è uguale,
nel secondo caso essendo solo 1 delle due condizioni vera (come detto prima il valore ma non il tipo) il risultato è false*/

//correzione
console.log(`numero == stringa? ${numero == stringa}`);
console.log(`numero === stringa? ${numero === stringa}`);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7 — Conversioni implicite
   Senza eseguire il codice, prevedi in commento il risultato di queste 4 espressioni.
   Poi stampale per verificare.
   - "5" + 3
   - "5" - 3
   - true + 1
   - "10" * "2"
*/

/*ESERCIZIO 7
1) 53
2)2
3)2
4)20
*/
console.log('5' + 3);
console.log('5' - 3);
console.log(true + 1);
console.log('10' * '2');



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8 — Classificazione numero
   Variabile "n".
   Usando % e operatori logici, stampa tre righe:
   "n è pari: true/false"
   "n è divisibile per 3: true/false"
   "n è pari E divisibile per 3: true/false"
*/
/* SEMPRE IL PROBLEMA DI PRIMA CON L'ETÀ
let n = 15;
const PARI = n % 2 === 0;
const DIVISIBILE = n % 3 === 0;
const ENTRAMBE = PARI && DIVISIBILE;

console.log(`${n} è pari: ${PARI}`);
console.log(`${n} è divisibile per 3: ${DIVISIBILE}`);
console.log(`${n} è pari e divisibile per 3: ${ENTRAMBE}`);*/

//correzione
let n;
n = 20
console.log(`n è pari: ${n % 2 ===0}`)
console.log(`n è divisibile per 3: ${n % 3 ===0}`)
console.log(`n è pari e divisibile per 3: ${n % 2 ===0 && n % 3 ===0 }`)


/* SCRIVI QUI LA TUA RISPOSTA */

/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const e = 12 ;
const f = 15 ;
const g = 12 ;

let perimetro = e + f+ g;
let tipo;

if (e === f && f === g) {
   tipo = 'equilatero';
   console.log(`Triangolo ${tipo}, perimetro ${perimetro}`);
} else if (e === f || f === g || g === e) {
   tipo = 'isoscele';
   console.log(`Triangolo ${tipo}, perimetro ${perimetro}`);
} else {
   tipo = 'scaleno';
   console.log(`Triangolo ${tipo}, perimetro ${perimetro}`);
}
