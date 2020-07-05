import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary';
import classes from './Register.css';

import TextInput from '../Forms/TextInput/TextInput';
import useRegister from './../../Hooks/RegisterHook';
import InterestButton from './../Interests/InterestButton/InterestButton';

const RegisterPage = (props) => {
  let data;
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
  console.log(data);
  const registerHandler = async () => {};

  const {
    state,
    changeHandler,
    InterestChangeHandler,
    registerClickHandler,
  } = useRegister(registerHandler, data);

  console.log(state);
  const formElementsArray = [];
  const interestsArray = [];
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
    } else {
      for (let k in state[key]) {
        interestsArray.push({
          name: state[key][k].name,
          selected: state[key][k].selected,
        });
      }
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
          {/* <div></div> */}
          <div className={classes.namesDiv}>
            {formElementsArray.map((formElement) => (
              <div key={formElement.id} style={{ display: 'block' }}>
                <TextInput
                  kind='register'
                  // key={formElement.id}
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
          {interestsArray.map((interest, index) => (
            <InterestButton
              name={interest.name}
              key={index}
              select={interest.selected}
              onClicked={InterestChangeHandler}
            />
          ))}
          <a className={classes.anchorTag} href='/'>
            &#8810; back to login
          </a>
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
