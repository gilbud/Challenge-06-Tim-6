import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerLoginWithGoogle } from "../redux/actions/authAction";
import { Button } from "react-bootstrap";

function GoogleOAuth({ buttonText }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginRegisterWithGoogle = useGoogleLogin({
    onSuccess: (responseGoogle) =>
    dispatch(registerLoginWithGoogle(responseGoogle.access_token, navigate)),
  });

  return (
    <Button variant="warning" onClick={() => loginRegisterWithGoogle()}>
      {buttonText}
    </Button>
  );
}

export default GoogleOAuth;
