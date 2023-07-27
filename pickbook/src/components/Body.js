import React,{useState} from 'react'
import Login from './Login'
import Signup from './Signup'

const Body = () => {

const [user, setUser] = useState(false)
  return (
    <div>
        <Signup/>
    </div>
  )
}

export default Body