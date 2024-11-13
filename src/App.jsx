import About from "./components/About";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Layout from "./components/Layout";
import Registration from "./components/Registration";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define the Layout Route */}
        <Route path="/" element={<Layout />}>
          {/* Nested Routes within the Layout */}
          <Route index element={<Home />} /> {/* Default Route */}
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="tours" element={<Tours />} />
          <Route path="registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all for undefined routes */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
