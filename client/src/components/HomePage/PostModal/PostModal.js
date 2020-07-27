import React, { useRef, useEffect } from 'react';
import classes from './PostModal.css';
import Modal from '../../UI/Modal/Modal';
import ContentEditable from 'react-contenteditable';

import usePostModal from '../../../Hooks/PostModalHook';

const postModal = (props) => {
  const redirectToHome = () => {
    props.closePostModal();
  };
  const {
    mistake,
    learning,
    mistakeChangeHandler,
    learningChangeHandler,
    newPostSubmitHandler,
    mistakeRef,
  } = usePostModal(redirectToHome);

  return (
    <Modal show={props.showPostModal}>
      <h2 className={classes.heading}>
        <span className={classes.yellowFont2}>Post </span>
        <span className={classes.greenFont}>Learning</span>
      </h2>
      <span onClick={props.closePostModal} className={classes.closeModalBtn}>
        &times;
      </span>
      <div>
        <h4 className={classes.mistake}>
          <span className={classes.redFont}>#Mistake</span>
        </h4>
        <ContentEditable
          className={classes.contentDiv}
          innerRef={mistakeRef}
          html={mistake.current}
          onChange={mistakeChangeHandler}
          placeholder='Express your misunderstanding if any, else post your learning below.'
          style={{ paddingLeft: '10px' }}
        />
        <div className={classes.attachments}></div>
      </div>
      <div>
        <h4 className={classes.learnig}>
          <span className={classes.greenFont}>#Learning</span>
        </h4>
        <ContentEditable
          className={classes.contentDiv}
          html={learning.current}
          placeholder="Hurray... I learned this new thing and hope it helps y'all. "
          onChange={learningChangeHandler}
          style={{ paddingLeft: '10px' }}
        />
        <div className={classes.attachments}></div>
      </div>
      <div>
        <input
          type='checkbox'
          id='anonymous'
          name='anonymousChkBtn'
          value='Anonymous'
          style={{ marginTop: '10px' }}
        />
        <label style={{ color: 'gray', fontSize: '13px' }}>
          Post as Anonymous
        </label>
        <button onClick={newPostSubmitHandler} className={classes.postBtn}>
          Post
        </button>
      </div>
    </Modal>
  );
};

export default postModal;
