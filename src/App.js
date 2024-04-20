import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navabar from './layout/Navabar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Navabar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/addUser' element={<AddUser />} />
          <Route exact path='/edituser/:id' element={<EditUser />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
