import React, { useState } from "react"; 

const Joke = () => {
    // Step 1 always Intiialize 
    const [Joke, setJoke] = useState("");

    // step 2 : Fetch or define onChange etc
    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
        .then((response) => response.json())
        .then((data) => setJoke(data.joke)); 
    }


    return (
        <div className="joke">
            <button onClick={fetchApi}>Click to Generate a Joke.</button>
            <p>{Joke}</p>
        <h1>Joke.jsx</h1>
        </div>
    )
}

export default Joke; 