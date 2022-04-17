import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Componants/About/About';
import Home from './Componants/Home/Home';
import Login from './Componants/Login/Login';
import Footer from './Componants/Sheard/Footer/Footer';
import Header from './Componants/Sheard/Header/Header';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<p>Services</p>}></Route>
        <Route path="/blogs" element={<p>Blogs</p>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
