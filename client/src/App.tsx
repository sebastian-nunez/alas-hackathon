import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import FindRide from "./components/FindRide";
import QRCode from "./components/QRCode";
import SearchRide from "./components/SearchRide";
import Confirmed from "./components/Confirmed";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1 pb-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ride" element={<FindRide />} />
          <Route path="/qrcode" element={<QRCode />} />
          <Route path="/search" element={<SearchRide />} />
          <Route path="/confirmed" element={<Confirmed />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
