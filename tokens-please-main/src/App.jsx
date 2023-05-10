import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import "@fontsource/roboto/400.css";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home
          style={{
            color: "#fff",
          }}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
