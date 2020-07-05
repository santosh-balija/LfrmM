import React from 'react';
import classes from './Post.css';
import Auxiliary from './../../../hoc/Auxillary';
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
        {/* Save Button */}
        <button
          className={classes.savePostBtn}
          value='1'
          id='savePost_Btn'
          // onClick={this.saveBtnHandler.bind(this)}
        >
          Save
        </button>
        {/* DropDown */}
        <div className={classes.dropdown}>
          <button className={classes.reportPostBtn}>Report</button>
          <div className={classes.dropdownContent}>
            <a href='#'>
              <h5
                style={{
                  paddingBottom: '-10px',
                  marginBottom: '-20px',
                  marginTop: '0px',
                }}
              >
                Block this post
              </h5>
              <h6
                style={{
                  marginBottom: '-5px',
                  marginTop: '17px',
                  fontWeight: 'lighter',
                  color: 'gray',
                }}
              >
                This post is offensive
              </h6>
            </a>
            <a href='#'>
              <h5
                style={{
                  paddingBottom: '-10px',
                  marginBottom: '-20px',
                  marginTop: '0px',
                }}
              >
                Irrelevant post
              </h5>
              <h6
                style={{
                  marginBottom: '-5px',
                  marginTop: '17px',
                  fontWeight: 'lighter',
                  color: 'gray',
                }}
              >
                Not relevant to this community
              </h6>
            </a>
            <a href='#'>
              <h5
                style={{
                  paddingBottom: '-10px',
                  marginBottom: '-20px',
                  marginTop: '0px',
                }}
              >
                Hide post
              </h5>
              <h6
                style={{
                  marginBottom: '0px',
                  marginTop: '17px',
                  fontWeight: 'lighter',
                  color: 'gray',
                }}
              >
                I don't want to see this post
              </h6>
            </a>
          </div>
        </div>
        {/* Profile Details */}
        <div className={classes.profileDetails}>
          <img src={defaultProfilePic} className={classes.profileImage} />
          <span
            style={{
              marginLeft: '10px',
              marginTop: '16px',
              display: 'inline',
            }}
          >
            {props.name}
          </span>
        </div>
        {/* Mistake Div */}
        <div>
          <h4
            className={classes.heading}
            // style={{
            //   marginTop: '15px',
            //   marginBottom: '3px',
            //   textAlign: 'left',
            //   paddingLeft: '10px',
            // }}
          >
            <span className={classes.redFont}>#Mistake</span>
          </h4>
          <label style={{ paddingLeft: '10px' }}>
            This is my Mistake. Hope you do not make it as I did, as it screwed
            me.
          </label>
        </div>
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
