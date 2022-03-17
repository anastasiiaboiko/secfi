import { render, screen } from "@testing-library/react";
import Form from "../components/Form";

test("Form renders", () => {
    render(<Form />);
    const buttonElement = screen.getByText(/Convert/i);
    expect(buttonElement).toBeInTheDocument();
});
