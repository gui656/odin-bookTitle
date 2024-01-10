const getTheTitles = function() {

    const books = [
        {
            title: "Peter Pan",
            author: "J. M. Barrie"
        },

        {
            title: 'The Chronicles of Narnia',
            author: 'C. S. Lewis'
        },

        {
            title: 'Harry Potter',
            author: 'J. K. Rowling'
        },

        {
            title: 'The Wonderful Wizard of Oz',
            author: 'L. Frank Baum'
        }
    ]

    const bookTitles = books.map(book => book.title);

    return bookTitles
    
};

// Do not edit below this line
module.exports = getTheTitles;