import { Context } from "/Users/COMPUTADOR/Documents/GitHub/my-store/src/context/ContextProvider.jsx";
import { useContext } from "react";
import {Card,Alert} from "react-bootstrap"
function ProductReadOnly(props) {
  const { userIDContext } = useContext(Context);
  return (
    <Card key={props._id} onClick={props.handleClick} className="product container" style={{width: "300", height: "360px"}}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      <Card.Text>Price: ${props.price}</Card.Text>
      </Card.Body>
      
      <Card.Img src={props.image} />
      {userIDContext === props.author && <Alert variant="info">This product is yours!</Alert>}
    </Card>
  );
}
export { ProductReadOnly };
