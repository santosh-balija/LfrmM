import React from 'react';
import classes from './NewPost.css';
import PostModal from '../PostModal/PostModal';
import defaultProfilePic from './../../../assets/images/defaultProfilePic.png';

const newPost = (props) => {
  return (
    <div>
      <div className={classes.postLearning} onClick={props.togglePostModal}>
        <div className={classes.profileDetails}>
          <img src={defaultProfilePic} className={classes.profileImage} />
          <span style={{ marginLeft: '10px', marginTop: '16px' }}>
            {props.name}
          </span>
        </div>
        <div
          className={classes.contentDiv}
          id='editable'
          contentEditable='true'
          placeholder="Wanna share your learning...Let's post it "
          style={{ paddingLeft: '10px' }}
        ></div>
        <button className={classes.postBtn} disabled>
          Post
        </button>
      </div>
      {props.showPostModal ? (
        <PostModal
          showPostModal={props.showPostModal}
          closePostModal={props.togglePostModal}
        />
      ) : null}
    </div>
  );
};

export default newPost;
