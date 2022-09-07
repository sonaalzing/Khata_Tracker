import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider }from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
  <SpeechProvider appId="7327f799-bdfb-44ed-bd73-2d4f16052e72" language ="en-US">
    <Provider>   
    <App /> ,
    </Provider>

  </SpeechProvider>,
document.getElementById('root') );
