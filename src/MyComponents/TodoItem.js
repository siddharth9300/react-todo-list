import React from 'react'

export const TodoItem = ({todo ,onDelete}) => {
  return (


<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-12 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100">

      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-32 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold text-2xl title-font text-gray-900">{todo.sno+1}</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{todo.title}</h2>
          <p className="leading-relaxed">{todo.desc}</p>
          <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 inline-flex items-center mt-4 focus:outline-none hover:bg-red-600 rounded" onClick={()=>{onDelete(todo)}}>Done</button>
        
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


