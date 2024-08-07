import "./App.css";
import Footer from "./compoents/footer/Footer";
import Home from "./compoents/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./compoents/Navbar/Navbar";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeCarts from "./compoents/HomeCarts/HomeCarts";
import { Route, Routes } from "react-router";
import Register from "./compoents/RegisterPage/Register";
import ProjectRouters from "./compoents/Routers/ProjectRouters";
import AboutUs from "./compoents/AboutUs/AboutUs";
import ContactUs from "./compoents/ContactUs/ContactUs";
import Login from "./compoents/LoginPage/Login";
import OwnerMain from "./compoents/Owner/OwnerMain/OwnerMain";
import FarmerMain from "./compoents/Farmer/FarmerMain/FarmerMain";
import ProductDetailPage from "./compoents/Farmer/FarmerRight/ProductDetailPage";
import NotFound from "./compoents/NotFound/NotFound";
import Profile from "./compoents/Owner/Profile/Profile";

import History from "./compoents/Owner/OHistory/History";
import Notification from "./compoents/Owner/Notification/Notification";
import OrderSummary from "./compoents/Farmer/OrderSummary/OrderSummary";
import ShowProducts from "./compoents/Owner/ShowProducts/ShowProducts";
import AddProduct from "./compoents/Owner/AddProduct/AddProduct";
import ViewPage from "./compoents/Owner/ViewPage/ViewPage";
import UpdateProduct from "./compoents/Owner/UpdateProduct/UpdateProduct";
function App() {
  return (
    <>
      <div className="mt-5 p-2">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<HomeCarts />} />
        <Route path="/*" element={<NotFound />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/owner-dashboard" element={<OwnerMain />} />
        <Route path="/owner-dashboard/profile" element={<Profile />} />
        <Route
          path="/owner-dashboard/showproducts"
          element={<ShowProducts />}
        />
        <Route path="/owner-dashboard/history" element={<History />} />
        <Route
          path="/owner-dashboard/showproducts/add-product"
          element={<AddProduct />}
        />
        <Route
          path="/owner-dashboard/showproducts/view-product/:name"
          element={<ViewPage />}
        />
        <Route
          path="/owner-dashboard/showproducts/update-product/:name"
          element={<UpdateProduct />}
        />

        <Route
          path="/owner-dashboard/notification"
          element={<Notification />}
        />

        <Route path="/farmer-dashboard/productList" element={<FarmerMain />} />
        <Route
          path="/farmer-dashboard/productList/:name"
          element={<ProductDetailPage />}
        />
        <Route
          path="/farmer-dashboard/productList/:name/order-summary"
          element={<OrderSummary />}
        />

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        {/* Add other routes here */}
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
