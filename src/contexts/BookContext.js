import React, { createContext, useState } from 'react'

export const BookContext = createContext()

export const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'Books number one', author: 'Bob', id: 1},
        {title: 'Books number two', author: 'Paul', id: 2}
    ])

    const addBook = (title, author) => {
        setBooks([...books, {title: title, author: author, id: books.length+1}])
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }

    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}