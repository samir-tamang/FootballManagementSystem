import React from 'react';
import { useHistory } from 'react-router-dom';

const DsplyBk_fnCompt = ({ book }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/updatebook/${book._id}`);
    };

    return (
        <div>
            <h3>{book.booktitle}</h3>
            <p>Author: {book.author}</p>
            <button onClick={handleClick}>Update</button>
        </div>
    );
};

export default DsplyBk_fnCompt;
