import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../../store/auth-context';

// menu(decide to show li elements if IsLoggedIn = true)
const Navigation = () => {
  const { isLoggedIn, onLogout } = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {isLoggedIn && (
          <li>
            <a href='/'>Users</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a href='/'>Admin</a>
          </li>
        )}
        {isLoggedIn && ( // execute logoutHandler
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
