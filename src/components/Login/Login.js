import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { loginWithEmailAndPassword } from '../Supabase/Config';
import { useState } from 'react';
import { supabase } from '../Supabase/Config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleClick() {
        navigate("/signUp");
    }

    const login = e => {

        console.log("inside login func")
        const {data,error}= supabase.auth.signInWithPassword({
            email: email,
            password: password
          }).then((data)=>{
            if(data.error===null)
            navigate('/chat')
            else
           {
            toast.error(data.error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
           }
            console.log(data);
            
          })
         

            // .then(data => {
            //    navigate('/')
            //    console.log(data)
            // })
            // .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
       
                <img
                    className="login__logo"
                    src='/logo.png' 
                />
          
          
          
            <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
        rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
        />
{/* Same as */}
<ToastContainer />
            <div className='login__container'>
                <h1>Login-in</h1>

            
                <div>
                    <h5>E-mail</h5>
                    <input autoComplete='true' type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button  onClick={login}  className='login__signInButton'>Login</button>                
                    </div>


                <button  onClick={handleClick} className='login__registerButton'>Create your Account</button>
            </div>
        </div>
    )
    
}