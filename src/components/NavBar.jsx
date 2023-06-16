import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiScrollQuill } from 'react-icons/gi';
import { FiSend } from 'react-icons/fi';
import { TfiEmail } from 'react-icons/tfi';
import { BsPersonCheckFill } from 'react-icons/bs';
import { BsFillPersonXFill } from 'react-icons/bs';
import FirebaseGoogleSocialLogin from '../api/firebase';

function Navbar() {
  //로그인 정보를 위한 state
  const [userInfo, setUserInfo] = useState();
  const handleLogin = () => {
    FirebaseGoogleSocialLogin().then(setUserInfo);
  };
  const handleLogout = () => {
    FirebaseGoogleSocialLogin().then(setUserInfo);
  };
  return (
    <>
      <header className='flex border-b border-black p-3 justify-between bg-zinc-900 text-white'>
        <Link to='/' className='flex items-center'>
          <FiSend className='text-3xl' />
          <h1 className='text-3xl ml-1'>Send The WILL</h1>
        </Link>
        <nav className='flex items-center gap-9'>
          <Link to='/will' className='flex items-center'>
            <GiScrollQuill className='text-3xl' />
            <p className='text-2xl ml-1'>Write a WILL</p>
          </Link>
          <Link to='/email' className='flex items-center'>
            <TfiEmail className='text-3xl' />
            <p className='text-2xl ml-1'>Email List</p>
          </Link>
          {userInfo && (
            <button>
              <BsFillPersonXFill />
              <p>Logout</p>
            </button>
          )}
          {!userInfo && (
            <button onClick={handleLogout} className='flex items-center'>
              <BsPersonCheckFill className='text-3xl' />
              <p className='text-2xl ml-1'>Google Login</p>
            </button>
          )}
        </nav>
      </header>
    </>
  );
}

export default Navbar;
