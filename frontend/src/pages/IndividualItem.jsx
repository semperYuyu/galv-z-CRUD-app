import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function IndividualItem( { item } ) {
  const navigate = useNavigate()
  return (
    <>
      <Button onClick={() => navigate("/items")}> Back </Button>
      <h1> IndividualItem </h1>
      <h2> Viewing Details for {item || "item"}</h2>
    </>
  );
}

export default IndividualItem;
