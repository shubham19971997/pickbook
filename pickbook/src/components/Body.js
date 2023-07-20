import React,{useState} from 'react'
import Login from './Login'
import Signin from './Signup'

const Body = () => {

const [user, setUser] = useState(false)
  return (
    <div>
        {
            user ? <Login /> :<Signin />
        }
    </div>
  )
}

export default Body