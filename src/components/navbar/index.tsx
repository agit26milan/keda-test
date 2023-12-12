"use client"; 
import React from 'react'
import {Modal, Button, Dropdown} from 'flowbite-react'
import ModalComponent from '../modal';
import LoginComponent from '../login';

const NavbarComponent = () => {
    const [openModal, setOpenModal] = React.useState(false);
  const toggleModal = () => setOpenModal((prevState) => !prevState)
return (
<header className="py-7 shadow-md	nav-header">
  <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
    <nav className='relative z-50 flex justify-between'>
      <div className='flex items-center md:gap-x-12'></div>
      <div className='flex items-center gap-x-5 md:gap-x-8'>
        <div className='hidden md:block'>
          <a href='#about'
            className='inline-block rounded-lg px-5 py-1 text-lg	font-bold hover:bg-slate-100 hover:text-slate-900'>
            About
          </a>
          <a href='#pricing'
            className='inline-block rounded-lg px-5 py-1 text-lg	font-bold hover:bg-slate-100 hover:text-slate-900'>
            Pricing
          </a>
          <a href='#contact'
            className='inline-block rounded-lg px-5 py-1 text-lg	font-bold hover:bg-slate-100 hover:text-slate-900'>
            Contact
          </a>
          <button onClick={toggleModal}
            className='group inline-flex items-center justify-center rounded-md py-2 px-14 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600'>
            Login
          </button>

        </div>
        <div className='-mr-1 md:hidden'>
          <Dropdown label="" className='w-1/2' renderTrigger={()=> <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
              className="text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="24px" height="24px">
                <path
                  d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z" />
                </svg>
            </button>} dismissOnClick={false}>
            <Dropdown.Item href='#about' >About</Dropdown.Item>
            <Dropdown.Item href='#pricing' >Pricing</Dropdown.Item>
            <Dropdown.Item href='#contact' >Contact</Dropdown.Item>
            <Dropdown.Item onClick={toggleModal} >Login</Dropdown.Item>
          </Dropdown>

        </div>
      </div>
    </nav>
  </div>
  <ModalComponent footer={<Modal.Footer><Button>Login</Button></Modal.Footer>} openModal={openModal} closeModal={toggleModal} >
    <LoginComponent />
  </ModalComponent>
</header>
)
}

export default NavbarComponent