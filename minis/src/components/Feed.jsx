import React, {useEffect, useState } from 'react'; 
import axios from 'axios'; 
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {

        fetchFromAPI("books")
        .then((data) => {
            console.log("Fetched Data:", data); 
            if (data) {
                setBooks(data);
            }
        })
        .catch((error) => console.error("Error fetching books:", error));

        // const fetchBooks = async () => {
        //     try {
        //         const response = await axios.get("https://simple-books-api.glitch.me/books");
        //         console.log("Fetched Data :", response.data); 
        //         setBooks(response.data); 
        //     } catch (error) {
        //         console.error("Error fetching books:", error);
        //     }
        // };

        // fetchBooks(); 
    }, []); 

    return (
        <div>
            <h2>Book Feed</h2>
            {books.length > 0 ? (
                <ul>
                    {books.map((book, id) => (
                        <li key={id}>{book.name} and {book.type}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading books...</p>
            )} 
        </div>
    ) 
}

export default Feed; 