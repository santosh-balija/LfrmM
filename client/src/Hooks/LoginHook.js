import React, { useState, useEffect } from 'react';
import Validate from '../Validation/Validation';
import { useAuth } from './../components/Context/Auth';
import axios from 'axios';
import Cookies from 'js-cookie';

const useTextInput = (redirectToRegister, redirectToHome) => {
  const { setCookie } = useAuth();
  // State of the LoginPage Component
  const [state, setstate] = useState({
    email: {
      value: '',
      valid: false,
      touched: false,
      validationRules: {
        isRequired: true,
        isEmail: true,
        minLength: 3,
      },
      // To indicate the validity
      error: false,
    },
    password: {
      value: '',
      valid: false,
      touched: false,
      validationRules: {
        isRequired: true,
        minLength: 8,
      },
      // To indicate the validity
      error: false,
    },
  });

  // Function to handle changes to the values in the TextInput Tag in the LoginPage component
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
    // validity();
  };

  // Function to handle validity when the form is submitted
  const validity = () => {
    const prev = { ...state };
    const prevEmail = { ...prev.email };
    const prevPassword = { ...prev.password };
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
    prev.email = prevEmail;
    prev.password = prevPassword;
    setstate((prevState) => ({
      ...prevState,
      ...prev,
    }));
  };

  // Function to handle the form submit event
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Button CLicked');
    // Data to be sent to the backend to check for the user
    var data = {
      email: state.email.value,
      password: state.password.value,
    };
    try {
      // Check if the provided email and password are valid or not
      if (state.email.valid && state.password.valid) {
        // Check if the user is already registerd or not
        const res = await axios.post('/login', data);
        // If not registered redirect the user to the register page
        if (res.data.new_user) {
          redirectToRegister();
        } else if (res.password) {
        } else {
          const cookie = Cookies.get('Lfrm-jwt-token');
          setCookie(cookie);
          redirectToHome(res.data.name);
        }
      }
      // If the provided email and password are invalid then change the state 'error' of email and password
      else {
        validity();
      }
    } catch (err) {
      console.error(err);
    }
  };
  return { changeHandler, handleSubmit, state };
};

export default useTextInput;
