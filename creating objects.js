
var Book1 = {
    name: "History of Long Life",
    author: "Hakushi Jak",
    released: 2009,
}
// it will give array of keys
Object.keys(Book1);
// it will give array of values
Object.values(Book1);

var person = {
    name: "than win",
    age: 21,
    company: 'facebook',
    married: false,
    'nick name': "win"
}
//we can access data with dot notation
// person.name;

//we can also access data with []
// when we have space in the attribute, we cannnot access attribute with dot notation
//in that case we have to use 
//person['nick name'];

// var user_input = prompt("Enter your choice");
// // if we are taking input from user, we cannot use dot notation to access
// person[user_input]

// creating object with this keyword
// constructor
function Person(name, group, age){
    this.name = name;
    this.group = group;
    this.age = age;
    this.display = function(){
        console.log(name + " " + age + " years old");
    }
}
// initializing objects
var win = new Person('win', 'software Engineer', 22);
// creating complex object
var alien = {
    name: "Jasmine thomson",
    age: "25",
    country: "USA",
    awards: ['american idol', 'Brit', "oscar"],
    laptop: {
        cpu: 'i5',
        brand: 'Apple',
    }

// checking existance 
//alien.laptop.price === undefined;
