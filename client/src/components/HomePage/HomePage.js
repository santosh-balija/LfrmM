import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary';
import classes from './HomePage.css';
import PageLayout from './../PageLayout/PageLayout';
import useHomePage from './../../Hooks/HomePageHook';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import { useAuth } from './../Context/Auth';

const homePage = (props) => {
  let name = localStorage.getItem('user_name');
  if (props.location.name) {
    name = props.location.name;
    localStorage.setItem('user_name', name);
  }
  const { state, togglePostModal, posts } = useHomePage(name);
  const existingTokens = useAuth();
  // const postsArray = [];
  console.log(posts);
  // for (let index in posts) {
  //   let post = posts[index];
  //   console.log(post._id);
  // }
  posts.map((post) => console.log(post));
  console.log('Home Page rendered');
  return (
    <Auxillary>
      <PageLayout {...props}>
        <div className={classes.body}>
          <NewPost
            showPostModal={state.showPostModal}
            togglePostModal={togglePostModal}
            name={state.name}
          />
          {posts.map((post) => (
            <Post name={state.name} key={post._id} {...post} />
          ))}
          {/* <Post name={state.name} /> */}
        </div>
      </PageLayout>
    </Auxillary>
  );
};

export default homePage;
