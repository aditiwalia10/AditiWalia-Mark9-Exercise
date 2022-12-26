import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Motivation: [
    { name: "Life's Amazing secrets ", rating: "5/5" },
    { name: "The way of Monk ", rating: "5/5" },
    { name: "The power of Positive Thinking ", rating: "4/5"},
  ],

  Spritiual: [
    {
      name: " Bhagwad Geeta",
      rating: "5/5"
    },
    {
      name: "  Ramayana ",
      rating: "5/5"
    },
    {
      name: "The Art of Happiness ",
      rating: "5/5"
    }
  ],
  Comics: [
    {
      name: "Batman the Killing joke   ",
      rating: "3.5/5"
    },
    {
      name: "All star superman",
      rating: "5/5"
    },
    {
      name: "Watchmen",
      rating: "3/5"
    }
  ],
  Fashion: [
    {
      name: "The Fashion Book",
      rating: "4/5"
    },
    {
      name: "GUCCI, The making of",
      rating: "5/5"
    },
    {
      name: "The Glass of Fashion",
      rating: "3/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📘 Recommended Books </h1>
      <p style={{ fontSize: "1rem" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#115e59",
              borderRadius: "1rem",
              padding: "1rem  1rem",
              border: "1px solid teal",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre]?.map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #075985",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
