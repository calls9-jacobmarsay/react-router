import { Route, Routes } from "react-router-dom";

import Welcome from "./components/pages/Welcome";
import Products from "./components/pages/Products";
import MainHeader from "./components/MainHeader";
function App() {
  return (
    <div>
      <MainHeader />
      <Routes>
        <Route path="/welcome" element={<Welcome />}></Route>

        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </div>
  );
}

export default App;
