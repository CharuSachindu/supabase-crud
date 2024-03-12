import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Users from './user';
import Createuser from './create';
import Updateuser from './update';
// import 'boostrap/dist/css/boostrap.min.css'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<Users/>}></Route>
          <Route path = '/create' element={<Createuser />}></Route>
          <Route path = '/update/:id' element={<Updateuser/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
