/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Header.css";
import logo1 from './../logo-1.jpg';
import { CSSTransition } from "react-transition-group";
import {RxHamburgerMenu} from 'react-icons/rx'
import {RxCross2} from 'react-icons/rx'
// import Modal from './Modal';
import * as te from 'tw-elements';
import  'flowbite'

export default function Header({handleSearchNote, inputValue}) {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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
    <header className="Header">
      <img src={require("./../logo-1.jpg")} className="Logo mx-4" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav bg-opacity-50">
        <div className="flex flex-row align-middle">
        
        <input
          type="text"
           value={inputValue}
          onChange={(event)=> handleSearchNote(event.target.value)}
          placeholder="Search"
          className="bg-gray-200 border border-gray-500 p-2 w-4/5  mx-auto rounded-md"
        />
   
        <RxCross2
        onClick={()=> handleSearchNote("")}
         fontSize={30} className="bg-red-600 cursor-pointer text-white p-1 my-auto m-0 rounded-md"/>

        </div>

       



          {/* <div>Home</div> */}
          {/* <button>Logout</button> */}
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <RxHamburgerMenu/>
      </button>
    </header>
  );
}
