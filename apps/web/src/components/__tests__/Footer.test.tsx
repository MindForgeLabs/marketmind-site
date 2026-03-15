import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "@/components/layout/Footer";

describe("Footer", () => {
  it("shows the MarketMind description", () => {
    render(<Footer />);
    expect(
      screen.getByText(/validation-first algorithmic trading research platform/i),
    ).toBeInTheDocument();
  });

  it("shows privacy and terms links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "Privacy" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Terms" })).toBeInTheDocument();
  });
});
