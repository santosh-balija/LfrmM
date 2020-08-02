import React from 'react';
import classes from './Reactions.css';
import ReactionsCount from './../ReactionsCount/ReactionsCount';
import Comment from './../Comment/Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShare,
  faCommentAlt,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';

import useReactions from '../../../../Hooks/ReactionsHook';

const reactions = (props) => {
  console.log(props);
  const {
    Learned,
    learnedClicked,
    appreciateClicked,
    commentClicked,
    Share,
    Appreciate,
    Comments,
  } = useReactions(props);
  return (
    <div className={classes.postReactionsDiv}>
      <ReactionsCount
        Learned={Learned.count}
        Appreciate={Appreciate.count}
        Comments={Comments.count}
      />
      <button
        className={
          Learned.add
            ? classes.postReactionsBtnsClicked
            : classes.postReactionsBtns
        }
        onClick={learnedClicked}
      >
        &#128161; Learned
      </button>
      <button
        className={
          Appreciate.add
            ? classes.postReactionsBtnsClicked
            : classes.postReactionsBtns
        }
        onClick={appreciateClicked}
      >
        &#x1f44f; Appreciate
      </button>
      <button
        className={
          Share.shared
            ? classes.postReactionsBtnsClicked
            : classes.postReactionsBtns
        }
      >
        <FontAwesomeIcon icon={faShare} color='rgb(244,200,7)' size='xs' />{' '}
        Share
      </button>
      <button className={classes.postReactionsBtns} onClick={commentClicked}>
        <FontAwesomeIcon icon={faCommentAlt} color='gray' size='xs' /> Comment
      </button>
      <Comment
        show={Comments.show}
        // postCommentHandler={commentClicked}
        {...props}
      />
    </div>
  );
};
export default reactions;
