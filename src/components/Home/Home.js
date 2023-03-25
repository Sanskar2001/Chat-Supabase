import '../Login/Login.css'
import { Link, useNavigate } from "react-router-dom";
export default function Login() {

    const navigate = useNavigate();
    function handleClickLogin() {

              
                navigate("/login");
      
    }
    function handleClickSignUp() {

        
        navigate("/signUp");

    }
    return (
        <div className='login'>
       
                <img
                    className="login__logo"
                    src='/logo.png' 
                />
          

            <div className='login__container'>
                <h1>Welcome to chat app!</h1>

                
                <button  onClick={handleClickLogin} className='login__signInButton'>Login In</button>
                <button  onClick={handleClickSignUp} className='login__registerButton'>Sign Up</button>
            </div>
        </div>
    )
    
}