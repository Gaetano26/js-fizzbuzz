/*
*Consegna:*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/
//costante numero di celle da creare
const numCaselle = 100;

//costante del div #game in cui inserire le celle create
const game = document.getElementById ('game')


//inizio ciclo (processo per inserire i quadratini)
for(let i = 1; i <= numCaselle; i++){

     //Condition
    //Se il numero è un multipo di 3 E un multipo di 5 il quadratino sarà bg-primary con scritto fizzbuzz
    if (i % 3 === 0 && i % 5 === 0){
        const FizzBuzz = game.innerHTML += ` 
        <div class="square  d-flex justify-content-center align-items-center bg-primary ">
              FizzBuzz
        </div>
        `;

        // Se il numero è un multiplo di 5 il quadratino sarà bg-danger con scritto buzz
    } else if (i % 5 === 0){
        const buzz = game.innerHTML +=
        `
        <div class="square bg-danger d-flex justify-content-center align-items-center fw-bold">buzz</div>
        `;

        //Se il numero è un multiplo di 3 il quadratino sarà bg-warning con scritto fizz
    } else if (i % 3 === 0){
        const fizz = game.innerHTML += 
        `
        <div class="square bg-warning d-flex justify-content-center align-items-center fw-bold">fizz</div> 
        `;

        // In qualsiasi altro caso il quadratino avrà dentro il suo numero corrispondente e sarà bg-info
    } else {
        const number = game.innerHTML += 
        `
        <div class="square bg-info square-number d-flex justify-content-center align-items-center fw-bold"> ${i}</div>
        `;

    }
}

