import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
// import { Search } from "./MyComponents/Search";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Sresult } from "./MyComponents/Sresult";
// import { Search } from "./MyComponents/Search";
// import { Sresult } from "./MyComponents/Sresult";
// import { setTimeout } from "timers/promises";

function App() {


















  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    console.log("I am on Delete of ", todo);

    // document.getElementById("sno" + todo.sno).style.textDecoration ="line-through";
    document.getElementById("title" + todo.sno).style.textDecoration =
      "line-through";
    document.getElementById("desc" + todo.sno).style.textDecoration =
      "line-through";

    var delay = (function () {
      var timer = 0;
      return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
      };
    })();

    delay(function () {
      // do stuff
      setTodos(
        todos.filter((e) => {
          return e !== todo;
        })
      );

      localStorage.setItem("todos", JSON.stringify(todos));
    }, 500); // end delay
  };

  const addTodo = (title, desc) => {
    console.log("i am adding ", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
    
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    // console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    // console.log(todos);
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="Your Todo List"
        //  sresult={sresult} 
        
         />

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer title="Your Todo List" />
      </Router>
    </>
  );
}

export default App;
