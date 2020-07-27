import React, { useState } from 'react';
import classes from './SavePost.css';

const savePost = (props) => {
  const [toggleSave, setToggleSave] = useState(false);
  const toggleHandler = () => {
    const prev_state = toggleSave;
    setToggleSave(!prev_state);
  };
  return (
    <button className={classes.savePostBtn} onClick={toggleHandler}>
      {toggleSave ? 'Saved' : 'Save'}
    </button>
  );
};

export default savePost;
