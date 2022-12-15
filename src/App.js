import { Route, Routes } from "react-router-dom";

import Welcome from "./components/pages/Welcome";
import Products from "./components/pages/Products";
import ProductDetail from "./components/pages/ProductDetails";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route
            path="/product-details/:productid"
            element={<ProductDetail />}
          ></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
