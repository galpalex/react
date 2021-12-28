import React, { useState, useEffect } from "react";
import axios from "axios";

const Fetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getStarWarsData = async () => {
      try {
        const { data } = await axios.get("https://swapi.dev/api/films/1/");
        setData(data);
        console.log(data);
      } catch (error) {
        console.log("Got Error");
      }
    };
    getStarWarsData();
  }, []);

  return (
    <div>
      <h1>Movie title is: {data.title}</h1>
      <h1>Movie director is: {data.director}</h1>
    </div>
  );
};

export default Fetch;
