import React from 'react';
import Row from './Row';
import './App.css';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Lest build netclone</h1>
      <Row title="Trending Now" getUrl ={requests.getTrending}/>
      <Row title="NETFLIX Originals" getUrl ={requests.getOriginals}/>
    </div>
  );
}

export default App;
