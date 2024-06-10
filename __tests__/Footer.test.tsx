import { render,screen } from "@testing-library/react";

import Footer from "../app/footer/Footer";

describe("Footer component", () => {
 test("renders correct content", () => {

    render(<Footer />);
    expect(screen.getByText("Twitter page")).toBeInTheDocument();
    expect(screen.getByText("Facebook page")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
