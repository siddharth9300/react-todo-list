import React from 'react'
import propTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Header(props) {
  return (





<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
 
    <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
      {/* <img src="/home/siddharth/Programing/react course/todos-list/public/notes.png" alt="" srcset="" /> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      <img src="./notes.png" className="w-10 h-10 text-white "  alt="logo" srcset="" />
      <span className="ml-3 text-xl">{props.title}</span>
    </Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-gray-900" to="/">Home</Link>
      <Link className="mr-5 hover:text-gray-900" to="/about">About</Link>
    </nav>
   {props.searchbar? <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
         <path d="M5 12h14M12 5l7 7-7 7"></path>
       </svg>
     </button>: ""}
  </div>
</header>
























//     <nav className="navbar navbar-expand-lg bg-light">
//   <div className="container-fluid">
//     <Link className="navbar-brand" to="/">{props.title}</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/about">About</Link>
//         </li>
        
//       </ul>
//       {props.searchbar? <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>: ""}
//     </div>
//   </div>
// </nav>
  )
}

Header.defaultProps ={
    title:"Your Title Here",
    // searchbar:true
}

Header.propTypes = {
    title: propTypes.string,
    searchBar: propTypes.bool.isRequired
}