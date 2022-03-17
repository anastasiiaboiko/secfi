import { render, screen } from "@testing-library/react";
import App from "./App";

test("App renders", () => {
    render(<App />);
    const headingElement = screen.getByText(/Secfi Currency Converter/i);
    expect(headingElement).toBeInTheDocument();
});
