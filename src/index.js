import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebfontLoader from '@dr-kobros/react-webfont-loader';
import registerServiceWorker from './registerServiceWorker';

const fontConfig = {
  google: {
    families: ['Dosis:300,400,500'],
  }
};

const fontCallback = status => {
  console.log('Fonts ⇀⎯ ⚡️')

  // I could hook the webfont status to for example Redux here.
};



ReactDOM.render(
  <WebfontLoader config={fontConfig} onStatus={fontCallback}>
    <App />
  </WebfontLoader>,
  document.getElementById('root')
);
registerServiceWorker();
