import React from 'react';
import classes from './PageLayout.css';
import { Route, Switch, Link } from 'react-router-dom';
import Auxiliary from './../../hoc/Auxillary';
import LfrmMImg from '../../assets/images/LfrmM.png';
import HomePage from './../HomePage/HomePage';

import usePageLayout from './../../Hooks/PageLayoutHook';

const pageLayout = (props) => {
  const redirectToSelectedMenu = (menu) => {
    props.history.push({ pathname: `${menu}` });
  };

  const { state, linkClicked } = usePageLayout(redirectToSelectedMenu);
  const menuItemsArray = [];
  for (let menu in state) {
    if (menu != 'prevSelected') {
      menuItemsArray.push({
        name: menu,
        selected: state[menu].selected,
      });
    }
  }

  return (
    <Auxiliary>
      <div className={classes.body}>
        <div className={classes.header}>
          <img
            src={LfrmMImg}
            alt='LfrmM Logo'
            height='56'
            width='100'
            style={{ position: 'absolute' }}
          />
          <input
            className={classes.searchInput}
            type='text'
            name='searchInp'
            placeholder='Search...'
          />
          <a className={classes.logoutLink}>Logout</a>
          <div className={classes.container}>
            <div className={classes.left}>
              {menuItemsArray.map((menuItem, index) => (
                <Link
                  className={classes.sideMenu}
                  style={
                    menuItem.selected ? { color: 'green' } : { color: 'black' }
                  }
                  key={index}
                  to={`${menuItem.name}`}
                  onClick={linkClicked}
                >
                  {menuItem.name}
                </Link>
              ))}
            </div>
            <div className={classes.right}></div>
          </div>
        </div>
        <div className={classes.middle}>{props.children}</div>
      </div>
    </Auxiliary>
  );
};

export default pageLayout;
