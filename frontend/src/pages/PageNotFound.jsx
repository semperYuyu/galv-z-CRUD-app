import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getUserId } from '../components/functions/queryFunctions.js'

function PageNotFound() {
  const navigate = useNavigate();
  const userId = getUserId()
  const reRoute = userId ? `/` : `/login`;
  return (
    <>
      <h1> PageNotFound D: </h1>
      <Button onClick={() => navigate(reRoute)}> Go Back </Button>
      <h2>Sowwy I couldn't find that page</h2>
    </>
  );
}

export default PageNotFound;
