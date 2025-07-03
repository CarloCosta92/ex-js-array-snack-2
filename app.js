const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

// Snack 1 - Filtra e Modifica
// Crea un array(longBooks) con i libri che hanno più di 300 pagine;
// Creare un array(longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
// Stampa in console ogni titolo nella console.

const longBooks = books.filter(book => {
    return book.pages > 300;
})

console.log(longBooks)

const longBooksTitles = longBooks.map(book => {
    return book.title
})

console.log(longBooksTitles)

// Snack 2 - Il primo libro scontato
// Creare un array(availableBooks) che contiene tutti i libri disponibili.
// Crea un array(discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20 % (mantieni lo stesso formato e arrotonda al centesimo)
// Salva in una variabile(fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero(senza centesimi).

const availableBooks = books.filter(book => {
    return book.available === true;
})

console.log(availableBooks)

const discountedBooks = availableBooks.map(book => {
    // prendo il numero dalla stringa
    const priceNumber = parseFloat(book.price);
    // calcolo lo sconto
    const discountedPrice = (priceNumber * 0.8).toFixed(2);
    // ritorno i libri a prezzo scontato
    return {
        ...book,
        price: `${discountedPrice}€`
    };
});

console.log(discountedBooks)

const fullPricedBook = discountedBooks.find(book => {
    // prendo il numero dalla stringa
    const priceNumber = parseFloat(book.price);
    // uso il metodo number.isInteger per verificare quello che non ha centesimi
    return Number.isInteger(priceNumber);
});

console.log(fullPricedBook);

// Snack 3 - Ordinare gli Autori
// Creare un array(authors) che contiene gli autori dei libri.
// Crea una variabile booleana(areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
// Ordina l’array authors in base all’età, senza creare un nuovo array.
// (se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)

const authors = books.map(book => book.author);

// Verifica se tutti gli autori sono maggiorenni
const areAuthorsAdults = authors.every(author => author.age > 18);

// Ordina in base a areAuthorsAdults
if (areAuthorsAdults) {
    authors.sort((a, b) => a.age - b.age);
} else {
    authors.sort((a, b) => b.age - a.age);
}

console.log(authors);
console.log('Are all authors adults?', areAuthorsAdults);

// Snack 4 - Calcola l’età media
// Creare un array(ages) che contiene le età degli autori dei libri.
// Calcola la somma delle età(agesSum) usando reduce.
// Stampa in console l’età media degli autori dei libri.

const ages = books.map(book => book.author.age);
const agesSum = ages.reduce((sum, age) => sum + age, 0);
const averageAge = agesSum / ages.length;

console.log(averageAge);




