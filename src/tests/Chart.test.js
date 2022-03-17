import { render, screen } from "@testing-library/react";
import Chart from "../components/Chart";

test("Chart container renders", () => {
  render(<Chart />);
  const rechartsContainer = screen.getByTestId("recharts");
  expect(rechartsContainer).toBeInTheDocument();
});