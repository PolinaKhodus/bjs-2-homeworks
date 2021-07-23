class PrintEditionItem {

    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

 fix() { 
    this.state *= 1.5;
 }
set state(mark) {
     mark *= 1.5;
     if(mark < 0) {
         this._state = 0;
        }
     else if(mark > 100) {
         this._state = 100;
        }
     else {
         this._state = mark;
        }    
    }    
get state() {
        return this._state;   
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, "magazine")
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, "book")
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state) {
        super (author, name, releaseDate, pagesCount, state)
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state) {
        super (author, name, releaseDate, pagesCount, state)
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state) {
        super (author, name, releaseDate, pagesCount, state)
        this.type = "detective";
    }
}




class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let result = null;
        for (let i = 0; i < this.books.length; i += 1) {
            if (this.books[i][type] === value) {
                result = this.books[i];
            }           
        } 
        return result;
    }

    giveBookByName(bookName) {
        let result = null;
        for (let i = 0; i < this.books.length; i += 1) {
            if (this.books[i].name === bookName) {
                result = this.books[i];
                this.books.splice(i,1);
            }           
        } 
        return result;
    }
}
