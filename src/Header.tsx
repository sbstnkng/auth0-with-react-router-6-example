import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './Header.module.css';

const LoggedInGreeting: React.FC = () => {
  const { user, logout } = useAuth0();

  return (
    <div>
      <span>Hi, {user!.name}!</span>{' '}
      <button onClick={() => logout()}>Log out</button>
    </div>
  );
};

const Header: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className={styles.header}>
      <h1>Bookkeeper!</h1>
      {isAuthenticated && <LoggedInGreeting />}
      {!isAuthenticated && <span>Hello, stranger!</span>}
    </div>
  );
};

export default Header;
