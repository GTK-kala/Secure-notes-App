import NavBar from "./components/NavBar/NavBar"
import SideBar from "./components/SideBar/SideBar"
import {Routes , Route} from "react-router-dom"
import Home from "./pages/Home"

const App = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <Routes>
        <Route path="/" element ={<Home />} />
        {/* <Route path="/" element ={<D} /> */}
      </Routes>
    </>
  )
}

export default App