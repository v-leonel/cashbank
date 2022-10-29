import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';
import Home from './componentes/Home'
import Login from './componentes/Login'


function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
