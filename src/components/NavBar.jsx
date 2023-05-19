import React from 'react';
import { Link } from 'react-router-dom';
import { GiScrollQuill } from 'react-icons/gi';
import { GrSend } from 'react-icons/gr';
import { TfiEmail } from 'react-icons/tfi';
import { BsPerson } from 'react-icons/bs';

function Navbar() {
  return (
    <>
      <header className='header'>
        <div className='header-title'>
          <Link to='/'>
            <GrSend />
            <h1>Send The WILL</h1>
          </Link>
        </div>
        <nav>
          <Link to='/will'>
            <GiScrollQuill />
          </Link>
          <Link to='/email'>
            <TfiEmail />
          </Link>
          <BsPerson />
        </nav>
      </header>
    </>
  );
}

export default Navbar;
