import { Button, Form } from "react-bootstrap";
import { submitNewItem, getUserId } from "./functions/queryFunctions";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const ModalContent = ({ cancel }) => {
  const navigate = useNavigate();
  const nameRef = useRef();
  const descRef = useRef();
  const quantRef = useRef();
  const errorRef = useRef();
  const userId = getUserId();
  return (
    <div>
      <h1> New Item </h1>
      <Form>
        <Form.Control
          type={"text"}
          placeholder={"Name (100 chars max)"}
          maxLength={100}
          ref={nameRef}
        />
        <Form.Control
          type={"text"}
          placeholder={"Description (100 chars max)"}
          maxLength={100}
          ref={descRef}
        />
        <Form.Control
          type={"number"}
          defaultValue={1}
          min={1}
          max={100}
          ref={quantRef}
        />
      </Form>
      <p className={"text-danger"} ref={errorRef}></p>
      <Form className={"d-flex gap-2"}>
        <Button
          onClick={async () => {
            errorRef.current.innerText = "";
            const req = await submitNewItem(
              userId,
              nameRef.current?.value,
              descRef.current?.value,
              quantRef.current?.value,
            );

            if (req.error) {
              errorRef.current.innerText = req.error;
              console.log(req.error)
              return;
            }
            window.location.reload()
            return;
          }}
        >
          {" "}
          Submit{" "}
        </Button>
        <Button onClick={cancel}> Close </Button>
      </Form>
    </div>
  );
};

export default ModalContent;
