import React from 'react'
import Card from '../UI/Card'
const UserList = (props) => {
  //console.log(props.data.map(item=>item.name))
  return (
  //   <ul class="list-group">
  //   <li class="list-group-item">An item</li>
  //   <li class="list-group-item">A second item</li>
   
  // </ul>
  <Card>
    <ul className='list-group'>
      {props.data.map(item =>{
       return <li className="list-group-item" key={item.id}>{item.name} ({item.age} Years Old)</li>
      })}
    </ul>
    </Card>
  )
}

export default UserList