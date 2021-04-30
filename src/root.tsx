import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InspectionCreatePage from './components/inspectionCreatePage';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/inspections/new" render={InspectionCreatePage} />
      </Switch>
    </Router>
  );
};

export default Root;
