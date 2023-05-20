import { React, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import NavbarNoSearch from "../components/NavbarNoSearch";

import GoogleOAuth from "../components/GoogleOAuth";
import "../styles/StyleLogin.css";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authAction";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    let data = JSON.stringify({
      email,
      password,
    });

    dispatch(login(data, navigate));
  };

  return (
    <>
      <NavbarNoSearch />
      <Container className="p-5 mt-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-light">Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-light">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="warning" type="submit" onClick={onSubmit}>
          Login
        </Button>

        <Row>
          <Col>
            <h4 className="text-center">Or</h4>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <GoogleOAuth buttonText="Login with Google 🌏" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
