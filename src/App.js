import Boxoffice from './boxoffice/Boxoffice';
import './App.css';
import BoxMv from './boxoffice/BoxMv';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
 <Routes>
    <Route path='/' element={<Boxoffice />} />
    <Route path='/mv' element={<BoxMv />} />
    {/* <Route path='/hh' element={<MvList />}/> */}
 </Routes>

  );
}

export default App;
