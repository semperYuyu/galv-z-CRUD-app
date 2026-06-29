import { Button, Spinner, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useIndividualItemContext } from "../components/hooks/useIndividualItemContext";
import { useEffect, useState, useRef } from "react";
import {
  getUserId,
  editItem,
  deleteItem,
} from "../components/functions/queryFunctions";
function IndividualItem() {
  const navigate = useNavigate();
  const { itemId } = useIndividualItemContext();
  const userId = getUserId();
  const [data, setData] = useState();
  const [editable, setEditable] = useState(false);
  const url = import.meta.env.VITE_API_URL;
  const itemNameRef = useRef();
  const itemDescRef = useRef();
  const itemQuantRef = useRef();
  const errorRef = useRef();

  useEffect(() => {
    if (!itemId) navigate("/items");
    fetch(`${url}/items/${itemId}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, []);

  if (!data) return <Spinner animation={"border"} />;

  console.log(data)
  return (
    <div>
      <div className={"d-flex flex-row gap-2"}>
        <Button onClick={() => navigate("/items")} style={{ width: "70px" }}>
          {" "}
          Back{" "}
        </Button>
        {userId == data.user_id && (
          <Button
            onClick={() => (editable ? setEditable(false) : setEditable(true))}
            style={{ width: "70px", backgroundColor: "rgb(213, 108, 21)" }}
          >
            {" "}
            Edit{" "}
          </Button>
        )}

        {editable && (
          <Form className={"d-flex gap-2"}>
            <Button
              onClick={async () => {
                errorRef.current.innerText = "";
                const req = await editItem(
                  itemId,
                  itemNameRef.current?.value,
                  itemDescRef.current?.value,
                  itemQuantRef.current?.value,
                );

                if (!req.error) {
                  errorRef.current.innerText = req.error;
                }

                navigate("/");
              }}
              style={{ backgroundColor: "rgb(9, 148, 53)" }}
            >
              {" "}
              Submit{" "}
            </Button>

            <Button
              onClick={async () => {
                errorRef.current.innerText = "";
                const req = await deleteItem(itemId);

                if (req.error) {
                  errorRef.current.innerText = req.error;
                  return;
                }

                navigate("/");
              }}
              style={{ backgroundColor: "rgb(201, 1, 1)" }}
            >
              {" "}
              Delete{" "}
            </Button>
          </Form>
        )}
      </div>
      <p className={"text-danger"} ref={errorRef}></p>
      <h2>
        {" "}
        Viewing Details for{" "}
        <input
          defaultValue={data.item_name}
          style={{
            borderColor: "white",
            border: editable ? "" : "none",
            borderRadius: "15px",
          }}
          maxLength={100}
          readOnly={!editable}
          ref={itemNameRef}
        />{" "}
        {editable && "(100 char max)"}
      </h2>

      <p>
        {" "}
        Description:{" "}
        <input
          defaultValue={data.description}
          style={{
            borderColor: "white",
            border: editable ? "" : "none",
            borderRadius: "15px",
          }}
          maxLength={100}
          readOnly={!editable}
          ref={itemDescRef}
        />{" "}
        {editable && "(100 char max)"}
      </p>
      <p>
        {" "}
        Quantity:{" "}
        <input
          defaultValue={data.quantity}
          style={{
            borderColor: "white",
            border: editable ? "" : "none",
            borderRadius: "15px",
          }}
          type={editable ? "number" : "text"}
          min={1}
          max={100}
          readOnly={!editable}
          ref={itemQuantRef}
        />
        {editable && "(100 count max)"}
      </p>
      <p> Item ID: {data.id} </p>
      <p> Item Owner: { userId == data.user_id ? `${data.owner} (You)` : data.owner }</p>
    </div>
  );
}

export default IndividualItem;
0