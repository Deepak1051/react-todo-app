import {useState} from 'react'

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";



function App() {
  const[userData, setUserData] = useState([])

  const userAddHandler = (uName, uAge)=>{
    console.log(userData)
    setUserData(prevState=>{
      return [...prevState,{name:uName, age:uAge, id:Math.random().toString()}]
    })
    
  }
  
  return (
    <div >
     <AddUser onAddUser={userAddHandler}/>
     <UserList data={userData}/>
    </div>
  );
}

export default App;
