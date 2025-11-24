import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Nav from "@/components/layout/Nav";

describe("Nav", () => {
  it("renders the MarketMind brand", () => {
    render(<Nav />);
    expect(screen.getByText("MarketMind")).toBeInTheDocument();
  });

  it("renders primary navigation links", () => {
    render(<Nav />);
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Features" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Docs" })).toBeInTheDocument();
  });
});
