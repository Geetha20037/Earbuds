import { useEffect, useState } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import LoadingScreen from "./components/LoadingScreen";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <ScrollToTop />

      <Navbar />

      <main className="min-h-screen pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />

          <Route
            path="*"
            element={
              <div className="flex min-h-[70vh] items-center justify-center px-4">
                <div className="text-center">
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-400">
                    404
                  </p>

                  <h1 className="mt-3 text-4xl font-black text-slate-950 dark:text-white">
                    Page Not Found
                  </h1>

                  <p className="mt-3 text-slate-500 dark:text-slate-400">
                    The page you're looking for doesn't exist.
                  </p>

                  <Link
                    to="/"
                    className="mt-7 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white dark:bg-white dark:text-slate-950"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            }
          />
        </Routes>
      </main>

      <CartDrawer />

      <Footer />
    </div>
  );
}
