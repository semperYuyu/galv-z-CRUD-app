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
    <div className={"d-flex flex-column justify-content-center align-items-center gap-5"}>
      <h1> Login to Existing Account </h1>
      <Form className={"d-flex flex-column gap-2"} style={{ width: "500px" }}>
        <Form.Control type={"text"} placeholder={"Username"} ref={userRef} />
        <Form.Control
          type={"password"}
          placeholder={"Password"}
          ref={passwordRef}
        />
        <p className={"text-danger"} ref={errorRef}></p>
        <Spinner animation={"border"} hidden={!spinnerVisible} />
      </Form>
      <Form className={"d-flex flex-column align-items-center gap-2"}>
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
          Login{" "}
        </Button>
      <Link to={"/signup"}> Don't have an account? </Link>
      </Form>

    </div>
  );
}

export default Login;
