import { Form } from "react-bootstrap"

function ViewAll() {
  return (
    <>
      <h1> ViewAll </h1>
      <Form>
        <Form.Control type={"text"} placeholder={"Filter by name..."} />
      </Form>
    </>
  );
}

export default ViewAll;
