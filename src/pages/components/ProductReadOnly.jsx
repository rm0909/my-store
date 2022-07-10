import { Context } from "/Users/COMPUTADOR/Documents/GitHub/my-store/src/context/ContextProvider.jsx";
import { useContext } from "react";
import {Card} from "react-bootstrap"
function ProductReadOnly(props) {
  const { userIDContext } = useContext(Context);
  return (
    <Card key={Date.now()} onClick={props.handleClick} className="product">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.desc}</Card.Text>
      <Card.Text>quant:{props.quant} | price: ${props.price}</Card.Text>
      <Card.Text></Card.Text>
      </Card.Body>
      
      <Card.Img src={props.image} />
      {userIDContext === props.author && <p>It is your item</p>}
    </Card>
  );
}
export { ProductReadOnly };
