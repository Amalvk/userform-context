import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContext";

function SearchUser(props) {
  const { userList,setUserList } = useContext(AppContext);


  const sortedList=()=>{
    const sorted =  userList.sort((a,b)=> a.fname>b.fname ? 1 : -1) 
    setUserList([...sorted])
  }

  const sortedEmail=()=>{
    const sorted =  userList.sort((a,b)=> a.email>b.email ? 1 : -1) 
    setUserList([...sorted])
  }
  
  const sortedIndustru=()=>{
    const sorted =  userList.sort((a,b)=> a.industry>b.industry ? 1 : -1) 
    setUserList([...sorted])
  }

  return (
    <div style={{ backGround: "white" }}>
    
      <Link
        to="/form"
        style={{ textDecoration: "none", color: "white", marginLeft: "34.6em" }}
      >
       Add Form{" "}
      </Link>
      {
      <table
        class="table table-striped table-dark"
        style={{
          width: "40em",
          background: "white",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <thead  style={{cursor: "default"}}> 
          <tr>
            <th scope="col">
              <input type="checkbox" />
            </th>
            <th scope="col" onClick={sortedList}>Name</th>
            <th scope="col" onClick={sortedEmail}>Email Id </th>
            <th scope="col" onClick={sortedIndustru}>Industry</th>
            <th scope="col" >Intrested Service</th>
            <th scope="col" >Video Demo</th>
          </tr>
        </thead>
        {userList.length > 0 &&
          userList.map((item) => {
           return(

            <tbody>
              <tr className="table">
                <td><input type="checkbox" /></td>
                <td>{item.fname}{item.lname}</td>
                <td>{item.email}</td>
                <td>{item.industry}</td>
                <td>{item.intrestedService} </td>
                <td>{item.videodemo}</td>
              </tr>
            </tbody>
           )

          })}
      </table>
        }
    </div>
  );
}

export default SearchUser;
