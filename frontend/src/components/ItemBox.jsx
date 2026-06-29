import { useState } from "react";

function ItemBox({ name, desc, quantity, onClick }) {
  const [hovered, setHovered] = useState(false);
  const image = "/lootbag.png";
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
      <h3 className={"text-truncate"} style={{ maxWidth: "100ch" }}>
        {" "}
        {name}{" "}
      </h3>
      <img
        src={image}
        alt="an item"
        style={{ border: "solid black", borderRadius: "10px", padding: "3px", height: "150px", width: "125px" }}
      />
      <p className={"text-truncate"} style={{ maxWidth: "100ch" }}>
        {" "}
        {desc}{" "}
      </p>
      <p> Quantity: {quantity} </p>
    </div>
  );
}

export default ItemBox;
