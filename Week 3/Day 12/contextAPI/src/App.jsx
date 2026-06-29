import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Button from "./Components/Button";

import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        textAlign: "center",
        width: "80%",
        margin: "auto",
        backgroundColor: theme == "light" ? "white" : "black",
        color: theme == "light" ? "black" : "white",
        border: theme == "light" ? "1px solid white" : "1px solid black",
      }}
    >
      <h1>Welcome to ContextAPI</h1>
      <Nav />
      <Main />
      <Button btnText={"Toggle"} onClick={toggleTheme} />
    </div>
  );
}

export default App;
