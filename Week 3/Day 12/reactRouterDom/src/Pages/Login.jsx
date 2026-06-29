import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
export default function Login() {
  const { auth, login, logout } = useContext(AuthContext);
  return (
    <div>
      <h1>Auth : {auth ? "YES" : "NO"}</h1>
      <button onClick={login}>Login</button>
      <hr />
      <button onClick={logout}>Logout</button>
    </div>
  );
}
