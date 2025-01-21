import { useEffect, useState } from "react";
import { Counter } from "./components/Counter"
import { About } from "./components/About";


function App() {

  let trackName = "FrontEnd "

  return (
    <>
      <About trackName={trackName} />
    </>
  )
}

export default App
