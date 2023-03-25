import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./components/Login/Login"
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home'
import Chat from './components/Chat/Chat';
function App() {
  return (
     <BrowserRouter>
  
    <Routes>
   
      <Route path="/" element={<> <Home></Home></>} />
      <Route path="/login" element={<><Login></Login></>}/>
      <Route path="/signUp" element={<><SignUp></SignUp></>}/>
      <Route path='/chat' element={<Chat></Chat>}></Route>
      
     
    </Routes>
  </BrowserRouter>

  );
}

export default App;
