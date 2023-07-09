
import { Route, Routes } from 'react-router-dom';
import Home from './comp/home';
import Navbars from './comp/navbar/navbar';
import Ordersucess from './comp/ordersucess';
import Menu from './comp/menu';
import Orderpage from './comp/orderpage';


function App() {
  return (
    <div className="App">

       <Navbars />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/orderpage' element={<Orderpage />} />
        <Route path='/ordersuccess' element={<Ordersucess />} />
        <Route path='/menu' element={<Menu />} />
      
      </Routes>
    
    </div>
  );
}

export default App;
