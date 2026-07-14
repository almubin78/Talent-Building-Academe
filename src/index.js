import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import PrivateApp from './PrivateAdvertismentApp';
// import DailyRoutine from './MyRoutine/DailyRoutine';
// import PassportHomePage from './PassportHomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <PassportHomePage/> */}
   <PrivateApp/>
   {/* <DailyRoutine/> */}
  </React.StrictMode>
);

reportWebVitals();
