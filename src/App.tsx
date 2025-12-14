import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./pages/About";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Recently from "./pages/Recently";

function App() {
  return (
    <>
      <Home children={
        <Nav />
      }/>
      <main className="main">
        <About />
        <Popular />
        <Recently />
        <Footer />
      </main>
    </>
  )
}

export default App;
