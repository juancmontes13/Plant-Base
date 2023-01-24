import Navbar from './navbar/Navbar';
import CarWidget from './CarWidget/CarWidget';


const App = () => {
  return (
    <div>
      <Navbar/>
      <CarWidget canCarrito={10}/>
    </div>
  );
}

export default App;
