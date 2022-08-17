import { render, screen } from "@testing-library/react";
import React from "react";
import NamePlate from "./NamePlate";

describe("NamePlate", () => {
  test("it should display the correct name", () => {
    render(<NamePlate name={"Paul"} />);
    const element = screen.getByText(/Paul/i);
    expect(element).toBeInTheDocument();
  });
});
