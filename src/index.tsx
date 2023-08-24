import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Expenses from './routes/Expenses';
import Invoices from './routes/Invoices';
import Invoice from './routes/Invoice';
import ProtectedRoutes from './auth/ProtectedRoutes';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN as string}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID as string}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route element={<ProtectedRoutes />}>
              <Route path="expenses" element={<Expenses />} />
              <Route path="invoices" element={<Invoices />}>
                <Route
                  index
                  element={
                    <main style={{ padding: '1rem' }}>
                      <p>Select an invoice</p>
                    </main>
                  }
                />
                <Route path=":invoiceId" element={<Invoice />} />
              </Route>
              <Route
                path="*"
                element={
                  <main style={{ padding: '1rem' }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
