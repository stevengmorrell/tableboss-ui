import { render, screen } from "@testing-library/react";
import React from "react";
import NamePlate from "./NamePlate";

describe("NamePlate", () => {
  test("it should display the correct text", () => {
    render(<NamePlate name={"Paul"} army={"Ork"}/>);
    const name = screen.getByText(/Paul/i);
    const army = screen.getByText(/Ork/i);
    expect(name).toBeInTheDocument();
    expect(army).toBeInTheDocument();
  });
});
