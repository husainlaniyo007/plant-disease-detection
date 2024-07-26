import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UploadPage from './pages/UploadPage';
import ResultPage from './pages/ResultPage';
import UserPage from './pages/UserPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/upload" component={UploadPage} />
        <Route path="/results" component={ResultPage} />
        <Route path="/user" component={UserPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;

