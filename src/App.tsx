import "./App.css";
import * as c from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Genre from "./pages/genre";
import Favorites from "./pages/favorites";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <c.Flex direction="column" mt="75px" minHeight="100vh">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/genre" element={<Genre />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </c.Flex>
      </BrowserRouter>
    </div>
  );
}

export default App;
