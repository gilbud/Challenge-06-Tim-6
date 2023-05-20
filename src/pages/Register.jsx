import React, { useState } from "react";

import { Form, Button, Container, Row, Col } from "react-bootstrap";

import NavbarNoSearch from "../components/NavbarNoSearch";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import GoogleOAuth from "../components/GoogleOAuth";

import "../styles/StyleRegister.css";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    let data = JSON.stringify({
      name,
      email,
      password,
    });

    dispatch(register(data, navigate));
  };

  return (
    <>
      <NavbarNoSearch />
      <Container className="p-5 mt-5">
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label className="text-light">Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Name"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label className="text-light">Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
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
                Register
              </Button>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col>
            <h4 className="text-center">Or</h4>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <GoogleOAuth buttonText="Register with Google 🌏" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Register;
