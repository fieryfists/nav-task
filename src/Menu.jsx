import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState, useEffect } from "react";

const Menu = (props) => {
  const [menuItems, settMenuItems] = useState(props.menuItems || []);

  useEffect(() => {
    fetch("http://www.mocky.io/v2/5d3fec2b33000062009d27bc")
      .then((response) => response.json())
      .then((result) => settMenuItems(result));
  }, []);

  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Nav
      style={{ position: props.position }}
      variant="pills"
      activeKey="1"
      onSelect={handleSelect}
    >
      {menuItems.map((item) => (
        <React.Fragment key={item.id}>
          {item.subItems && item.subItems.length > 0 ? (
            <NavDropdown title={item.name} id={item.id} key={item.id}>
              {item.subItems.map((subItem) => (
                <NavDropdown.Item
                  eventKey={`${item.id}.${subItem.id}`}
                  key={subItem.id}
                  id={subItem.id}
                >
                  {subItem.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          ) : (
            <Nav.Item>
              <Nav.Link eventKey={`${item.id}`} key={item.id} id={item.id}>
                {item.name}
              </Nav.Link>
            </Nav.Item>
          )}
        </React.Fragment>
      ))}
    </Nav>
  );
};

export default Menu;
