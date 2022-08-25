import {Routes, Route, Router} from 'react-router-dom'
import NavBar from './components/navbar.component';
import Home from './components/home.component';
import TechStack from './components/techstack.component';
import './App.css';
import About from './components/about.component';
import Footer from './components/footer.component';


const App = () => {
  return(
    
      <Routes>
      
      <Route path="/" element={<NavBar/>}>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Route>
    </Routes>
      
    
  )
}

export default App;
