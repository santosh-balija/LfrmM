import React from 'react';
import classes from './Mistake.css';

const mistake = () => {
  return (
    <div>
      <h4 className={classes.heading}>
        <span className={classes.redFont}>#Mistake</span>
      </h4>
      <label style={{ paddingLeft: '10px' }}>
        This is my Mistake. Hope you do not make it as I did, as it screwed me.
      </label>
    </div>
  );
};

export default mistake;
