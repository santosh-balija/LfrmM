import React from 'react';
import classes from './LfrmM.css';

const mistake = (props) => {
  let classname;
  if (props.name === '#Mistake') {
    classname = classes.redFont;
  } else {
    classname = classes.greenFont;
  }
  return (
    <div>
      <h4 className={classes.heading}>
        <span className={classname}>{props.name}</span>
      </h4>
      <label style={{ paddingLeft: '10px' }}>{props.description}</label>
    </div>
  );
};

export default mistake;
