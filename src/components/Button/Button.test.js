import Button from "./Button";
import {render} from "@testing-library/react";

describe("Button", () => {
  it("renders correctly", () => {
    const {container} = render(<Button type="primary" size="xs"  />);
    expect(container).toMatchSnapshot();
  });
});