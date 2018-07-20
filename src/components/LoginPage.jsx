import React from 'react';
import './LoginPage.css';
import CreationForm from './CreationForm';
import LoginForm from './LoginForm'

function LoginPage(){
  return (
    <div>
      <style jsx global>{`
        .homePageStyle {
          height: 100%;
          width: 100%;
          background-color: rgb(0, 0, 0);
          background-image: url(https://s.pinimg.com/webapp/style/images/bg_multi_case_grid_no_text_white_55_percent-2000ab22.jpg); background-size: cover;
          padding-bottom: 300px;
          position: fixed;
          animation: scrollBgGridLinks 35s linear forwards; background-position: 0px -700px;
        }
        .homePage {
          bottom: 0px;
          left: 0px;
          right: 0px;
          top: 0px;
          position: absolute;
          background-color: rgba(0, 0, 0, 0.498039); background-position: initial initial; background-repeat: initial initial;
        }
      `}</style>
      <div className='homePageStyle'></div>
      <div className='homePage'></div>
        <div className='signUpWindow'>
          <div className='divStyle1 _0 _25 _2s _2h'>
              <div className='divStyle2'>
                <div className='divStyle3'>
                  <div className='divMargin'>
                    <CreationForm />
                  </div>
                  <p className='Or'>Or</p>
                  <LoginForm />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
