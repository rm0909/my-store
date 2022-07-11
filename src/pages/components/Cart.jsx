import { Row, Col, Container, Button, Card } from "react-bootstrap";

function Cart(props) {
  return (
    <>
      <h4>Cart</h4>
      <div>
        {props.cartItems.map((item, index) => {
          return (
            <Container key={index}>
              <Row className="width">
                <Card>
                  {" "}
                  <Col>
                    <Card.Img src={item.image}></Card.Img>
                    <Card.Footer>
                      Buy {item.title} for ${item.price}
                    </Card.Footer>
                  </Col>
                  <Col>
                    <Button className="primary">Buy</Button>
                  </Col>
                </Card>
              </Row>
            </Container>
          );
        })}
      </div>
    </>
  );
}
export { Cart };
