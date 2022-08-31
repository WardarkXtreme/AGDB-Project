import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import HomeConnect from "./Pages/HomeConnect";
import HomeUser from "./Pages/HomeUser";
import HomeAdmin from "./Pages/HomeAdmin";

const App = () => {
  return(  
    <Routes>
      <Route path="/*" element={<Home/>} />
      <Route path="/connexion" element={<HomeConnect/>} />
      <Route path="/User" element={<HomeUser/>} />
      <Route path="/Admin" element={<HomeAdmin/>} />
    </Routes>
  )
}

export default App;