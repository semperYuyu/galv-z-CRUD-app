// import and render thingies here, main.jsx is fine as it is !
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ViewInventory from "./pages/ViewInventory";
import ViewAll from "./pages/ViewAll";
import IndividualItem from "./pages/IndividualItem";
import PageNotFound from "./pages/PageNotFound";
import NavBar from "./components/NavBar";
import Cookies from "js-cookie";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const user = Cookies.get("userId");

  const reRoute = user ? <PageNotFound /> : <Login />;

  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/"} element={<ViewInventory />} />
          <Route path={"/items"} element={<ViewAll />} />
          <Route path={"/items/:itemId"} element={<IndividualItem />} />
          <Route path={"/*"} element={reRoute} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
