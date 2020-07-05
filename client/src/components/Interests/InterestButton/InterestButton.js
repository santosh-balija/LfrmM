import React from 'react';
import classes from './InterestButton.css';

const interestButton = (props) => {
  let class_name;
  if (props.select) {
    class_name = classes.interestButton_Selected;
  } else {
    class_name = classes.interestButton;
  }

  return (
    <button type='button' className={class_name} onClick={props.onClicked}>
      {props.name}
      {props.select ? <span> &#10003;</span> : <span></span>}
    </button>
  );
};

export default interestButton;
