import logo from './logo.svg';
import './App.css';
import React from 'react';
import {  BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';
import Register from './pages/Register'
import Header from './components/Header'


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> peepee poopoo.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <>
    
    <Router>
      
       <div className='container'>
         {/* <h1>hello wold</h1> */}
         <Header/>
         <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
         </Routes>
       </div>
       </Router>
    </>
  );
}

export default App;
