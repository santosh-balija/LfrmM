import React from 'react';
import classes from './Post.css';
import Auxiliary from './../../../hoc/Auxillary';
import SaveButton from './SavedPost/SavePost';
import Report from './Report/Report';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import LfrmM from './LfrmM/LfrmM';
import ReactionsCount from './ReactionsCount/ReactionsCount';
import Reactions from './Reactions/Reactions';

const post = (props) => {
  console.log(props);
  return (
    <Auxiliary>
      <div className={classes.userPosts}>
        <span style={{ float: 'right', color: 'green', fontSize: '20px' }}>
          &#10003;
        </span>
        <SaveButton />
        <Report />
        <ProfileDetails name={props.name} />
        <LfrmM name='#Mistake' description={props.mistake} />
        <LfrmM name='#Learning' description={props.learning} />
        <ReactionsCount
          Learned={props.Learned}
          Appreciate={props.Appreciate}
          Share={props.Share}
        />
        <Reactions {...props} />
      </div>
    </Auxiliary>
  );
};

export default post;
