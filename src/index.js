import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import PrivateApp from './PrivateAdvertismentApp';
// import PassportHomePage from './PassportHomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <PassportHomePage/> */}
   <PrivateApp/>
  </React.StrictMode>
);

reportWebVitals();
