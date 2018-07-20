import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import { Button } from 'reactstrap';
import LoginPage from './LoginPage';

function App(){
  return (
    <div>
      <LoginPage />
      <Switch>
      </Switch>
    </div>
  );
}

export default App;
