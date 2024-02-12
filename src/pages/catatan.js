import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function catatan() {
  return (
    <Row style={{ overflowX: "hidden", marginTop: "5%", marginLeft: "6%" }}>
      <Col>
        <Card style={{ width: "18rem" }}>
          
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvqIZ3cqvPD61C6d8y_etWRj1ZcBQ0vtISlg&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Nasi Goreng</Card.Title>
            <Card.Title>Rp 15.000</Card.Title>
            <Card.Text>
              Nasi goreng adalah makanan khas Indonesia yang terbuat dari nasi
              yang digoreng dalam minyak.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default catatan;
