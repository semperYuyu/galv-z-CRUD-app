import { Form, Button, Spinner } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { submitLogin } from "../components/functions/queryFunctions";

function Login() {
  const navigate = useNavigate();
  const userRef = useRef();
  const passwordRef = useRef();
  const errorRef = useRef();
  const [spinnerVisible, setSpinnerVisible] = useState(false);

  useEffect(() => {
    navigate("/login", { replace: true });
  }, []);

  return (
    <>
      <h1> Login </h1>
      <Form className={"d-flex flex-column"} style={{ width: "500px" }}>
        <Form.Control type={"text"} placeholder={"username"} ref={userRef} />
        <Form.Control
          type={"password"}
          placeholder={"password"}
          ref={passwordRef}
        />
        <p className={"text-danger"} ref={errorRef}></p>
        <Spinner animation={"border"} hidden={!spinnerVisible} />
      </Form>
      <Form>
        <Button
          onClick={async () => {
            errorRef.current.innerText = "";
            setSpinnerVisible(true);
            const res = await submitLogin(
              userRef.current?.value,
              passwordRef.current?.value,
            );

            if (res.error) {
              errorRef.current.innerText = res.error;
              setSpinnerVisible(false);
              return;
            }

            navigate("/");
          }}
        >
          {" "}
          Submit{" "}
        </Button>
      </Form>

      <Link to={"/signup"}> Don't have an account? </Link>
    </>
  );
}

export default Login;
