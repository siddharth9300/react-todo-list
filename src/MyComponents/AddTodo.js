import React, { useState } from "react";

export const AddTodo = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    // if (!title || !desc) {
    //   alert("Title and discription can not be blank");
    // }else{

        addTodo(title, desc);
        setTitle("");
        setDesc("");
    // }
  };
  return (
    <>
<section className="text-gray-600 body-font relative ">
  <div className="container px-5 pt-24 mx-auto ">
    <div className="flex flex-col text-center w-full max-md:mt-10 mb-6">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add a Todo</h1>
      {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p> */}
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <form className="flex flex-wrap -m-2" onSubmit={submit}>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Title</label>
            <input type="text" id="name" name="name" value={title} onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
          </div>
        </div>

        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Description</label>
            <textarea id="message" name="message"  value={desc}
            
            onChange={(e) => {
              setDesc(e.target.value);
            }} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <button type="submit" className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg" >Add</button>
        </div>


        </form>
    </div>
        <hr className="my-8 w-full h-1 bg-gray-200 rounded border-0 dark:bg-gray-300"/>
  </div>
</section>

























{/* 


    <div className="container my-3">
      <h3 className="text-center">Add a Toto</h3>
      <form onSubmit={submit}>
        <div className="">
          <label htmlhtmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control title"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mt-3">
          <label htmlhtmlFor="desc" className="form-label desc">
            Toto Description
          </label>
          <input
            type="text"
            value={desc}
            required
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            id="desc"
          />
        </div>

        <button type="submit" id="addtodo" className="btn btn-success my-3">
          Add Toto
        </button>
      </form>
      <hr />
    </div> */}
  </>
  );
};
