import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./componets/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckOutPage from "./pages/CheckOutPage";
import { useState } from "react";
import FilterDataPage from "./pages/FilterDataPage";
import ResposiveNavBar from "./componets/NavBar/ResposiveNavBar";
import NewArrivals from "./pages/NewArrivals/NewArrivals";
import BestCollections from "./pages/BestCollections/BestCollections";
import AllProduct from "./pages/AllProduct/AllProduct";
import Whatsapp from "./componets/Whatsapp/Whatsapp";
import OrderComfirmationPage from "./pages/orderComfirmationPage/OrderComfirmationPage";
import Scroll from "./componets/Scroll/scroll";
import Categories from "./componets/categoriesComponet/Categories";
import BlackFriday from "./componets/categoriesComponet/BlackFriday";
import TopSales from "./componets/categoriesComponet/TopSales";
import Longsleeves from "./componets/categoriesComponet/Longsleeves";
import Hat from "./componets/categoriesComponet/Hat";
import Tees from "./componets/categoriesComponet/Tees";

function App() {
  const [order, setOrder] = useState(null);
  return (
    <div className="conatiner">
      <BrowserRouter>
        <NavBarWithConditionalRendering />
        <Whatsapp />
        <Scroll />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/best-collections" element={<BestCollections />} />
          <Route path="/products" element={<AllProduct />} />
          <Route
            path="/checkout"
            element={<CheckOutPage setOrder={setOrder} />}
          />
          <Route path="/search" element={<FilterDataPage />} />
          <Route
            path="/order-confirmation"
            element={<OrderComfirmationPage />}
          />
          <Route path="/collections/:categoryName" element={<Categories />} />
          <Route path="/collections/top-sales" element={<TopSales />} />
          <Route path="/collections/black-friday" element={<BlackFriday />} />
          <Route path="/collections/long-sleeve" element={<Longsleeves />} />
          <Route path="/collections/T-shirt" element={<Tees />} />
          <Route path="/collections/hat" element={<Hat />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </BrowserRouter>
    </div>
  );

  function NavBarWithConditionalRendering() {
    const location = useLocation(); // Now it's inside the Router context
    return location.pathname !== "/checkout" ? <ResposiveNavBar /> : null;
  }
}

export default App;
