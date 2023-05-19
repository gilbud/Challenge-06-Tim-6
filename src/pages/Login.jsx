import { React, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import NavbarNoSearch from "../components/NavbarNoSearch";
import axios from "axios";
import { toast } from "react-toastify";
import GoogleOAuth from "../components/GoogleOAuth";
import "../styles/StyleLogin.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = JSON.stringify({
        email,
        password,
      });

      let config = {
        method: "post",
        url: `${process.env.REACT_APP_API}/v1/auth/login`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      localStorage.setItem("token", token);

      // navigate("/");

      // Temporary solution
      window.location.href = "/";
    } catch (error) {
      toast.error(error.response.data.message);
    }
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
