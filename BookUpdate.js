import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookUpdate = () => {
    const { id } = useParams();
    const [book, setBook] = useState({
        booktitle: '',
        PubYear: '',
        author: '',
        Topic: '',
        formate: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:5000/getbook/${id}`)
            .then((response) => {
                setBook(response.data);
            })
            .catch((error) => {
                console.error('There was an error fetching the book!', error);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook((prevBook) => ({
            ...prevBook,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:5000/updatebook/${id}`, book)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error('There was an error updating the book!', error);
            });
    };

    return (
        <div>
            <h2>Update Book</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="booktitle" placeholder="Book Title" value={book.booktitle} onChange={handleChange} />
                <input type="number" name="PubYear" placeholder="Publication Year" value={book.PubYear} onChange={handleChange} />
                <input type="text" name="author" placeholder="Author" value={book.author} onChange={handleChange} />
                <input type="text" name="Topic" placeholder="Topic" value={book.Topic} onChange={handleChange} />
                <input type="text" name="formate" placeholder="Format" value={book.formate} onChange={handleChange} />
                <button type="submit">Update Book</button>
            </form>
        </div>
    );
};

export default BookUpdate;
