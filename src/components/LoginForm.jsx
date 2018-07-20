import React from 'react';

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

  function handleUserLogin(event) {
    event.preventDefault();
    props.onLogin({name: _name.value, password: _password.value});
    _name.value = ' ';
    _password.value = ' ';
  }
  return (
    <div className='divStyle4'>
      <form onSubmit={handleUserLogin}>
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
