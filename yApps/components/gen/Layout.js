import React from "react";
import { Button, Container } from "semantic-ui-react";
import MenuBar from "./MenuBar.js";

const Layout = (props) => {
  return (
    <Container>
      <MenuBar />

      {props.children}
    </Container>
  );
};

export default Layout;
