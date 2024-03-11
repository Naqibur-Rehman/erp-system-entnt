import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
