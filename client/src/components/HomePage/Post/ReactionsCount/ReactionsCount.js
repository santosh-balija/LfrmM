import React from 'react';
import classes from './ReactionsCount.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShare,
  faCommentAlt,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';

const reactionsCount = (props) => {
  return (
    <div className={classes.postReactionsCountDiv}>
      <span className={classes.postReactionsCount}>
        {props.Learned} &#128161;
      </span>
      <span className={classes.postReactionsCount}>
        {props.Appreciate} &#128079;
      </span>
      {/* <span className={classes.postReactionsCount}>
        {props.shareCount}{' '}
        <FontAwesomeIcon icon={faShare} color='rgb(244,200,7)' size='xs' />
      </span> */}
      <span className={classes.postReactionsCount}>
        {props.Comments}{' '}
        <FontAwesomeIcon icon={faCommentAlt} color='gray' size='xs' />
      </span>
    </div>
  );
};

export default reactionsCount;
