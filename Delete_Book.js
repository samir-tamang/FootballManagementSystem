import React from 'react';
import axios from 'axios';

const DeleteBook = ({ bookId, onDelete }) => {
    const deleteBook = () => {
        axios.post(`http://localhost:5000/deleteBook/${bookId}`)
            .then(() => {
                onDelete(bookId); // Notify the parent component to remove the book from UI
            })
            .catch((error) => {
                console.error('There was an error deleting the book!', error);
            });
    };

    return (
        <button onClick={deleteBook}>Delete</button>
    );
};

export default DeleteBook;
