import React from 'react';

import classes from './Navigation.module.css';

// menu(decide to show li elements if IsLoggedIn = true)
const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href='/'>Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href='/'>Admin</a>
          </li>
        )}
        {props.isLoggedIn && ( // execute logoutHandler
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
