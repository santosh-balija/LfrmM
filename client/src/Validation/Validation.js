/* eslint-disable default-case */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import React from 'react';

const validation = (value, rules) => {
  let isValid = true;

  const emailValidator = (value) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  };

  const passwordValidator = (value) => {
    let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return re.test(value);
  };

  for (let rule in rules) {
    switch (rule) {
      case 'isRequired':
        isValid = isValid && value.trim() !== '';
        break;
      case 'minLength':
        isValid = isValid && value.length >= rules[rule];
        break;
      case 'isEmail':
        isValid = isValid && emailValidator(value);
        break;
      case 'isPassword':
        isValid = isValid && passwordValidator(value);
        break;
    }
  }
  return isValid;
};

export default validation;
