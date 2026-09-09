import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CartProvider } from "./context/CartContext";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import MealDetail from "./pages/MealDetail";
import Menu from "./pages/Menu";
import OrderConfirmation from "./pages/OrderConfirmation";
import Plans from "./pages/Plans";

export default function App() {
  return (
    <BrowserRouter basename="/nutri-ahaar-prototype">
      <CartProvider>
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/meal/:id" element={<MealDetail />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirmation" element={<OrderConfirmation />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}
