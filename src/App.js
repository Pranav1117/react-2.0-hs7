import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Students from "./Pages/Students";
import ContactUs from "./Pages/Contactus";
import PageNotFound from "./Pages/PageNotFound";
import AddNewStudent from "./Pages/AddNewStudent";
import NavBar from "./Components/NavBar";
import EditStudent from "./Pages/EditStudent";
import "./global.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path="/studentlist" element={<Students />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/addnewstudent" element={<AddNewStudent />} />
          <Route path="/editstudent" element={<EditStudent />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
