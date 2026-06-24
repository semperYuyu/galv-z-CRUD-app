import { useState, useMemo } from "react";
import { IndividualItemContext } from "./IndividualItemContext";
export const IndividualItemContextProvider = ({ children }) => {
  const [itemId, setItemId] = useState(null);

  const value = useMemo(() => ({ itemId, setItemId }), [itemId]);

  return (
    <IndividualItemContext.Provider value={value}>
      {children}
    </IndividualItemContext.Provider>
  );
};
