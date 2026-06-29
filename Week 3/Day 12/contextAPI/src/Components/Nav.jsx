import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import Button from "./Button";

import { AuthContext } from "../Context/AuthContext";

export default function Nav() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // console.log(data); // {theme,toggleTheme}
  console.log(theme, toggleTheme);

  const { auth, login, logout } = useContext(AuthContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: theme == "light" ? "white" : "black",
        color: theme == "light" ? "black" : "white",
        border: theme == "light" ? "1px solid black" : "1px solid white",
        padding: "20px",
      }}
    >
      <h3>Componay Logo</h3>
      <h3>Auth: {auth?"Yes":"No"}</h3>
      {/* <button>Login</button>
      <button>Logout</button> */}
      <Button btnText={"Login"} onClick={login} />
      <Button btnText={"Logout"} onClick={logout} />
    </div>
  );
}
