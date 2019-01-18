import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery'
import 'babel-polyfill';


ReactDOM.render(<App />, document.getElementById('root'));


import('./inViewChecker')
.then(module => {
  $(window).on('scroll resize', module.check_if_in_view);
})


import('./mousewheelEvent')
.then(module => {
  module.startScrollEvent();
})
