import { Button, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal.jsx";
import { getUsername, getUserId } from "../components/functions/queryFunctions";
import { useIndividualItemContext } from "../components/hooks/useIndividualItemContext";
import ItemBoxContainer from "../components/ItemBoxContainer";
import ItemBox from "../components/ItemBox";

function ViewInventory() {
  const [showModal, setShowModal] = useState(false);
  const { setItemId } = useIndividualItemContext();
  const [data, setData] = useState();
  const navigate = useNavigate();
  const username = getUsername();
  const userId = getUserId();
  const url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }

    fetch(`${url}/auth/inventory/${userId}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, []);

  if (!data) return <Spinner animation={"border"} />;
  return (
    <div className={"d-flex flex-column align-items-center gap-3"}>
      <h2> {username}'s Inventory </h2>
      <Button onClick={() => setShowModal(true)}> Create New Item... </Button>
      <Modal openModal={showModal} closeModal={() => setShowModal(false)} />
      <ItemBoxContainer>
        {data.map((item) => {
          return (
            <ItemBox
              name={item.item_name}
              desc={item.description}
              quantity={item.quantity}
              onClick={() => {
                setItemId(item.id);
                navigate(`/items/${item.id}`);
              }}
            />
          );
        })}
      </ItemBoxContainer>
    </div>
  );
}

export default ViewInventory;
