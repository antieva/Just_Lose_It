import React from 'react';
import UserProfile from './UserProfile';

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
    let usersList = props.usersList;
    console.log('hi1');
    console.log(props);
    usersList.forEach((user) => {
      if (user.name == _name.value && user.password == _password.value) {
        console.log('hi2');
        console.log(user.name);
        <Route path='/myProfile' user={user} usersList={this.usersList} component={UserProfile} />
      } else {
        alert('User name or password is incorrect');
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

export default LoginForm;
