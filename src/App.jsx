import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Forgot from "./pages/Forgotpass/Forgot";
import Cart from "./pages/Cart/Cart";

const App = () => {
  return (
    <>
      <div class="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;