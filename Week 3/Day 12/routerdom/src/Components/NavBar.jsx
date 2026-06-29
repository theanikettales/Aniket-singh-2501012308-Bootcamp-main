import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const Links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/login", title: "Login" },
    { path: "/logout", title: "Logout" },
    { path: "/user", title: "User" },
  ];

  const activestyle = { textDecoration: "none", color: "red" };
  const inActivestyle = { textDecoration: "none", color: "blue" };
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {/* Step 1 */}
      {/* <Link to="/">Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/logout"}>Logout</Link>
      <Link to={"/user"}>User</Link> */}
      {/* <a href="/google">Google</a> */}

      {/* Step -2 
      {Links.map(({ path, title }) => (
        <Link to={path}>{title}</Link>
      ))} */}

      {/* Step -3  */}
      {Links.map(({ path, title }) => (
        <NavLink
          to={path}
          style={({ isActive }) => {
            return isActive ? activestyle : inActivestyle;
          }}
        >
          {title}
        </NavLink>
      ))}
    </div>
  );
}
