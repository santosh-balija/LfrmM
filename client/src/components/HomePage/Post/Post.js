import React from 'react';
import classes from './Post.css';
import Auxiliary from './../../../hoc/Auxillary';
import SaveButton from './SavedPost/SavePost';
import Report from './Report/Report';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import LfrmM from './LfrmM/LfrmM';
import ReactionsCount from './ReactionsCount/ReactionsCount';
import Reactions from './Reactions/Reactions';

import usePost from '../../../Hooks/PostHook';

const post = (props) => {
  // console.log(props);
  const { Learned, learnedClicked } = usePost(props);
  // console.log(Learned.count);
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
          Learned={Learned.count}
          Appreciate={props.Appreciate}
          Share={props.Share}
        />
        <Reactions {...props} learnedClicked={learnedClicked} />
      </div>
    </Auxiliary>
  );
};

export default post;
