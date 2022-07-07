import "./App.css";
/*local components */
import { Nav } from "./components/Nav";
import { Homepage } from "./components/Homepage";
import { IndividualProd } from "./components/IndividualProd";
import { UserPage } from "./components/UserPage";
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
          <Route path="/user" element={<UserPage/>} />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
