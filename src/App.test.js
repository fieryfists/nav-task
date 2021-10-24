import React from "react";
import ReactDOM from "react-dom";
import rendered from "react-test-renderer";
import Menu from "./Menu";

describe("Menu", () => {
  const props = {
    menuItems: [
      {
        id: 0,
        name: "Item0",
        subItems: [
          {
            id: 0,
            name: "SubMenu0",
          },
          {
            id: 1,
            name: "SubMenu1",
          },
          {
            id: 2,
            name: "SubMenu2",
          },
        ],
      },
      {
        id: 1,
        name: "Item1",
        subItems: [
          {
            id: 0,
            name: "SubMenu0",
          },
          {
            id: 1,
            name: "SubMenu1",
          },
          {
            id: 2,
            name: "SubMenu2",
          },
        ],
      },
      {
        id: 2,
        name: "Item2",
        subItems: [
          {
            id: 0,
            name: "SubMenu0",
          },
          {
            id: 1,
            name: "SubMenu1",
          },
        ],
      },
      {
        id: 3,
        name: "Item3",
      },
    ],

    position: "fixed"
  };

  it("renders", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Menu {...props} />, div);
  });

  test("snapshots", () => {
    const component = rendered.create(<Menu {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
