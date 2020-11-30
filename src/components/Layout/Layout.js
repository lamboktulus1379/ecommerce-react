import React from "react";
import { Row, Container } from "react-bootstrap";

const layout = (props) => {
  return (
    <Container>
      <Row>This is the place for the navigation component.</Row>
      <main>{props.children}</main>
    </Container>
  );
};
export default layout;
