import logo from "./logo.svg";
import { Button, Form } from "react-bootstrap";
import "./App.css";
import FormUser from "./Components/FormUser";
import SearchUser from "./Components/SearchUser";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AppContext } from "./Components/AppContext";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {




 const [userList,setUserList]=useState([]);

 const add_user = (user)=>{
  let current_list = [...userList]  //[...userList,user]
  current_list.push(user)
  setUserList(current_list)

 }

console.log(userList);
 const value ={
    add_user,userList,setUserList
 }



  return (
    <div className="App">
    <AppContext.Provider value={value}>
      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<SearchUser />} />
        </Routes>

        <Routes>
          <Route exact path="/form" element={<FormUser />} />
        </Routes>

      </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
