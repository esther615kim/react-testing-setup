import { render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts from 0', () => {
  render(<App />);
  //use Screen Object to get the target element (by ID)
  const counterElement = screen.getByTestId("counter");
  // check if the value of the element is 0.
  expect(counterElement).toHaveTextContent(0);
});
