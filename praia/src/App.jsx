// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="AppBody">
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter> 
    </div>
  );
}

export default App;


/*
 header - navegacao - logo; login/ entrar

corpo - foto do lugar , sections

footer - dados com endereço, telefone, instagram, tipo de pagamento, mapa, coisas assim

*/

/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
*/

