import React from 'react';
import classes from './NewPost.css';
import PostModal from '../PostModal/PostModal';
import ProfileDetails from '../ProfileDetails/ProfileDetails';

const newPost = (props) => {
  return (
    <div>
      <div className={classes.postLearning} onClick={props.togglePostModal}>
        <ProfileDetails name={props.name} />
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
          newPostSubmitHandler={props.newPostSubmitHandler}
          showPostModal={props.showPostModal}
          closePostModal={props.togglePostModal}
        />
      ) : null}
    </div>
  );
};

export default newPost;
