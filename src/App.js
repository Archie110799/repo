import React from "react";
import Menu from "./components/Menu";
import Menu3 from "./components/Menu3/menu3";

function App() {
  return (
    <>
      <Menu color="red" size={200} />
      <Menu color="blue" size={300} />
      <Menu color="green" size={100} />
      <Menu color="while" size={200} />
      {/* <Menu3></Menu3> */}
    </>
  );
}

export default App;
