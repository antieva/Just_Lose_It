import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import { Button } from 'reactstrap';
import LandingPage from './LandingPage';
import UserProfile from './UserProfile';

function App(){
  let usersList = {
    '0': {
      name: 'janeDoe',
      password: '123qwe'
    },
    '1': {
      name: 'johnDoe',
      password: '1234qwer'
    }
  }
  return (
    <div>
      <Switch>
        <Route exact path='/' usersList={this.usersList} component={LandingPage} />
        <Route path='/myProfile' usersList={this.usersList} component={UserProfile} />
      </Switch>
    </div>
  );
}

export default App;
