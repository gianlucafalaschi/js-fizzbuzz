/* Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS 1:
Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
Mi raccomando facciamo il bonus solo dopo aver completato la consegna base e averne testato il corretto funzionamento. */



const wrapper = document.querySelector('#wrapper');
console.log(wrapper);

//PRENDERE NUMERI DA 1 a 100
for (let i = 1; i <= 100; i++) {
    

    // CONTROLLARE CHE I NUMERI SIANO MULTIPLI DI 3 E 5
    
    let multipleOfFizzBuzz;

    if(i % 3 === 0 && i % 5 === 0) {
        multipleOfFizzBuzz = 'FizzBuzz';
        
    }
    // CONTROLLARE CHE I NUMERI SIANO MULTIPLI DI 3
    else if (i % 3 === 0) {
        multipleOfFizzBuzz = 'Fizz';      
    }
    // CONTROLLARE CHE I NUMERI SIANO MULTIPLI DI 5
    else if (i % 5 === 0) {
        multipleOfFizzBuzz = 'Buzz';
    }
    else {
        multipleOfFizzBuzz = i;
    }
    
    console.log(multipleOfFizzBuzz);
    
//Crea un container nel DOM , aggiungendo un elemento html con 
//il numero o la stringa corretta da mostrare.
const newBox = `<div>${multipleOfFizzBuzz}</div>`;
    console.log(newBox);

wrapper.innerHTML += newBox;

};
    

// STAMPA IN CONSOLE FIZZ SE MULTIPLO 3
// STAMPA IN CONSOLE BUZZ SE MULTIPLO 5
// STAMPA IN CONSOLE FIZZBUZZ SE MULTIPLO 3 & 5
// STAMPA IN CONSOLE IL NUMERO NEGLI ALTRI CASI

