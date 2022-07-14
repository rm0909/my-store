import { Row, Col, Container, Button, Card } from "react-bootstrap";

function Cart(props) {
  return (
    <Row>
      {props.cartItems.map((item, index) => {
        return (
          <Card key={index} style={{ width: "300px", margin: "1rem" }}>
            {" "}
            <Col>
              <Card.Img src={item.image}/>
              <Card.Footer>
                Buy {item.title} for ${item.price}
              </Card.Footer>
            </Col>
            <Row>
              <Button className="primary">Buy</Button>
            </Row>
          </Card>
        );
      })}
    </Row>
  );
}
export { Cart };
