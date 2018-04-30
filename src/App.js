import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
          <div className="App flex flex-column">
            <Header />
            <Main />
            <Footer />
          </div>
        );
    }
}

// connect component, state and dispatch actions with Redux. 
export default App;
