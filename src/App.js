import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Shared/Footer';
import BlogList from './Components/Pages/BlogList/BlogList';
import BlogView from './Components/Pages/BlogView/BlogView';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element={<BlogList/>} ></Route>
      <Route path='/view' element={<BlogView/>}></Route>

    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
