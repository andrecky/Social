import React from 'react';
import ReactDOM from 'react-dom';
import AppCalculator from './AppCalculator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppCalculator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
