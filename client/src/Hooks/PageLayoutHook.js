import React, { useState, useEffect } from 'react';

const usePageLayout = (redirectToSelectedMenu) => {
  const [state, setState] = useState({
    Home: {
      selected: true,
    },
    Notifications: {
      selected: false,
    },
    Saved: {
      selected: false,
    },
    Profile: {
      selected: false,
    },
    Messages: {
      selected: false,
    },
    prevSelected: 'Home',
  });

  const linkClicked = (event) => {
    // console.log(event.target.textContent);
    event.preventDefault();
    const prev = { ...state };
    const menu = event.target.textContent;
    const prevSelectedMenu = prev.prevSelected;
    const prevSelectedState = prev[prevSelectedMenu];
    prevSelectedState.selected = false;
    prev[prevSelectedMenu] = prevSelectedState;
    prev.prevSelected = menu;
    const newSelectedState = prev[menu];
    newSelectedState.selected = true;
    prev[menu] = newSelectedState;
    setState((prevState) => ({
      ...prevState,
      ...prev,
    }));
    redirectToSelectedMenu(menu);
  };
  return { state, linkClicked };
};

export default usePageLayout;
