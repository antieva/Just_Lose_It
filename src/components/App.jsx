import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import { Button } from 'reactstrap';
import LandingPage from './LandingPage';
import UserProfile from './UserProfile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: {
        '0': {
          name: 'janeDoe',
          password: '123qwe'
        },
        '1': {
          name: 'johnDoe',
          password: '1234qwer'
        }
      }
    };
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={()=><LandingPage userList={this.state.userList} />} />
          <Route path='/myProfile' userList={this.state.userList} component={UserProfile} />
        </Switch>
      </div>
    );
  }
}

export default App;
