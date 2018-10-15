import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';


import Shelf from '../components/shelf/Shelf';
import Footer from '../components/Footer';
import FloatCart from './../components/floatCart/FloatCart';

import store from '../store';
import Corner from '../components/github/Corner';
import Header from '../components/Header'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header></Header>
          <Corner />
          <main>
            <Shelf />
          </main>
          <Footer />
          <FloatCart />
        </div>
      </Provider>
    )
  }
}

export default App;
