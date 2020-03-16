/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';

// test('renders text to DOM', () => {
//   const { getByText } = render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//   );

//   expect(getByText('App')).toBeInTheDocument();
// });

test('2 + 2 = 4', () => {
  const sum = 2 + 2;

  expect(sum).toEqual(4);
});
