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

console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3);
console.log(10 ** 3);


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


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/
let eta = 25;
const maggiorenne = eta >= 18;

console.log(`Età ${eta = 25} - Maggiorennte: ${maggiorenne}`)


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/
let nome = 'Manuel';
let anni = 29;
let attivo = true;
let c = null;
let d;

console.log(typeof nome);
console.log(typeof anni);
console.log(typeof attivo);
/*ritorna null o in questo caso object nella console in quanto abbiamo attributo alla variabile 'c' il valore di null, se non lo 
avessi fatto avremmo ottenuto undefined come nella linea successiva, null in questo caso è il valore attriubito alla variabile*/
console.log(typeof c);
console.log(typeof d);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6 — === vs ==
   numero = 5
   stringa = "5"
   Stampa il risultato di "numero == stringa" e "numero === stringa".
   In commento, una riga: spiega la differenza.
*/

let numero = 5
let stringa = '5'

console.log(numero == stringa);
console.log(numero === stringa);
/*i due risultati sono true per Equality e false per la Strict Equality in quanto, nel primo caso anche se il tipo è diverso il valore è uguale,
nel secondo caso essendo solo 1 delle due condizioni vera (come detto prima il valore ma non il tipo) il risultato è false*/


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
let n = 15;
const PARI = n % 2 === 0;
const DIVISIBILE = n % 3 === 0;
const ENTRAMBE = PARI && DIVISIBILE;

console.log(`${n} è pari: ${PARI}`);
console.log(`${n} è divisibile per 3: ${DIVISIBILE}`);
console.log(`${n} è pari e divisibile per 3: ${ENTRAMBE}`);


/* SCRIVI QUI LA TUA RISPOSTA */

/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/
const e = 6 ;
const f = 6 ;
const g = 3 ;


/* SCRIVI QUI LA TUA RISPOSTA */
