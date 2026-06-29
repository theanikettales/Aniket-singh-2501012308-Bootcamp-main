import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Logout from "../Pages/Logout";
import User from "../Pages/User";
import NotFound from "../Pages/NotFound";
import SingleUser from "../Pages/SingleUser";
import PrivateRoute from "../Pages/PrivateRoute";

export default function AllRoutes() {
  // function Home(){
  //     return <h1>Home Page</h1>
  // }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />
        <Route path="/user/:userId" element={<SingleUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
