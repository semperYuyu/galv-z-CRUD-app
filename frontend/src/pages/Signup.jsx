import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { submitSignUp } from "../components/functions/queryFunctions";
import { useRef } from "react";

function Signup() {
  const navigate = useNavigate();
  const firstRef = useRef();
  const lastRef = useRef();
  const userRef = useRef();
  const passwordRef = useRef();
  const passwordVerifyRef = useRef();
  const errorRef = useRef();

  return (
    <>
      <h1> Signup </h1>
      <Form className={"d-flex flex-column"} style={{ width: "500px" }}>
        <Form.Control type={"text"} placeholder={"first name"} ref={firstRef} />
        <Form.Control type={"text"} placeholder={"last name"} ref={lastRef} />
        <Form.Control type={"text"} placeholder={"username"} ref={userRef} />
        <Form.Control
          type={"password"}
          placeholder={"password"}
          ref={passwordRef}
        />
        <Form.Control
          type={"password"}
          placeholder={"password again"}
          ref={passwordVerifyRef}
        />
        <p className={"text-danger"} ref={errorRef}></p>
        <Form>
          <Button
            onClick={async () => {
              errorRef.current.innerText = "";
              const res = await submitSignUp(
                firstRef.current?.value,
                lastRef.current?.value,
                userRef.current?.value,
                passwordRef.current?.value,
                passwordVerifyRef.current?.value,
              );

              if (res.error) {
                errorRef.current.innerText = res.error;
                return;
              }

              navigate("/");
            }}
          >
            Submit
          </Button>
        </Form>
        <Link to={"/login"}> Already have an account? </Link>
      </Form>
    </>
  );
}

export default Signup;
