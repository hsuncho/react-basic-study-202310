import React from 'react';

import Navigation from '../Navigation/Navigation';
import classes from './MainHeader.module.css';

const MainHeader = ({ isAuthenticated, onLogout }) => {
  // data dstructuring (also available to get data using props)
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation
        isLoggedIn={isAuthenticated}
        onLogout={onLogout}
      />
    </header>
  );
};

export default MainHeader;
