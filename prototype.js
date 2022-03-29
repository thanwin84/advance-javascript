function Person(fName, lName, age, status){
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.status = status;
}
// creating a prototype
Person.prototype.full_name = function(){
    console.log(`Full name is ${this.name}`)
}
const win = new Person("than win", "hline", 25, true);
// console.log(win)
console.log(win)
