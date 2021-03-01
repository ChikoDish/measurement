import "./App.css";
import convert from "convert-units";
import FullWidthTabs from "./components/FullWidthTabs";

function App() {
  let so = convert(1).from("l").to("ml");
  return (
    <div className="App">
      <div className="main-container">
        <h1>Unit Converter</h1>
      </div>
      <FullWidthTabs />
    </div>
  );
}

export default App;
