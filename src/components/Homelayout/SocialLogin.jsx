import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
        <div>
           <h2 className='font-bold '>Login With</h2> 
           <div className='space-y-3'>
            <button className='btn w-full btn-outline btn-secondary'>  <FcGoogle size={24}/>Login With Google</button>
            <button className='btn w-full btn-outline btn-primary'><BsGithub size={24} /> Login With Github</button>
           </div>
        </div>
    );
};

export default SocialLogin;