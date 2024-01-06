import { render, screen } from '@testing-library/react';
import About from '../Components/Pages/About';


test('Name', ()=>{
  render(<About/>);
  const linkElement = screen.getByText(/Soubarnika/);
  expect(linkElement).toBeInTheDocument();
})
