import "./App.css";
// import Calculator from "./components/Calculator";
import NameResponse from "./NameResponse";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#121212",
      }}
    >
      {/* <Calculator /> */}
      <NameResponse />
    </div>
  );
}

export default App;
