import { Route, Routes } from "react-router";
import "./GlobalStyle.js";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/\bHomePage";
import SignInPage from "./pages/SignInPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import MyPage from "./pages/MyPage";
import CartPage from "./pages/CartPage";
import { AuthProvider } from "./contexts/auth.context.js";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/my-page" element={<MyPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/product-detail/:productId"
            element={<ProductDetailPage />}
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
