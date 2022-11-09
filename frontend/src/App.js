import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Login from './component/Login';
import Signup from './component/Signup';
import Dashboard from './component/Dashboard';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/login'element={<Login/>} />
        <Route path='/signup'element={<Signup/>} />
        <Route path='/dashboard'element={<Dashboard/>} />


      </Routes>
    </div>
  );
}

export default App;
