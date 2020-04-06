import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const Navbar = () => {
    const { books } = useContext(BookContext) //const BooksContext = useContext(BookContext) 
    console.log('test: ', books)

    return (
        <div className='navbar'>
            <h1>Reading List</h1>
            <p>Currently you have {books.length} books to read...</p>
        </div>
    )
}

export default Navbar