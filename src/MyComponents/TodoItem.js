import React from 'react'
// import {useRef} from 'react';
// import ref from './Sresult';
import "../App.css";
export const TodoItem = ({todo ,onDelete}) => {


  return (

<section className="text-gray-600 body-font overflow-hidden" id={"scroll-"+todo.sno}>
  <div className="container px-5 py-12 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100">

      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-16 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          {/* <span className="font-semibold text-2xl title-font text-gray-900" id={"sno"+todo.sno}>{todo.sno+1}</span> */}
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2" id={"title"+todo.sno}>{todo.title}</h2>
          <p className="leading-relaxed" id={"desc"+todo.sno}>{todo.desc}</p>
          <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 items-center mt-4 focus:outline-none hover:bg-red-600 rounded del-btn" onClick={()=>{onDelete(todo)}}>Done</button>
        
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

// {/*     
//     <div className='container todoitem'>
//       <h4  id="itemtitle">{todo.title}</h4>
//       <p id="itemdesc">{todo.desc}</p>
//       <button id='deletebtn' className='btn  btn-danger mb-5' onClick={()=>{onDelete(todo)}}>Delete</button>
//    </div> */}


