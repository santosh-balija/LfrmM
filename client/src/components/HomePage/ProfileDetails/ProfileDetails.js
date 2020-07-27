import React from 'react';
import defaultProfilePic from './../../../assets/images/defaultProfilePic.png';
import classes from './ProfileDetails.css';

const profileDetails = (props) => {
  return (
    <div className={classes.profileDetails}>
      <img src={defaultProfilePic} className={classes.profileImage} />
      <span style={{ marginLeft: '10px', marginTop: '16px' }}>
        {props.name}
      </span>
    </div>
  );
};

export default profileDetails;
