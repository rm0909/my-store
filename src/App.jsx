import "./App.css";
/*local components */
import { Nav } from "./pages/Nav";
import { Homepage } from "./pages/Homepage";
import { IndividualProd } from "./pages/IndividualProd";
import { UserPage } from "./pages/UserPage";
import { Register } from "./pages/Register";
/*context*/
import { ContextProvider } from "./context/ContextProvider";
/*dependencies*/
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product" element={<IndividualProd />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
