import Box from "./myComp/box";

function App() {
  return (
    <div className="App">
      <div
        style={{
          fontSize: "45px",
          alignContent: "center",
          alignItems: "center",
          textAlign: "center",
          textDecoration: "underline",
        }}
      >
        <b> Four-in-a-row GAME </b>
      </div>
      <Box size="500px" />
    </div>
  );
}

export default App;
