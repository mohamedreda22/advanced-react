import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a link that points to Little Lemon Webpage', () => {
  render(<App />);
  const linkElement = screen.getByText("Little Lemon Resturant");
  expect(linkElement).toBeInTheDocument();
});
