import { render, screen } from "@testing-library/react";
import Home from "./resources/views/Home";

test("renders learn react link", () => {
  render(<Home />);
  const email = screen.getByText(/re@rvnrstnsyh.dev/i);
  expect(email).toBeInTheDocument();
});
