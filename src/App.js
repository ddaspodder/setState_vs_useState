import ThisState from "./components/thisState";
import YouState from "./components/youState";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Difference between setState and useState</h1>
      <YouState />
      {/* <ThisState /> */}
    </div>
  );
}
