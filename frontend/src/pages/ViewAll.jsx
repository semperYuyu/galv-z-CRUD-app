import { Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemBox from "../components/ItemBox";
import ItemBoxContainer from "../components/ItemBoxContainer";
import { useIndividualItemContext } from "../components/hooks/useIndividualItemContext";
const url = import.meta.env.VITE_API_URL;

function ViewAll() {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const { setItemId } = useIndividualItemContext();
  useEffect(() => {
    fetch(`${url}/items`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  }, []);

  if (!data) return <Spinner animation={"border"} />;
  return (
    <div className={"d-flex flex-column align-items-center gap-10"}>
      <h1> Browse All Items </h1>

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

export default ViewAll;
