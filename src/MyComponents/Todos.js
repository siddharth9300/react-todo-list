import React from 'react'
import {TodoItem} from './TodoItem';
export const Todos = (props) => {
  return (




<>

<section className="text-gray-600 body-font mb-24">
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-col text-center w-full ">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-gray-900">Todo List</h1>
        </div>
  </div>
  
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">

    {props.todos.length===0?
    // (<TodoItem todo={"No Todo to Display!"}  />)
    "No Todo to Display!":
        props.todos.map((todo)=>{
          return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
        })}
        </p>


</section>

























    {/* <div className='container'>
        <h3 className='text-center my-3'>Todos List</h3>
    
        {props.todos.length===0?"No Todos to Display!":
        props.todos.map((todo)=>{
            return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
        })}
        
        
        
        
        </div> */}
        </>
  )
}
