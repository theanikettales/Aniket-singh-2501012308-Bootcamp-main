import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function Button({ btnText, onClick }) {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: theme == "light" ? "white" : "black",
        color: theme == "light" ? "black" : "white",
        border: theme == "light" ? "1px solid black" : "1px solid white",
        padding:"20px",
        margin:"20px"
      }}
    >
      {btnText}
    </button>
  );
}
