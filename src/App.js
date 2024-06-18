import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import AddEditMovie from './components/AddEditMovie';
import MovieDetails from './components/MovieDetails';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddEditMovie} />
          <Route path="/edit/:id" component={AddEditMovie} />
          <Route path="/movie/:id" component={MovieDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
