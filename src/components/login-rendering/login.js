import React, {useState} from 'react'

export default function Login() {
    const [text, setText] = useState(false)

    // const handleLogin = () => {
    //     setText(true)
    // }

    // const handleLogout = () => {
    //     setText(false)
    // }

  return (
   <div>
    {text ? (<p>Dobrodosli</p>) : (<p>Molim vas ulogujte se</p>)}
    
    <button onClick={() => setText(!text)}>{text ? "Logout" : "Login"}</button>
   </div>
  )
}
