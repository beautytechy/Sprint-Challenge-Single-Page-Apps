import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Character from "./Character"

// export default function SearchForm() {
//   const character = {Character}
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
  
//   useEffect(() => {
//     const results = character.filter(characterInfo =>
//       characterInfo.toLowerCase().includes(searchTerm)
//     );
//     setSearchResults(results);
//   }, [searchTerm]);
//   const handleChange = event => {

//     setSearchTerm(event.target.value);
//   };
//   return (
//     <section className="search-form">
//   <form>
       
//         <label for="name">Search:</label>
//         <input
//           id="name"
//           type="text"
//           name="textfield"
//           placeholder="Search"
//           value={searchTerm}
//           onChange={handleChange}
//         />
//       </form>
//     </section>
//   );
// }




