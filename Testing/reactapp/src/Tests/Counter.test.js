import {screen, render, fireEvent} from "@testing-library/react";
import Counter from "../Components/Pages/Counter";

test("Counter", () => {
    render(<Counter/>);
    const linkElement = screen.getByText(/0/i);
    expect(linkElement).toBeInTheDocument();
});

test("Increase", () =>{
    render(<Counter/>);
    const linkElement = screen.getByText(/Increase/i);
    const countEle = screen.getByText(/0/);

    fireEvent.click(linkElement);

    expect(countEle).toHaveTextContent('1');
});

test("Decrease", () => {
    render(<Counter/>);
    const dec = screen.getByText(/Decrease/i);
    const countEle = screen.getByText(/0/);

    fireEvent.click(dec);

    expect(countEle).toHaveTextContent('-1');
})
