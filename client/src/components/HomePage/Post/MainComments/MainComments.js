import React, { useRef, useState } from 'react';
import classes from './MainComments.css';
import defaultProfilePic from '../../../../assets/images/defaultProfilePic.png';
import NewComment from './../NewComment/NewComment';
import SubComments from './../SubComments/SubComments';

const MainComments = (props) => {
  const subComment = useRef('');
  const [show, setShow] = useState(false);
  const [postId, setPostId] = useState(props.postIdProp);
  const replyCommentHandler = (event) => {
    setShow(true);
  };
  const commentChangeHandlerForMain = (event) => {
    subComment.current = event.target.value;
  };

  const replyToMainComment = (event) => {
    console.log('In Main Comment');
    const commentText = subComment.current;
    console.log(commentText);
    const newComment = {
      commentId: 53,
      profileName: 'PNameSub',
      designation: 'DesigSub',
      institute: 'InstSub',
      comment: commentText,
    };
    setShow(false);
    props.replyToMainComment(newComment, props.indexOfMainComment);
  };
  return (
    <div style={{ marginTop: '15px', marginBottom: '15px' }}>
      <div className={classes.commentDiv}>
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
            {props.mainCommentData.profileName}
          </h5>
          <h6
            style={{
              marginTop: '0px',
              marginBottom: '5px',
              fontWeight: 'lighter',
              color: 'gray',
            }}
          >
            {props.mainCommentData.designation} at{' '}
            {props.mainCommentData.institute}
          </h6>
          <h5
            style={{
              marginTop: '10px',
              marginBottom: '5px',
              fontWeight: 'lighter',
            }}
          >
            {props.mainCommentData.comment}
          </h5>
        </div>
      </div>
      <div className={classes.replyBtnCommentDiv}>
        <button
          className={classes.replyCommentBtn}
          onClick={replyCommentHandler}
        >
          Reply
        </button>
        {show ? (
          <NewComment
            replyComment={true}
            appendNewComment={replyToMainComment}
            commentChangeHandler={commentChangeHandlerForMain}
            newComment={subComment.current}
          />
        ) : null}
      </div>
      {props.mainCommentData.subComments.map((eachSubComment, index) => (
        <SubComments
          subCommentData={eachSubComment}
          mainCommentIndex={props.indexOfMainComment}
          subCommentIndex={index}
          replyToSubComment={props.replyToSubComment}
        />
      ))}
    </div>
  );
};

export default MainComments;
