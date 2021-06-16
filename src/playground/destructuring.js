const person = {
    name: 'Andrew',
    age: 26, 
    location: {
        city: 'London',
        temp: 26
    }
};

const { name, age } = person;

// instead of writing person.age person.name
console.log(`${name} is ${age}.`);

const {city, temp}= person.location;
if(city && temp){
    console.log(`It's ${temp} is ${city}.`)
}

// person.location.temp 