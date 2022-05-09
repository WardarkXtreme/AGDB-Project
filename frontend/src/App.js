import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import HomeConnect from "./Pages/HomeConnect";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/connexion" exact element={<HomeConnect/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;