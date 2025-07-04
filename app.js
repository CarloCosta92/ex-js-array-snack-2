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

// const longBooks = books.filter(book => {
//     return book.pages > 300;
// })

// console.log(longBooks)

// const longBooksTitles = longBooks.map(book => {
//     return book.title
// })

// console.log(longBooksTitles)

// // Snack 2 - Il primo libro scontato
// // Creare un array(availableBooks) che contiene tutti i libri disponibili.
// // Crea un array(discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20 % (mantieni lo stesso formato e arrotonda al centesimo)
// // Salva in una variabile(fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero(senza centesimi).

// const availableBooks = books.filter(book => {
//     return book.available === true;
// })

// console.log(availableBooks)

// const discountedBooks = availableBooks.map(book => {
//     // prendo il numero dalla stringa
//     const priceNumber = parseFloat(book.price);
//     // calcolo lo sconto
//     const discountedPrice = (priceNumber * 0.8).toFixed(2);
//     // ritorno i libri a prezzo scontato
//     return {
//         ...book,
//         price: `${discountedPrice}€`
//     };
// });

// console.log(discountedBooks)

// const fullPricedBook = discountedBooks.find(book => {
//     // prendo il numero dalla stringa
//     const priceNumber = parseFloat(book.price);
//     // uso il metodo number.isInteger per verificare quello che non ha centesimi
//     return Number.isInteger(priceNumber);
// });

// console.log(fullPricedBook);

// // Snack 3 - Ordinare gli Autori
// // Creare un array(authors) che contiene gli autori dei libri.
// // Crea una variabile booleana(areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
// // Ordina l’array authors in base all’età, senza creare un nuovo array.
// // (se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)

// const authors = books.map(book => book.author);

// // Verifica se tutti gli autori sono maggiorenni
// const areAuthorsAdults = authors.every(author => author.age > 18);

// // Ordina in base a areAuthorsAdults
// if (areAuthorsAdults) {
//     authors.sort((a, b) => a.age - b.age);
// } else {
//     authors.sort((a, b) => b.age - a.age);
// }

// console.log(authors);
// console.log('Are all authors adults?', areAuthorsAdults);

// // Snack 4 - Calcola l’età media
// // Creare un array(ages) che contiene le età degli autori dei libri.
// // Calcola la somma delle età(agesSum) usando reduce.
// // Stampa in console l’età media degli autori dei libri.

// const ages = books.map(book => book.author.age);
// const agesSum = ages.reduce((sum, age) => sum + age, 0);
// const averageAge = agesSum / ages.length;

// console.log(averageAge);

// // Snack 5
// // Usando la l'API https://boolean-spec-frontend.vercel.app/freetestapi/books/{id} usa la combinazione di .map() e Promise.all(), per creare una funzione (getBooks) che a partire da un array di id (ids), ritorna una promise che risolve un array di libri (books).
// // Testala con l’array[2, 13, 7, 21, 19].


// async function getBooks(ids) {

//     const baseUrl = `https://freetestapi/api/v1/books/`;

//     const bookPromises = ids.map(id =>
//         fetch(`${baseUrl}${id}`)
//             .then(r => {
//                 if (!r.ok) throw new Error(`Failed to fetch book with id ${id}`);
//                 return r.json();
//             })
//             .catch(error => {
//                 console.error(error);
//                 return null;
//             })
//     );

//     const books = await Promise.all(bookPromises);

//     return books;
// }


// const ids = [2, 13, 7, 21, 19];

// getBooks(ids).then(books => console.log(books))


// // Snack6
// Crea una variabile booleana(areThereAvailableBooks) per verificare se c’è almeno un libro disponibile.
// Crea un array(booksByPrice) con gli elementi di books ordinati in base al prezzo(crescente).
// Ordina l’array booksByPricein base alla disponibilità(prima quelli disponibili), senza creare un nuovo array.


const areThereAvailableBooks = books.some(b => b.available);
const booksByPrice = [...books].sort((a, b) => {
    const priceA = parseFloat(a.price.replace("€", ""))
    const priceB = parseFloat(b.price.replace("€", ""))
    return priceA - priceB

})

console.log(books, booksByPrice)

booksByPrice.sort((a, b) => a.available === b.available ? 0 : a.available ? -1 : 1)

console.log(booksByPrice)

// Snack 7(Bonus) - Analizza i tag
// Usa reduce per creare un oggetto(tagCounts) che conta quante volte ogni tag viene usato tra i libri.
const tagCounts = books.reduce((acc, book) => {
    book.tags.forEach(tag => {
        acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
}, {});

console.log(tagCounts);