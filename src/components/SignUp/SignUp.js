import '../Login/Login.css'
import { Link, useNavigate } from "react-router-dom";
import {signUpWithEmailAndPassword} from "../Supabase/Config";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName,setUserName]=useState('Hello');
    const navigate = useNavigate();
    function handleClick() {
        navigate("/login");
    }

    const signIn = e => {
        e.preventDefault();

        console.log(" "+email+" "+password);
        signUpWithEmailAndPassword(email, password);
        toast.success('Verify Your Email via link sent', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });



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
<ToastContainer/>
            <div className='login__container'>
                <h1>Sign-Up</h1>

                <div>
                <h5>Name</h5>
                    {/* <input type='text' value={userName} onChange={e => setUserName(e.target.value)} /> */}

                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button  onClick={signIn} type='submit' className='login__signInButton'>Sign Up</button>
                </div>

    
                <button onClick={handleClick} className='login__registerButton'>Already Have an Account?</button>
            </div>
        </div>
    )
    
}