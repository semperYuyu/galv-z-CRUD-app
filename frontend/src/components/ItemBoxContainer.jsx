function ItemBoxContainer({ children }) {
  return (
    <div
      className={"row row-cols-4 justify-content-center"}
      style={{ margin: "10px" }}
    >
      {children}
    </div>
  );
}

export default ItemBoxContainer;
