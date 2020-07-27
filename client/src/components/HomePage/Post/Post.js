import React from 'react';
import classes from './Post.css';
import Auxiliary from './../../../hoc/Auxillary';
import SaveButton from './SavedPost/SavePost';
import Report from './Report/Report';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import Mistake from './Mistake/Mistake';
import defaultProfilePic from '../../../assets/images/defaultProfilePic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShare,
  faCommentAlt,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';

const post = (props) => {
  return (
    <Auxiliary>
      <div className={classes.userPosts}>
        <span style={{ float: 'right', color: 'green', fontSize: '20px' }}>
          &#10003;
        </span>
        <SaveButton />
        <Report />
        <ProfileDetails name={props.name} />
        <Mistake />
        {/* Learning Div */}
        <div>
          <h4 className={classes.heading}>
            <span className={classes.greenFont}>#Learning</span>
          </h4>
          <label style={{ paddingLeft: '10px' }}>This is my Learning</label>
        </div>
        <div className={classes.postReactionsCountDiv}>
          <span className={classes.postReactionsCount}>5 &#128161;</span>
          <span className={classes.postReactionsCount}>10 &#128079;</span>
          <span className={classes.postReactionsCount}>
            2{' '}
            <FontAwesomeIcon icon={faShare} color='rgb(244,200,7)' size='xs' />
          </span>
          <span className={classes.postReactionsCount}>
            5 <FontAwesomeIcon icon={faCommentAlt} color='gray' size='xs' />
          </span>
        </div>
        <div className={classes.postReactionsDiv}>
          <button className={classes.postReactionsBtns}>
            &#128161; Learned
          </button>
          <button className={classes.postReactionsBtns}>
            &#x1f44f; Appreciate
          </button>
          <button className={classes.postReactionsBtns}>
            <FontAwesomeIcon icon={faShare} color='rgb(244,200,7)' size='xs' />{' '}
            Share
          </button>
          <button className={classes.postReactionsBtns}>
            <FontAwesomeIcon icon={faCommentAlt} color='gray' size='xs' />{' '}
            Comment
          </button>
        </div>
      </div>
    </Auxiliary>
  );
};

export default post;
