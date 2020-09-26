import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from "./components/Landing"
import Context from "./components/Context"
import Axios from "axios"
import Results from "./components/Results"
import Searching from "./components/Searching"


function App() {
  const [searchStr, setSearchStr] = useState();
  const [results, setResults] = useState();
  const [resultsDis, setResultsDis] = useState(false);
  const [fetching, setFetching] = useState(false);
  const searchFunc = (str)=>{
    setFetching(true);
    Axios.get(`https://images-api.nasa.gov/search?q=${str}`)
    .then((res)=>{
      console.log(res.data.collection.items)
      setResults(res.data.collection.items)
      setFetching(false);
      setResultsDis(true);
    })
  }
  return (
    <div className="App">
      <Context.Provider value={{searchFunc, results}}>
        {fetching ? <Searching/> : (resultsDis ? (<div><Landing/><Results/></div>): <Landing/>)}
      </Context.Provider>
    </div>
  );
}

export default App;
