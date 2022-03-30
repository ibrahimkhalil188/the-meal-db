import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Notfounded from './Components/Notfounded/Notfounded';
import Products from './Components/Products/Products';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Products></Products>}></Route>
      </Routes>

    </div>
  );
}

export default App;
