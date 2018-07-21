import React from 'react';

function CreationForm(props) {
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
  let _passwordAgain = null;

  function handleNewUserFormSubmission(event) {
    event.preventDefault();
    props.onNewUserCreation({name: _name.value, password: _password.value});
    _name.value = ' ';
    _password.value = ' ';
    _passwordAgain.value = ' ';
  }
  return (
    <div className='divStyle4'>
      <form onSubmit={handleNewUserFormSubmission}>
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
          placeholder='Create password'
          ref={(input) => {_password = input;}}  />
        <input
          style={inputStyle}
          type='text'
          id='retypePassword'
          placeholder='Retype password'
          ref={(input) => {_passwordAgain = input;}}  />
        <button
          style={button}
          type='submit'>Create</button>
      </form>
  </div>

  );
}

export default CreationForm;
