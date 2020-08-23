import React from 'react';
import './App.scss';

import Header from './components/Header';
import Social from './components/Social';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <body>
          <Header/>
          <Social/>
          <Home/>
          <About/>
          <Experience/>
          <Contact/>
        </body>
      </div>
    );
  }
}

export default App;
