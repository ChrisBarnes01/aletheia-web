import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';



import Home from './pages/home/home.jsx'
import Footer from './components/footer/footer.jsx'
import Navbar from './components/navbar/navbar.jsx'
import About from './pages/about/about.jsx'
import Blog from './pages/blog/blog.jsx'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/footer" component={Footer}/>
          <Route path='/about' component={About}/>
          <Route path='/blog' component={Blog}/>



        </div>
      </Router>
    );
  }
}


export default App;
