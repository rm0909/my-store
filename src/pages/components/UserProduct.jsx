import {Card, Button,Container} from "react-bootstrap"
function UserProduct(props) {
  return (
    <Container>
      <Card key={props.id} onClick={props.handleClick} className="product container">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        <Card.Text>Price: ${props.price}</Card.Text>
        <Card.Img src={props.image} />
        <Button variant="danger"onClick={props.handleDelete}>Delete</Button>
        <Button variant="secondary"onClick={props.handleEditState}>Edit</Button>
      </Card>
    </Container>
  );
}
export  {UserProduct};
