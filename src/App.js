import React from 'react';
import './App.scss';

import Header from './components/Header';
import Social from './components/Social';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Modal from './components/Modal';

class App extends React.Component {
  state = {
    modal: false
  };

  openModal = () => {
    this.setState({modal:true});
  };

  closeModal = () => {
    this.setState({modal:false});
  };

  render () {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <body>
          <Modal closeModal={this.closeModal} modal={this.state.modal}/>
          <Header/>
          <Social openModal={this.openModal}/>
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
