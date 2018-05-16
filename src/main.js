import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import injectTapEventPlugin from 'react-tap-event-plugin';

// injectTapEventPlugin();

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('mount')
  );
});