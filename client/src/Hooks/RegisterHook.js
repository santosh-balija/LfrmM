import React, { useState, useEffect } from 'react';
import Validate from '../Validation/Validation';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useAuth } from './../components/Context/Auth';

const useRegister = (redirectToHome, data) => {
  // To export the function setCookie from the AuthContext file
  const { setCookie } = useAuth();
  // State to store the user information
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
    designation: {
      type: 'text',
      placeholder: 'Designation',
      value: '',
      valid: false,
      touched: false,
      validationRules: {
        isRequired: true,
        minLength: 3,
      },
      error: false,
    },
    institute: {
      type: 'text',
      placeholder: 'Institute',
      value: '',
      valid: false,
      touched: false,
      validationRules: {
        isRequired: true,
        minLength: 3,
      },
      error: false,
    },
    interestes: [],
  });

  // To get the information regarding the interests from database
  useEffect(() => {
    const getInterests = async () => {
      try {
        const interestes = await axios.get('/interests');
        const prev = {
          ...state,
        };
        prev.interestes = interestes.data.interests;
        setstate((prevState) => ({
          ...prevState,
          ...prev,
        }));
      } catch (e) {
        console.log(e);
      }
    };
    // async function to run inside useEffect
    getInterests();
  }, []);

  // Fuction to handle the change event on the information entered by the user
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

  // Function to handle the change in the interests by the user
  const InterestChangeHandler = (event, index) => {
    event.preventDefault();
    let interest_name = event.target.textContent;
    const tick = interest_name.substring(
      interest_name.length - 1,
      interest_name.length + 1
    );
    if (tick === '\u2713') {
      interest_name = interest_name.substring(0, interest_name.length - 2);
    }
    const isSelected = state.interestes[index].selected;
    const previousState = { ...state };
    const prevStateInterests = [...previousState.interestes];
    const prevStateSelectedInterest = { ...prevStateInterests[index] };
    prevStateSelectedInterest.selected = !isSelected;
    prevStateInterests[index] = prevStateSelectedInterest;
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
    // console.log(prev);
    setstate((prevState) => ({
      ...prevState,
      ...prev,
    }));
  };

  // Function to handle when the user clicks on register button
  const registerClickHandler = async (event) => {
    event.preventDefault();
    // callback();
    console.log('Ok I am executing');
    const selected_interests = [];
    for (let key in state.interestes) {
      if (state.interestes[key].selected) {
        selected_interests.push(state.interestes[key]._id);
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
          designation: state.designation.value,
          institute: state.institute.value,
        };
        const res = await axios.post('/register', data);
        // Get the value of the token set by the response from above statement
        const cookie = Cookies.get('Lfrm-jwt-token');
        // Set the cookie value in the AuthContext
        setCookie(cookie);
        // redirect the user to the home page on sucessfull register
        redirectToHome(res.data.name);
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
