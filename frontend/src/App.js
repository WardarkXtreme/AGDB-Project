import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import HomeConnect from "./Pages/HomeConnect";
import HomeUser from "./Pages/HomeUser";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/connexion" exact element={<HomeConnect/>} />
        <Route path="/User" exact element={<HomeUser/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;