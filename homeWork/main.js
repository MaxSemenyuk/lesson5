 // - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log , alert, document.write
 let q = 'hello';
let w = 'owu';
let e = 'com';
let r = 'ua';
let t = 1;
let y = 10;
let u = -999;
let i = 123;
let pi = 3.14;
let o = 2.7;
let p = 16;
let a = true;
let s = false;
console.log(q,w,e,r,t,y,u,i,pi,o,p,a,s);

// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
let book1 = {
    name: 'grog',
    pages: 454,
    genre: 'comedy'
}

// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
// автори (тип - масив, кожен елемент масиву - це стрінга)
let book2 = {
    name:"fight",
    pages: 453,
    genre: 'drama',
    authors: [
        'erred',
        'regret',
        'defended'
         ]
}

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
 {
     let firstName = 'Maxym';
     let middleName = 'Rostyslavovich';
     let lastName = 'Semenyuk';
     let person = `${firstName} ${middleName} ${lastName}`;
 }
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let name = prompt('name');
let middleName = prompt('middleName');
let age = prompt('age');
console.log(`${name} ${middleName} ${age}`)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;
 {
     let a = 100;
     let b = '100';
     let c = true;

     console.log(typeof a);
     console.log(typeof b);
     console.log(typeof c);
 }
 // - Створити масив об'єктів з назвою books з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let library = [
    {
        name: 'hrtt',
        pages: 123,
        genre: 'comedy',
        authors: 'trhrth'
    },
    {
        name: 'thjtyh',
        pages: 234,
        genre: 'drama',
        authors: 'tyjrhgd'
    },
    {
        name: 'juyjuyjyf',
        pages: 546,
        genre: 'fantasy',
        authors: 'rthrtgh'
    }
]
 console.log(library[0]);
console.log(library[1]);
console.log(library[2])
