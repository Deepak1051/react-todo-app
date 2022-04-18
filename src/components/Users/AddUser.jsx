import React, { useState } from "react";
import Card from "../UI/Card";
import ErrorModel from "../UI/ErrorModel";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const[error,setError] = useState()

  //const[userValue, setUserValue]= useState([])
  //const[ageValue, setAgeValue] = useState([])
  function usernameHandler(e) {
    setUsername(e.target.value);
  }

  function ageHandler(e) {
    setAge(e.target.value);
  }
  const addUserHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({title:"Invalid input",
           message:"please enter a valid name and age (non-empty values)"})
      return;
    }
    if(+age<1){
      setError({title:"Invalid age",message:"Please enter a valid age (>0)"})
      return 
    }

    props.onAddUser(username, age);

  

    setUsername("");
    setAge("");
  };
  const errorHandler=()=>{
    setError(null)
  }
  return (
    <>
      {error ? <ErrorModel title={error.title} message={error.message} errorHandler={errorHandler} /> :
      <Card className="p-3">
        <form onSubmit={addUserHandler}>
          <div class="mb-3 mt-2 container">
            <label for="username" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="username"
              onChange={usernameHandler}
              value={username}
            />

            <label for="age" class="form-label">
              Age (Years)
            </label>
            <input
              type="number"
              class="form-control"
              id="age"
              onChange={ageHandler}
              value={age}
            />

            <button type="submit" className="btn btn-primary mt-2">
              Add User
            </button>
          </div>
        </form>
      </Card> }
      
    </>
  );
};

export default AddUser;
