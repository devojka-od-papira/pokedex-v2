import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../views/homePage/index';
import Detail from '../views/detailPage';
import NotFound from '../views/notFoundPage';
import '../style/reset.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/detail/:id" component={Detail} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
