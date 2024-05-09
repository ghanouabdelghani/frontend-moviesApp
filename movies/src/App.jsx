import { Link } from "react-router-dom";
import Button from "./components/Button/Button";
import Submit from "./components/Button/submit";

const main = {
  flex: 1,
  display: "flex",
  color: "black",
  justifyContent: "center",
  alignItems: "center",
};

const link = {
  display: "flex",
  color: "red",
  textTransform: "capitalize",
};

export default function App() {
  return (
    <div style={main}>
      <Link style={link} to="/choice">
        <Button />
      </Link>
    </div>
  );
}
