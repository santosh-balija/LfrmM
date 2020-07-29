import React from 'react';
import classes from './Reactions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShare,
  faCommentAlt,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';

const reactions = (props) => {
  // const { learnedClicked   } = useReactions(props);
  return (
    <div className={classes.postReactionsDiv}>
      <button
        className={classes.postReactionsBtns}
        onClick={props.learnedClicked}
      >
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
        <FontAwesomeIcon icon={faCommentAlt} color='gray' size='xs' /> Comment
      </button>
    </div>
  );
};
export default reactions;
