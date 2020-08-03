import React, { useState, useRef } from 'react';
import classes from './SubComments.css';
import NewComment from './../NewComment/NewComment';
import defaultProfilePic from '../../../../assets/images/defaultProfilePic.png';
import Auxillary from '../../../../hoc/Auxillary';

const SubComments = (props) => {
  const subSubComment = useRef('');
  const [show, setShow] = useState(false);

  const commentChangeHandlerForSub = (event) => {
    subSubComment.current = event.target.value;
  };

  const replyToSubComments = (indexOfSubComment) => {
    const subComment = subSubComment.current;
    const newSubSubComment = {
      commentId: 53,
      profileName: 'PNameSub',
      designation: 'DesigSub',
      institute: 'InstSub',
      comment: subComment,
    };
    console.log(props.mainCommentIndex, props.subCommentIndex);
    setShow(false);
    props.replyToSubComment(
      newSubSubComment,
      props.mainCommentIndex,
      props.subCommentIndex
    );
  };
  const replyCommentHandler = (event) => {
    setShow(true);
  };
  return (
    <Auxillary>
      <div className={classes.replyCommentDiv}>
        <img src={defaultProfilePic} className={classes.profileImage} />
        <div className={classes.commentsFromDB}>
          <a href='#' className={classes.reportBtnForComment}>
            Report
          </a>
          <h5
            style={{
              marginTop: '5px',
              marginBottom: '0px',
              fontWeight: 'lighter',
            }}
          >
            {props.subCommentData.profileName}
          </h5>
          <h6
            style={{
              marginTop: '0px',
              marginBottom: '5px',
              fontWeight: 'lighter',
              color: 'gray',
            }}
          >
            {props.subCommentData.designation} at{' '}
            {props.subCommentData.institute}
          </h6>
          <h5
            style={{
              marginTop: '10px',
              marginBottom: '5px',
              fontWeight: 'lighter',
            }}
          >
            {props.subCommentData.comment}
          </h5>
        </div>
      </div>
      <div className={classes.replyBtnCommentDiv} id='replyCommentDivId'>
        <button
          className={classes.replyCommentBtn}
          onClick={replyCommentHandler}
        >
          Reply
        </button>
        {show ? (
          <NewComment
            replyComment={true}
            appendNewComment={replyToSubComments}
            commentChangeHandler={commentChangeHandlerForSub}
            newComment={subSubComment.current}
          />
        ) : null}
      </div>
    </Auxillary>
  );
};

export default SubComments;
