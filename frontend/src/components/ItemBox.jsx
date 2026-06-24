import { useState } from "react";

function ItemBox({ name, desc, quantity, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className={"display-flex flex-column text-center"}
      style={{
        backgroundColor: "rgb(139, 139, 139)",
        padding: "10px",
        margin: "10px",
        width: "250px",
        borderRadius: "10px",
        transform: hovered ? "scale(1.1)" : "scale(1)",
        cursor: "pointer",
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3> {name} </h3>
      <p> {desc} </p>
      <p> Quantity: {quantity} </p>
    </div>
  );
}

export default ItemBox;
