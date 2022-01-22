import React from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import QueryNavLink from '../QueryNavLink';
import { getInvoices } from '../data';
import styles from './Invoices.module.css';

const Invoices: React.FC = () => {
  const invoices = getInvoices();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className={styles.main}>
      <nav className={styles.navigation}>
        <input
          value={searchParams.get('filter') || ''}
          placeholder="Filter by name"
          onChange={(event) => {
            const filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {invoices
          .filter((invoice) => {
            const filter = searchParams.get('filter');
            if (!filter) return true;
            const name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => (
            <QueryNavLink
              key={invoice.number}
              to={`/invoices/${invoice.number}`}
              className={({ isActive }: any) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              {invoice.name}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default Invoices;
