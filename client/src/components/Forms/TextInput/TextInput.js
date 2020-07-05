import React, { useState } from 'react';
import classes from './TextInput.css';
import Auxillary from '../../../hoc/Auxillary';

const textInput = (props) => {
  let class_name = [];

  if (props.kind === 'register') {
    class_name.push(classes.Input_Register);
  } else {
    class_name.push(classes.Input_Login);
  }
  if (props.invalid) {
    class_name.push(classes.invalid);
  } else {
    class_name.push(classes.valid);
  }

  return (
    <Auxillary>
      <input className={class_name.join(' ')} {...props} />
    </Auxillary>
  );
};

export default textInput;
