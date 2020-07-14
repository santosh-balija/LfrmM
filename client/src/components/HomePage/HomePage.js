import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary';
import classes from './HomePage.css';
import PageLayout from './../PageLayout/PageLayout';
import useHomePage from './../../Hooks/HomePageHook';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import { useAuth } from './../Context/Auth';
import Cookies from 'js-cookie';

const homePage = (props) => {
  let name = localStorage.getItem('user_name');
  if (props.location.name) {
    name = props.location.name;
    localStorage.setItem('user_name', name);
  }
  const { state, togglePostModal } = useHomePage(name);
  console.log(state);
  const existingTokens = useAuth();

  return (
    <Auxillary>
      <PageLayout {...props}>
        <div className={classes.body}>
          <NewPost
            showPostModal={state.showPostModal}
            togglePostModal={togglePostModal}
            name={state.name}
          />
          <Post name={state.name} />
        </div>
      </PageLayout>
    </Auxillary>
  );
};

//   saveBtnHandler = (event) => {
//     event.preventDefault();
//     var selectedBtnId = event.target.id;
//     if (selectedBtnId !== undefined) {
//       console.log(selectedBtnId);
//       var selectedBtnValue = event.target.value;
//       var control = document.getElementById(selectedBtnId);
//       var savePostStateCopy = this.state.savePostState.slice();
//       var btnText = control.innerText;
//       if (savePostStateCopy.includes(selectedBtnValue)) {
//         console.log(btnText);
//         btnText = btnText.substring(0, btnText.length - 3);
//         console.log(btnText);
//         control.innerText = btnText;
//         control.style.color = 'rgb(60, 154, 84)';
//         control.style.backgroundColor = 'white';
//         savePostStateCopy = savePostStateCopy.filter(
//           (item) => item !== selectedBtnValue
//         );
//       } else {
//         btnText = btnText + 'd' + ' ' + '&#10003;';
//         console.log(btnText);
//         control.innerHTML = btnText;
//         control.style.color = 'rgb(60, 154, 84)';
//         control.style.backgroundColor = 'white';
//         savePostStateCopy.push(selectedBtnValue);
//       }
//       console.log(savePostStateCopy);
//       this.setState({ savePostState: savePostStateCopy });
//     }
//   };

export default homePage;
