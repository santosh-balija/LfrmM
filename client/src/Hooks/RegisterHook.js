import React, { useState, useEffect } from 'react';
import Validate from '../Validation/Validation';
import axios from 'axios';

const useRegister = (callback, data) => {
  const [state, setstate] = useState({
    email: {
      type: 'email',
      placeholder: 'Email',
      value: data.email,
      valid: true,
      touched: false,
      validationRules: {
        isRequired: true,
        isEmail: true,
        minLength: 3,
      },
      error: false,
    },
    password: {
      type: 'password',
      placeholder: 'Password',
      value: data.password,
      valid: true,
      touched: false,
      validationRules: {
        isRequired: true,
        minLength: 8,
      },
      error: false,
    },
    fname: {
      type: 'text',
      placeholder: 'First Name',
      value: '',
      valid: false,
      touched: false,
      validationRules: {
        isRequired: true,
        minLength: 3,
      },
      error: false,
    },
    lname: {
      type: 'text',
      placeholder: 'Last Name',
      value: '',
      valid: false,
      touched: false,
      validationRules: {
        isRequired: true,
        minLength: 3,
      },
      error: false,
    },
    interestes: {
      Coding: {
        id: 1,
        name: 'Coding',
        selected: false,
      },
      Algorithms: {
        id: 2,
        name: 'Algorithms',
        selected: false,
      },
      'Web Development': {
        id: 3,
        name: 'Web Development',
        selected: false,
      },
      'Machine Learning': {
        id: 4,
        name: 'Machine Learning',
        selected: false,
      },
      'Cyber Security': {
        id: 5,
        name: 'Cyber Security',
        selected: false,
      },
      'Cloud Computing': {
        id: 6,
        name: 'Cloud Computing',
        selected: false,
      },
    },
  });

  const changeHandler = (event) => {
    const newValue = event.target.value;
    const name = event.target.name;
    const latestState = {
      ...state,
    };
    const latestStateInput = {
      ...latestState[name],
    };

    latestStateInput.value = newValue;
    latestStateInput.touched = true;
    latestStateInput.valid = Validate(
      latestStateInput.value,
      latestStateInput.validationRules
    );
    if (latestStateInput.valid === true && latestStateInput.error === true) {
      latestStateInput.error = false;
    }

    latestState[name] = latestStateInput;
    setstate((prevState) => ({
      ...prevState,
      ...latestState,
    }));
  };
  const InterestChangeHandler = (event) => {
    event.preventDefault();
    let interest_name = event.target.textContent;
    const tick = interest_name.substring(
      interest_name.length - 1,
      interest_name.length + 1
    );
    if (tick === '\u2713') {
      interest_name = interest_name.substring(0, interest_name.length - 2);
    }
    const isSelected = state.interestes[interest_name].selected;
    const previousState = { ...state };
    const prevStateInterests = { ...previousState.interestes };
    const prevStateSelectedInterest = { ...prevStateInterests[interest_name] };
    prevStateSelectedInterest.selected = !isSelected;
    prevStateInterests[interest_name] = prevStateSelectedInterest;
    previousState.interestes = prevStateInterests;

    setstate((prevState) => ({
      ...prevState,
      ...previousState,
    }));
  };

  const validity = () => {
    const prev = { ...state };
    const prevEmail = { ...prev.email };
    const prevPassword = { ...prev.password };
    const prevLname = { ...prev.lname };
    const prevFname = { ...prev.fname };
    if (!state.email.valid) {
      prevEmail.error = true;
    } else {
      prevEmail.error = false;
    }
    if (!state.password.valid) {
      prevPassword.error = true;
    } else {
      prevPassword.error = false;
    }
    if (!state.lname.valid) {
      prevLname.error = true;
    } else {
      prevLname.error = false;
    }
    if (!state.fname.valid) {
      prevFname.error = true;
    } else {
      prevFname.error = false;
    }
    prev.email = prevEmail;
    prev.password = prevPassword;
    prev.lname = prevLname;
    prev.fname = prevFname;
    console.log(prev);
    setstate((prevState) => ({
      ...prevState,
      ...prev,
    }));
  };
  const registerClickHandler = async (event) => {
    event.preventDefault();
    // callback();
    console.log('Ok I am executing');
    const selected_interests = [];
    for (let key in state.interestes) {
      if (state.interestes[key].selected) {
        selected_interests.push(state.interestes[key].id);
      }
    }
    try {
      if (
        state.email.valid &&
        state.password.valid &&
        state.fname.valid &&
        state.lname.valid
      ) {
        var data = {
          email: state.email.value,
          password: state.password.value,
          fname: state.fname.value,
          lname: state.lname.value,
          selected_interests: selected_interests,
        };
        const res = await axios.post('/register', data);
      } else {
        validity();
      }
    } catch (err) {
      console.error(err);
    }
  };
  return { changeHandler, InterestChangeHandler, registerClickHandler, state };
};

export default useRegister;
