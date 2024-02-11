import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Navbar from "./components/Navbar";
import CarInfo from "./pages/CarInfo";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Main from "./components/Main/main.jsx";
import Signup from "./components/Signup/signup.jsx";
import Login from "./components/Login/Index.jsx";
import Create from "./pages/Admin/Create";

function App() {
  const user = localStorage.getItem("token");
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
      {user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
        <Route element={<Home/>} path="/" />
        <Route element={<Contact/>} path="/contact" />
        <Route path="/car/:id" element={<CarInfo/>}/>
        <Route path="/admin/addcar" element={<Create/>}/>
        <Route element={<p>404 Not Found</p>} path="*"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;