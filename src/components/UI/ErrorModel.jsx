import React from 'react'

const ErrorModel = (props) => {
  return (
    <div class="card text-center m-4" >
  
  <div class="card-body">
    <h2 class="card-title">{props.title}</h2>
    <p class="card-text">{props.message}</p>
    <button  class="btn btn-primary" onClick={props.errorHandler}>Okay</button>
  </div>
</div>
  )
}

export default ErrorModel