import { useContext } from "react";
import { IndividualItemContext } from "../contexts/IndividualItemContext";

export const useIndividualItemContext = () => {
  return useContext(IndividualItemContext);
};
