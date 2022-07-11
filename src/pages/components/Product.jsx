import { Context } from "/Users/COMPUTADOR/Documents/GitHub/my-store/src/context/ContextProvider.jsx";
import { useContext } from "react";
import {Card ,Alert, Button} from "react-bootstrap"
function Product(props) {
  const { userIDContext } = useContext(Context);
  return (
    <Card key={Date.now()} onClick={props.handleClick} className="product">
      <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.desc}</Card.Text>
      <Card.Text>Price: ${props.price}</Card.Text>
      </Card.Body>
      <Card.Img src={props.image} />
      {userIDContext !== props.author ? (
        <Button
          onClick={() =>
            props.handleCart(
              props.title,
              props.desc,
              props.quant,
              props.price,
              props.image,
              props.id
            )
          }
        >
          Add to cart
        </Button>
      ) : (
        <Alert variant="info">It is your item</Alert>
      )}
    </Card>
  );
}
export { Product };
