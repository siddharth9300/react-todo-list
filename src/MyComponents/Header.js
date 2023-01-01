import React from "react";
// import {Search} from './Search. js'
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import Dark from "./Dark";
export default function Header(props) {
  return (

    <>
    <header className="text-gray-600 body-font font-body fixed  z-10 w-full bg-white dark:bg-slate-900 md:border-b md:border-gray-400  dark:max-md:shadow-white shadow dark:md:shadow-white md:shadow-black/20">
      <div className="container mx-auto ml-10 flex max-md:ml-3 max-md:mb-10 max-md:px-2 max-md:py-3 flex-wrap p-5 md:flex-row ">
        <Link
          className="flex title-font font-medium   mb-4 md:mb-0 "
          to="/"
        >
          {/* <img src="/home/siddharth/Programing/react course/todos-list/public/notes.png" alt="" srcset="" /> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
          <img
            src="./notes.png"
            className="w-10 h-10  text-white "
            alt="logo"
            srcset=""
          />
          <span className="ml-3 max-md:mr-3 text-xl mt-2 dark:text-white dark:hover:text-gray-400 max-md:text-s">{props.title}</span>
        </Link>
        <nav className="md:mr-auto sm:mt-2 flex flex-wrap max-sm:mx-auto max-md:mt-2 max-md:mx-0 text-base dark:text-gray-200 justify-center ">
          <span className=" md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 h-8"></span>
          <Link className="mr-5 hover:text-gray-900  dark:hover:text-gray-400" to="/">
            Home
          </Link>
          <Link className="mr-5 hover:text-gray-900 dark:hover:text-gray-400" to="/about">
            About
          </Link>

      
     

        </nav>
        

    </div>
    </header>

      <div className="fixed z-10 h-0 flex max-md:flex-row flex-row-reverse w-full max-md:mt-12 ">
     
    {/* <Search/>    */}
    </div>
        <div className='justify h-0 md:mr-32 w-full fixed z-50 max-md:mt-16 mt-2 flex flex-row-reverse'>
      <Dark/>
      </div>
    </>
  );
}

Header.defaultProps = {
  title: "Your Title Here",
  // searchbar:true
};

Header.propTypes = {
  title: propTypes.string,
};
