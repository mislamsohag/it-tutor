import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Componants/About/About';
import Home from './Componants/Home/Home';
import Login from './Componants/Login/Login';
import Footer from './Componants/Sheard/Footer/Footer';
import Header from './Componants/Sheard/Header/Header';
import Blogs from './Componants/Blogs/Blogs';
import Services from './Componants/Sevices/Services';
import ServiceInfo from './Componants/ServiceInfo/ServiceInfo';
import NotFound from './Componants/NotFound/NotFound';
import RequirAuth from './RequireAuth/RequirAuth';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/services" element={<Services></Services>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/about" element={<About></About>} />

        <Route path='/service/:serviceId' element={
          <RequirAuth>
            <ServiceInfo></ServiceInfo>
          </RequirAuth>
        } />

        <Route path="/login" element={<Login></Login>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
