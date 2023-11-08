import React from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../../store/auth-context';

// menu(decide to show li elements if IsLoggedIn = true)
const Navigation = ({ onLogout }) => {
  // get onLogout function from MainHeader
  return (
    <AuthContext.Consumer>
      {(context) => {
        // isLoggedIn will come from provider
        return (
          <nav className={classes.nav}>
            <ul>
              {context.isLoggedIn && (
                <li>
                  <a href='/'>Users</a>
                </li>
              )}
              {context.isLoggedIn && (
                <li>
                  <a href='/'>Admin</a>
                </li>
              )}
              {context.isLoggedIn && ( // execute logoutHandler
                <li>
                  <button onClick={onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
