
import { Outlet } from 'react-router'
import './App.css'

function App() {


  return (
    <>

      <h1>Navbar</h1>
      <Outlet></Outlet>
      <h1 class="text-3xl font-bold underline">
        footer
      </h1>

    </>
  )
}

export default App
