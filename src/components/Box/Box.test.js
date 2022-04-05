import { render } from "@testing-library/react";
import Box from "./Box";

describe("Box test", () => {
  it("should match the snapshot when children and className not given", () => {
    const { container } = render(<Box />);
    expect(container).toMatchSnapshot();
  });

  it("should match the snapshot when children given", () => {
    const children = "Box";
    const { container } = render(<Box>{children}</Box>);
    expect(container).toMatchSnapshot();
  });

  it("should match the snapshot when className given", () => {
    const className = "text-red-500";
    const { container } = render(<Box className={className} />);
    expect(container).toMatchSnapshot();
  });

  it("should match the snapshot when children and className given", () => {
    const className = "text-red-500";
    const children = "Box";
    const { container } = render(<Box className={className}>{children}</Box>);
    expect(container).toMatchSnapshot();
  });
});
