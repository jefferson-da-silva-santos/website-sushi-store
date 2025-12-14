import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./pages/About";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Recently from "./pages/Recently";
import MenuProvider from "./providers/MenuProvider";
import ThemeProvider from "./providers/ThemeProvider";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <MenuProvider>
      <ThemeProvider>
        <Home children={<Nav />} />
        <main className="main">
          <About />
          <Popular />
          <Recently />
          <Footer />
        </main>
      </ThemeProvider>
    </MenuProvider>
  );
}

export default App;
