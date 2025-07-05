import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {id} = useParams(); // this id name should be same as given in the router path
  return (
    <div>User ID : {id}</div>
  )
}

export default User