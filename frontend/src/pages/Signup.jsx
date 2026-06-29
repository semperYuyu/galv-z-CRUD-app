import { Form, Button, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { submitSignUp } from "../components/functions/queryFunctions";
import { useRef, useState } from "react";

function Signup() {
  const navigate = useNavigate();
  const firstRef = useRef();
  const lastRef = useRef();
  const userRef = useRef();
  const passwordRef = useRef();
  const passwordVerifyRef = useRef();
  const errorRef = useRef();
  const [spinnerVisible, setSpinnerVisible] = useState(false);

  return (
    <div
      className={
        "d-flex flex-column align-items-center justify-content-center gap-5"
      }
    >
      <h1> Create New Account </h1>
      <Form className={"d-flex flex-column gap-2"} style={{ width: "500px" }}>
        <Form.Control type={"text"} placeholder={"First name"} ref={firstRef} />
        <Form.Control type={"text"} placeholder={"Last name"} ref={lastRef} />
        <Form.Control type={"text"} placeholder={"Username"} ref={userRef} />
        <Form.Control
          type={"password"}
          placeholder={"Password"}
          ref={passwordRef}
        />
        <Form.Control
          type={"password"}
          placeholder={"Password again"}
          ref={passwordVerifyRef}
        />
        <p className={"text-danger"} ref={errorRef}></p>
        <Spinner animation={"border"} hidden={!spinnerVisible} />
        <Form
          className={
            "d-flex flex-column align-items-center justify-content-center gap-2"
          }
        >
          <Button
            onClick={async () => {
              errorRef.current.innerText = "";
              setSpinnerVisible(true);
              const res = await submitSignUp(
                firstRef.current?.value,
                lastRef.current?.value,
                userRef.current?.value,
                passwordRef.current?.value,
                passwordVerifyRef.current?.value,
              );

              if (res.error) {
                errorRef.current.innerText = res.error;
                setSpinnerVisible(false);
                return;
              }

              navigate("/");
            }}
          >
            Sign Up
          </Button>
          <Link to={"/login"}> Already have an account? </Link>
        </Form>
      </Form>
    </div>
  );
}

export default Signup;
