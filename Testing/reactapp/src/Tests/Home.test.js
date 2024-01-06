import { render, screen } from '@testing-library/react';
import Home from '../Components/Pages/Home';

test('Skct', () => {
  render(<Home />);
  const linkElement = screen.getByText(/SKCT/);
  expect(linkElement).toBeInTheDocument();
});


