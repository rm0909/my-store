import {Form, Image, Button, Container} from "react-bootstrap"

function PostForm(props) {
  return (
    <Container Fluid>
      <h4 className="text-align">Post</h4>
      <Form onSubmit={props.handleSubmit}>
        <Form.Group className="mb-3">
        <Form.Label htmlFor="titleInput">
          Title
          <Form.Control
            onChange={props.onChangeTitle}
            id="titleInput"
            type="text"
            required
          />
        </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label htmlFor="descInput">
          Description
          <Form.Control as="textarea" rows={9}
            id="descInput"
            placeholder="describe your product"
            required
          />
        </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label htmlFor="priceInput">
          {" "}
          Price
          <Form.Control
            onChange={props.onChangePrice}
            id="priceInput"
            type="number"
            required
            min="0.00"
            max="10000.00"
            step="0.01"
          />
        </Form.Label>
        </Form.Group>
        <Form.Group>
        <Form.Label htmlFor="quantityInput">
          {" "}
          Quantity
          <Form.Control
            onChange={props.onChangeQuantity}
            id="quantityInput"
            type="number"
            required
            min="1"
            max="999"
          />
        </Form.Label>
        </Form.Group>
        <Form.Group>
        <Form.Label htmlFor="fileInput">
          Image
          <Form.Control
            id="fileInput"
            onChange={props.onChangeImage}
            type="file"
            required
            accept="image/png, image/jpeg, image/jpg, image/jfif"
          />
        </Form.Label>
        </Form.Group>
        <Image
          src={props.image}
          style={{ maxWidth: "150px", maxHeight: "150px" }}
        />
        {props.button === "Post" ?<Button variant="primary" type="submit">{props.button}</Button> : <Button variant="warning">{props.button}</Button>}
      </Form>
      </Container>
  );
}

export {PostForm}