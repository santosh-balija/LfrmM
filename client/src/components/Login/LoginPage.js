/* eslint-disable jsx-a11y/href-no-hash */
import React, { useState, useEffect } from 'react';
import classes from './LoginPage.css';
import LfrmMImg from '../../assets/images/LfrmM.png';
import Auxillary from '../../hoc/Auxillary';
import CarouselComp from './Carousel';
import Modal from '../UI/Modal/Modal';

import TextInput from '../Forms/TextInput/TextInput';
import { useAuth } from './../Context/Auth';
import useTextInput from '../../Hooks/LoginHook';

const loginPage = (props) => {
  const { existingCookie } = useAuth();
  console.log(existingCookie);
  // Function which is called if the user is new
  const redirectToRegister = () => {
    props.history.push({
      pathname: '/register',
      email: state.email.value,
      password: state.password.value,
    });
  };
  // Function which is called if the user is already registered
  const redirectToHome = (name) => {
    console.log('Pushing Home Page on the stack');
    props.history.push({
      pathname: '/home',
      name: name,
    });
  };
  if (existingCookie !== undefined) {
    console.log(existingCookie);
    redirectToHome();
  }
  const { state, changeHandler, handleSubmit } = useTextInput(
    redirectToRegister,
    redirectToHome
  );
  // console.log(state);
  return (
    <Auxillary>
      <div className={classes.container1}>
        <div className={classes.leftDiv1}>
          <img src={LfrmMImg} alt='LfrmM Logo' />
        </div>
        <div className={classes.rightDiv1}></div>
      </div>
      <div className={classes.container3}>
        <CarouselComp />
      </div>
      <div className={classes.container2}>
        <div className={classes.dummyContainer}></div>
        <div className={classes.leftDiv2}>
          <br></br>
          <h1>
            <span className={classes.greenFontTitle}>Learn </span>
            <sub className={classes.yellowFont1}>f</sub>
            {/*<span style={{textDecoration: 'underline', textDecorationStyle: 'wavy', fontSize: '1px', textDecorationColor: 'rgb(219, 29, 54)'}}>*/}
            <span className={classes.yellowFontTitle}>rm </span>
            <span className={classes.redFontTitle}>Mistakes</span>
          </h1>
          <h2 style={{ marginTop: '-29px', color: '#2e3134' }}>
            Oops!! It is <span className={classes.greenFont}>Learn </span>
            <span className={classes.yellowFont2}>from </span>
            <span className={classes.redFont}>Mistakes</span>
            <p
              style={{
                color: '#2e3134',
                fontWeight: 'lighter',
                fontSize: '18px',
              }}
            >
              We made a mistake and corrected it. Wanna Learn from others
              mistakes??
            </p>
            <p>
              <span className={classes.yellowFont2}>STEP IN TO </span>{' '}
              <span className={classes.greenFont}>LEARN</span>
            </p>
          </h2>
        </div>
        <div className={classes.rightDiv2}>
          <h2>
            <span className={classes.yellowFont2}>Connect with </span>
            <span className={classes.greenFont}>Learners </span>
          </h2>
          <p style={{ color: 'gray', fontSize: '13px', marginTop: '-20px' }}>
            Login or Signup
          </p>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            {/* Custom input tag */}
            <TextInput
              type='text'
              name='email'
              placeholder='Email'
              value={state.email.value}
              onChange={changeHandler}
              invalid={
                state.email.touched &&
                !state.email.valid &&
                state.email.value.length > 0
                  ? 1
                  : 0
              }
            />
            {/* Check if the email is valid after the form submit */}
            {state.email.error ? (
              <p className={classes.error}>Invalid</p>
            ) : null}
            <TextInput
              type='password'
              name='password'
              placeholder='Password'
              value={state.password.value}
              onChange={changeHandler}
              invalid={
                state.password.touched &&
                !state.password.valid &&
                state.password.value.length > 0
                  ? 1
                  : 0
              }
            />
            {/* Check if the password is valid after the form submit */}
            {state.password.error ? (
              <p className={classes.error}>Invalid</p>
            ) : null}
            <a className={classes.links} href='#'>
              Forgot Password
            </a>
            <button className={classes.LoginBtn}>STEP IN TO LEARN</button>
          </form>
        </div>
      </div>
    </Auxillary>
  );
};

export default loginPage;
