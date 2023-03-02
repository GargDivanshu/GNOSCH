/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Header.css";
import logo1 from './../logo-1.jpg';
import { CSSTransition } from "react-transition-group";
import {RxHamburgerMenu} from 'react-icons/rx'
import {RxCross2} from 'react-icons/rx'
import Modal from 'react-modal';
import MyModal from './MyModal'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


export default function Header({handleSearchNote, inputValue, myCountry, setMyCountry, myBrand, setMyBrand}) {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

// async function handleSearchTerm(e) {
// handleSearch();
// }
  // console.log(searchText)
  return (
    <header className="Header flex lg:flex-row md:flex-row sm:flex-col justify-between">
      <img src={require("./../logo-1.jpg")} className=" mx-4" alt="logo" />
     
        <div className="flex flex-row align-middle py-4 px-4 w-3/5">
        <input
          type="text"
           value={inputValue}
          onChange={(event)=> handleSearchNote(event.target.value)}
          placeholder="Search"
          className="bg-gray-200 border border-gray-500 p-2 w-4/5 mx-auto rounded-md"
        />
   
        <RxCross2
        onClick={()=> handleSearchNote("")}
         fontSize={30} className="bg-red-600 mx-2 cursor-pointer text-white p-1 my-auto m-0 rounded-md"/>
       
       
      
       


        <MyModal 
       className="my-auto align-middle"
       myBrand={myBrand} setMyBrand={setMyBrand}
        myCountry={myCountry} setMyCountry={setMyCountry}
       />
       </div>
      {/* <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav bg-opacity-50">
        
       


        
          {/* <div>Home</div> */}
          {/* <button>Logout</button> 
        </nav>
      </CSSTransition> */}
      {/* <button onClick={toggleNav} className="Burger">
        <RxHamburgerMenu/>
      </button> */}
    </header>
  );
}
