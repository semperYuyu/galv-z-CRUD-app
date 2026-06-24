import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getUserId } from "./functions/queryFunctions";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const NavBar = () => {
  const userId = getUserId();
  const navigate = useNavigate();
  const LINKS = {
    ["Home"]: "/",
    ["Browse"]: "/items",
    ["Sign Up"]: "/signup",
    ["Login"]: "/login",
  };

  if (userId) {
    delete LINKS["Sign Up"];
    delete LINKS["Login"];
  } else {
    delete LINKS["Home"];
  }
  return (
    <>
      <div
        className={"d-flex justify-content-around align-items-center"}
        style={{ backgroundColor: "#3f3f3f", height: "100px" }}
      >
        {Object.entries(LINKS).map(([display, link]) => {
          return (
            <Link to={link} key={link}>
              <h3> {display} </h3>
            </Link>
          );
        })}

        {userId && (
          <Button
            onClick={() => {
              Cookies.remove("userId");
              Cookies.remove("username");
              navigate("/login");
            }}
          >
            {" "}
            Log Out{" "}
          </Button>
        )}
      </div>
    </>
  );
};

export default NavBar;
