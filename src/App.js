import React, { useState, useEffect } from "react";
import Axios from "axios";

import Header from "./components/ui/header";
import SearchBar from "./components/ui/Search";
import CharacterGrid from "./components/characters/CharacterGrid";

import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await Axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <SearchBar getQuery={(q)=>setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
