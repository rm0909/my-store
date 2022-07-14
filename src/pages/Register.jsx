import { Form, Container } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { baseURL } from "../helper/url.js";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseURL}/user/register`, {
        name: name,
        email: email,
        password: password,
      });
      console.log("user registered", response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container style={{ width: "300px"}}>
      <Form onSubmit={handleRegister}>
        <Form.Group>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="text"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            required
          />
        </Form.Group>

        <Form.Control type="submit" value="Create" />
      </Form>
    </Container>
  );
}
export { Register };
