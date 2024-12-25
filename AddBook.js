import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
    const [book, setBook] = useState({
        booktitle: '',
        PubYear: '',
        author: '',
        Topic: '',
        formate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook((prevBook) => ({
            ...prevBook,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/addbooks', book)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error('There was an error adding the book!', error);
            });
    };

    return (
        <div>
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="booktitle" placeholder="Book Title" value={book.booktitle} onChange={handleChange} />
                <input type="number" name="PubYear" placeholder="Publication Year" value={book.PubYear} onChange={handleChange} />
                <input type="text" name="author" placeholder="Author" value={book.author} onChange={handleChange} />
                <input type="text" name="Topic" placeholder="Topic" value={book.Topic} onChange={handleChange} />
                <input type="text" name="formate" placeholder="Format" value={book.formate} onChange={handleChange} />
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;
