import { useEffect, useState } from "react";
import { Counter } from "./components/Counter"
import Login from "./components/Login"

function App() {
  const [ show, setShow ] = useState( false );

  const logout = () => {
    setShow( false )
  }
  useEffect( () => {
    console.log( "useEffect From App Component" )

  }, [] )

  return (
    <div className="container mt-5">
      {console.log( "Render Method at App Component" )}
      <button onClick={() => setShow( true )} className="btn btn-warning">Login</button>
      {show && <Login logout={logout} />}
      {/* <Counter /> */}
    </div>
  )
}

export default App
