import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteBook from './Delete_Book'; // Import DeleteBook component

const DisplayData = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Fetch books from the backend
        axios.get('http://localhost:5000/allbooks')
            .then((response) => {
                setBooks(response.data);
            })
            .catch((error) => {
                console.error('There was an error fetching the books!', error);
            });
    }, []);

    // Function to handle deletion from the UI after deletion request is successful
    const handleDelete = (bookId) => {
        setBooks(books.filter((book) => book._id !== bookId)); // Remove the book from UI
    };

    return (
        <div>
            <h2>Book List</h2>
            <ul>
                {books.map((book) => (
                    <li key={book._id}>
                        {book.booktitle} - {book.author}
                        <DeleteBook bookId={book._id} onDelete={handleDelete} /> {/* Delete button */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayData;
