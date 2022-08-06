import { Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Home from "./pages/Home";
import Paths from "./pages/Paths";
import PetPath from "./pages/PetPath";
import StoreInfo from "./pages/StoreInfo";
import StorePath from "./pages/StorePath";
import UserPath from "./pages/UserPath";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/info" element={<StoreInfo />} />
          <Route path="/paths" element={<Paths />}>
            <Route path="pet" element={<PetPath />} />
            <Route path="store" element={<StorePath />} />
            <Route path="user" element={<UserPath />} />
          </Route>

          <Route path="/*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
