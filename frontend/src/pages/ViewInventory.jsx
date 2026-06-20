import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal.jsx";
import { getUserId } from "../components/functions/queryFunctions";

function ViewInventory({ user }) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const userId = getUserId();

  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <h1> ViewInventory </h1>
      <h2> Showing inventory for {userId} </h2>
      <Button onClick={() => setShowModal(true)}> Create New Item... </Button>
      <Modal openModal={showModal} closeModal={() => setShowModal(false)} />
    </>
  );
}

export default ViewInventory;
