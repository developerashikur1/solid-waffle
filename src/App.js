import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <>
      <Router>
        <Header>
        </Header>
        <Routes>
          <Route exact path="/" element={<Home></Home>} ></Route>
          <Route patho="/home" element={<Home></Home>} ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
