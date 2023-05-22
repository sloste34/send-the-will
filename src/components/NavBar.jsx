import React from 'react';
import { Link } from 'react-router-dom';
import { GiScrollQuill } from 'react-icons/gi';
import { GrSend } from 'react-icons/gr';
import { TfiEmail } from 'react-icons/tfi';
import { BsPerson } from 'react-icons/bs';
import FirebaseGoogleSocialLogin from '../api/firebase';

function Navbar() {
  return (
    <>
      <header className='flex justify-between border-b border-black p-5'>
        <Link to='/' className='flex items-center text-6xl'>
          <GrSend />
          <h1>Send The WILL</h1>
        </Link>
        <nav className='flex text-5xl items-center gap-9'>
          <Link to='/will'>
            <GiScrollQuill />
            <p>Write a WILL</p>
          </Link>
          <Link to='/email'>
            <TfiEmail />
            <p>Email List</p>
          </Link>
          <button onClick={FirebaseGoogleSocialLogin}>
            <BsPerson />
            <p>Login</p>
          </button>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
