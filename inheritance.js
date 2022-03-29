
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}
Book.prototype.getSummery = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
}
// megazine constructor
function Megazine(title, author, year, month){
    Book.call(this, title, author, year);
    this.month = month;
}
// Inherit prototype 
Megazine.prototype = Object.create(Book.prototype);
var meg = new Book('hakus', 'jasmit', 1989, 'april');
console.log(meg);
console.log(meg.getSummery())
