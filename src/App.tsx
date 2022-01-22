import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './App.module.css';
import Header from './Header';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <nav className={styles.navigation}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="/invoices"
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Invoices
        </NavLink>
        <NavLink
          to="/expenses"
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Expenses
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
