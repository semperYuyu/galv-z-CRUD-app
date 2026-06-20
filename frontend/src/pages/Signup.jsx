import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { submitSignUp } from "../components/functions/queryFunctions";

function Signup() {
  return (
    <>
      <h1> Signup </h1>
      <Form>
        <Form.Control type={"text"} placeholder={"username"} />
        <Form.Control type={"password"} placeholder={"password"} />
        <Form.Control type={"password"} placeholder={"password again"} />
        <Form>
          <Button onClick={() => submitSignUp()}>Submit</Button>
        </Form>
        <Link to={"/login"}> Already have an account? </Link>
      </Form>
    </>
  );
}

export default Signup;
