import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    // const source = axios.CancelToken.source();
    const controller = new AbortController();
    const getListCountries = async () => {
      try {
        const { data } = await axios.get("https://restcountries.com/v2/all", {
          signal: controller.signal,
          // cancelToken: source.token,
        });
        setData(data);
      } catch (error) {
        console.log("Got Error");
      }
    };
    getListCountries();
    return () => {
      // source.cancel();
      controller.abort();
    };
  }, []);

  const renderedResults = data.map((country) => {
    return (
      <div key={country.numericCode} className="item">
        <div className="content">
          <div className="header">{country.name}</div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Country Name</label>
          <input
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
