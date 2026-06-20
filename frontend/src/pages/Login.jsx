import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { submitLogin } from "../components/functions/queryFunctions";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login", { replace: true });
  }, []);
  return (
    <>
      <h1> Login </h1>
      <Form className={"d-flex flex-column"} style={{ width: "500px" }}>
        <Form.Control type={"text"} placeholder={"username"} />
        <Form.Control type={"password"} placeholder={"password"} />
        <Form>
          <Button onClick={() => submitLogin()}> Submit </Button>
        </Form>

        <Link to={"/signup"}> Don't have an account? </Link>
      </Form>
    </>
  );
}

export default Login;
