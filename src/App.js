import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TopHeader from './TopHeader/TopHeader'
import HomeSlider from './HomeSlider/HomeSlider'
import About from './Pages/About'
import Contact from './Pages/Contact'
import { UserForm } from "./Formcomponent/UserForm"
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <TopHeader/>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/signup">
            <UserForm />
          </Route>
          <Route path="/myaccount">
            <div>MyAccount</div>
          </Route>
          <Route path="/">
             <HomeSlider/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
