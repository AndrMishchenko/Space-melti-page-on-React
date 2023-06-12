import './App.css';
import {Route, Routes} from 'react-router-dom'
import Navigation from './Components/Navigation'
import Home from './Pages/Home'
import Destination from './Pages/Destination'
import Crew from './Pages/Crew'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/destination' element={<Destination/>}/>
          <Route path='/crew' element={<Crew/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
