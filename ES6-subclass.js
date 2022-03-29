class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummery(){
        return `${this.title} was written in ${this.year}`
    }
    static topBookStore(){
        return "Secret to Long Life";
    }
}
// creating subclass
class Megazine extends Book {
    constructor(title, author, year, month){
        super(title, author, year);
        this.month = month;
    }
}
const meg1 = new Megazine('barsar', "smith Has", 2018, "March");
console.log(meg1)
console.log(meg1.getSummery())
