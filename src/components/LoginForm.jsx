import React from 'react';
import UserProfile from './UserProfile';
import { withRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

function LoginForm(props) {
  var inputStyle =  {
    outline: 'none',
    border: 'none',
    borderRadius: '4px',
    padding: '10px',
    fontSize: '15px',
    width: '300px',
    backgroundColor: '#dddddd',
    margin: '5px 10% 10px 12.5%',
    textAlign: 'center',
  };
  var button = {
    outline: 'none',
    border: 'none',
    borderRadius: '4px',
    padding: '10px',
    fontSize: '20px',
    width: '320px',
    backgroundColor: '#fa8072',
    height: '45px',
    margin: '20px 30% 0 10%'
  };

  let _name = null;
  let _password = null;

  function handleUserLogin(event) {
    event.preventDefault();
    console.log('hi1');
    console.log(props.userList);
    Object.keys(props.userList).map(function(userId) {
      var user = props.userList[userId];
      console.log('hi2');
      console.log(user.name);
      console.log(_name.value);
      if (user.name == _name.value && user.password == _password.value) {
        return props.history.push('/myProfile');
      }
    });
    _name.value = ' ';
    _password.value = ' ';
  }

  return (
    <div className='divStyle4'>
      <form onSubmit={handleUserLogin} >
        <input
          style={inputStyle}
          type='text'
          id='name'
          placeholder='User name'
          ref={(input) => {_name = input;}} />
        <input
          style={inputStyle}
          type='text'
          id='password'
          placeholder='Password'
          ref={(input) => {_password = input;}}  />
        <button
          style={button}
          type='submit'>Login</button>
      </form>
  </div>

  );
}

LoginForm.propTypes = {
  userList: PropTypes.object
};

export default withRouter(LoginForm);
