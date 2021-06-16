// const person = {

//     age: 26, 
//     location: {
//         city: 'London',
//         temp: 26
//     }
// };

// const { name: firstName = 'Dylan', age } = person;

// // instead of writing person.age person.name
// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature}= person.location;
// if(city && temperature){
//     console.log(`It's ${temperature} is ${city}.`)
// }

// // person.location.temp 

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName )


const address = ['22 Elm way', 'London', 'England', 'w79ha']
const [street, city, country, postcode] = address;

console.log(`You are in ${city}, ${country}`);

// const [, , myCountry = 'Germany'] = address
console.log(`My address is in ${country}`)


const item = ['Coffee (hot)', '$2.00', '$2.5', '$2.72'];

const [beverage, , medium] = item

console.log(`A medium ${beverage} costs ${medium} `)