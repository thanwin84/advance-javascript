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
const book1 = new Book("hakushi", "hauku", 2019);
console.log(book1);
console.log(book1.getSummery())

// if we use static, we dont need to instantiate with new keyword
console.log(Book.topBookStore());
