import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Education from './education';
import Skills from './skills';
import Languages from './languages';
import Experience from './experience';
import Projects from './projects';
import Certifications from './certifications';
import Contact from './contact';
import Header from './header';
import Footer from './footer';
import Navbar from './navbar';
import './app.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/education" component={Education}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/languages" component={Languages}/>
          <Route path="/experience" component={Experience}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/certifications" component={Certifications}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;