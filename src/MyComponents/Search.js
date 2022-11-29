import React, { useState } from "react";
import { Sresult } from "./Sresult";

export const Search = () => {
  const initTodo = JSON.parse(localStorage.getItem("todos"));
  // console.log(initTodo.title + "this is search");
  const [query, setQuery] = useState("");
  const [hasFocus, setFocus] = useState(false);

  const inputEvent = (e) => {
    const data = e.target.value.toLowerCase();

    if (data.length === 0)   {
      setQuery("");
      initTodo.title = "No Todo Found";
    } else {
      setQuery(data);
      // initTodo.title = initTodo.filter((asd) =>
      //   asd.title.toLowerCase().includes(query)
      // );
    }
    console.log(data);
  };

  return (
    <>
  
      <div className="relative w-96 z-20  p-5  md:flex-row">
 
          <div className="flex justify-between overflow-hidden rounded-md bg-white shadow shadow-black/20 items-end">
            <input
              type="text"
              className="block w-full flex-1 py-2 px-3 rounded focus:outline-none bg-gray-200 hover:bg-gray-300"
              placeholder="Search Todo..."
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              value={query}
              onChange={inputEvent}
            />
 
          </div>
 

        {(initTodo.filter((stodos) => stodos.title.toLowerCase().includes(query))
          // .length === 0
          === null
          ) 
          && (hasFocus===true)
          ? (<Sresult title = {"No Todo Found"}/>)
          : initTodo
              .filter((stodos) => stodos.title.toLowerCase().includes(query))
              .map((stodo) => {
               
                if (query.length === 0) {
                  return null;
                } else {
                  return (
                    <Sresult
                      sno={stodo.sno}
                      key={stodo.sno + 1}
                      title={stodo.title}
                      desc={stodo.desc}
                    />
                  );
                }
              })}

 
      </div>
    </>
  );
};

export default Search;
