import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary';
import classes from './Register.css';

import TextInput from '../Forms/TextInput/TextInput';
import useRegister from './../../Hooks/RegisterHook';
import InterestButton from './../Interests/InterestButton/InterestButton';
import { Link } from 'react-router-dom';

const RegisterPage = (props) => {
  let data;
  // To display the information the user has given in the login page, if he is a new user
  if (props.location.email) {
    data = {
      email: props.location.email,
      password: props.location.password,
    };
  } else {
    data = {
      email: '',
      password: '',
    };
  }

  // Callback function which is called if the user is successfully registered
  const redirectToHome = (name) => {
    console.log('Pushing Home Page on the stack');
    props.history.push({
      pathname: '/home',
      name: name,
    });
  };

  const {
    state,
    changeHandler,
    InterestChangeHandler,
    registerClickHandler,
  } = useRegister(redirectToHome, data);

  // Array to store the form values in state
  const formElementsArray = [];
  for (let key in state) {
    if (key == 'error') {
      continue;
    }
    if (key !== 'interestes') {
      formElementsArray.push({
        id: formElementsArray.length,
        name: key,
        properties: state[key],
      });
    }
  }

  return (
    <Auxillary>
      <div className={classes.registerDiv}>
        <h2 style={{ textAlign: 'center' }}>
          <span className={classes.yellowFont2}>Register to </span>
          <span className={classes.greenFont}>Learn</span>
        </h2>
        <form onSubmit={registerClickHandler}>
          <div className={classes.namesDiv}>
            {formElementsArray.map((formElement) => (
              <div key={formElement.id} style={{ display: 'block' }}>
                {/* Component to display the form elements  */}
                <TextInput
                  kind='register'
                  type={formElement.properties.type}
                  name={formElement.name}
                  placeholder={formElement.properties.placeholder}
                  onChange={changeHandler}
                  value={formElement.properties.value}
                  invalid={
                    state[formElement.name].touched &&
                    !state[formElement.name].valid &&
                    state[formElement.name].value.length > 0
                      ? 1
                      : 0
                  }
                />
                {state[formElement.name].error ? (
                  <span className={classes.error}>Invalid</span>
                ) : null}
              </div>
            ))}
          </div>
          <h2 style={{ textAlign: 'center' }}>
            <span className={classes.yellowFont2}>Interests</span>
          </h2>
          {state.interestes.map((interest, index) => (
            // Component to display the interests
            <InterestButton
              name={interest.interest_name}
              key={index}
              select={interest.selected}
              onClicked={(event) => InterestChangeHandler(event, index)}
            />
          ))}
          <Link to='/' className={classes.anchorTag}>
            &#8810; back to login
          </Link>
          <button
            className={classes.registerBtn}
            onClick={this.registerButtonHandler}
          >
            Register
          </button>
        </form>
      </div>
    </Auxillary>
  );
};
// }

export default RegisterPage;
