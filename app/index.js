import React from 'react';
import { render } from 'react-dom';
import { Router,browserHistory} from 'react-router';
import routes from './routes/index.jsx';

import 'bootstrap/dist/css/bootstrap.css';

let root = document.getElementById('app');
render(
  <Router routes={routes} history={browserHistory} />, root
);
