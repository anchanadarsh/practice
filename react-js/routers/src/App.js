import React, { Component } from 'react';
import Navbar from './components/navbar';
import { BrowserRouter, Route } from "react-router-dom";
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
