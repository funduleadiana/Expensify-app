const person = {

    age: 26, 
    location: {
        city: 'London',
        temp: 26
    }
};

const { name: firstName = 'Dylan', age } = person;

// instead of writing person.age person.name
console.log(`${firstName} is ${age}.`);

const {city, temp: temperature}= person.location;
if(city && temperature){
    console.log(`It's ${temperature} is ${city}.`)
}

// person.location.temp 