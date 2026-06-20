import { Button } from "react-bootstrap";

const ModalContent = ({ cancel }) => {
  return (
    <>
      <h1> Modal :D </h1>
      <Button onClick={cancel}> Close </Button>
    </>
  );
};

export default ModalContent;
