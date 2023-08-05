import './App.css';
import Home from './component/Body/Home/Home';
import AddVehicle from './component/Body/Vehicle/AddVehicle';
import Navbar from './component/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import AddRoute from './component/Body/Route/AddRoute';
import BookingCar from './component/Body/Booking/BookingCar';
import Footer from './component/Footer/Footer';
import RouteDetail from './component/Body/Route/RouteDetail';

function App() {
  return (
    <>
      <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/bookingCar' element={<BookingCar/>}></Route>
        <Route path='/addVehicle' element={<AddVehicle/>}></Route>
        <Route path='/addRoute' element={<AddRoute/>}></Route>
        <Route path='/routeDetail/:id' element={<RouteDetail/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
