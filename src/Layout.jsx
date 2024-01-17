import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { useEffect } from "react";
const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to the root page ("/") when the App component mounts
    navigate("/");
  }, [navigate]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
