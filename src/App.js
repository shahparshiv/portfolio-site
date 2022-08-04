import {Routes, Route} from 'react-router-dom'
import NavBar from './components/navbar.component';
import Home from './components/home.component';
import './App.css';


const App = () => {
  return(
    <Routes>
      <Route path="/" element={<NavBar/>}>
        <Route index element={<Home/>} />
      </Route>
    </Routes>
  )
}

export default App;
