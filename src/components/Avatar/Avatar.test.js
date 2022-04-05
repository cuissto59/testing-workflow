import {render} from '@testing-library/react';
import {Avatar} from "./Avatar";
import React from "react";

describe("Avatar", () => {
  it("renders correctly", () => {
    // eslint-disable-next-line no-undef
    const {container} = render(React.createElement(Avatar, {
      src: "https://avatars2.githubusercontent.com/u/1234?s=460&v=4",
      alt: "Avatar"
    }));
    expect(container).toMatchSnapshot();
  });
});