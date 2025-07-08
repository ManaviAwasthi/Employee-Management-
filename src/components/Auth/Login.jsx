import React from "react";
import { useState } from "react";

const Login=({handleLogin})=>{

    
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');


    const submitHandler= (e)=>{
        e.preventDefault();
        handleLogin(email,password)
        
        setemail("");
        setpassword("");
    }



    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl' >
                <form onSubmit={(e)=>{
                    submitHandler(e);
                }}
                className='flex flex-col items-center justify-center'>
                    <input 
                    value={email}
                    onChange={(e)=>{
                        setemail(e.target.value)
                    }}
                    required 
                    className="border-2 border-emerald-600 bg-transparent text-xl py-3 px-5 rounded-full placeholder: text-gray-400" type="email" placeholder="Enter your Email Id"
                    />
                    <input 
                    value={password}
                    onChange={(e)=>{
                        setpassword(e.target.value);
                    }}
                    required 
                    className="border-2 border-emerald-600 bg-transparent text-xl py-3 px-5 rounded-full mt-3 placeholder: text-gray-400" type="password" placeholder="Enter your password"
                    />
                    <button 
                    className="border-none bg-emerald-600 text-xl py-3 px-5 rounded-full mt-3 placeholder: text-gray-400"> Log In</button>

                </form>


            </div>


        </div>
    )
}

export default Login