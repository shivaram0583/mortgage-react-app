import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListMortgageComponent from './components/ListMortgageComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateMortgageComponent from './components/CreateMortgageComponent';
import UpdateMortgageComponent from './components/UpdateMortgageComponent';
import ViewMortgageComponent from './components/ViewMortgageComponent';
import SearchMortgageComponent from './components/SearchMortgageComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListMortgageComponent}></Route>
                          <Route path = "/mortgage" component = {ListMortgageComponent}></Route>
                          <Route path = "/add-mortgage/_add" component = {CreateMortgageComponent}></Route>
                          <Route path = "/view-mortgage/:id" component = {ViewMortgageComponent}></Route>
                          <Route path = "/add-mortgage/:id" component = {UpdateMortgageComponent}></Route> 
                          <Route path = "/search-mortgage/:id" component = {SearchMortgageComponent}></Route>
                          </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
