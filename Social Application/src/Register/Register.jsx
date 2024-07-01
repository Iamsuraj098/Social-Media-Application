import React from 'react'
import "./Register.scss"
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="Register">
      <div className="Card2">
        <div className="box12">
          <h1>Hello World</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, voluptate ea. Porro velit exercitationem quaerat debitis eveniet, laboriosam necessitatibus ut reprehenderit sed assumenda reiciendis nam architecto officiis illum, quod obcaecati repellendus?</p>
          <span>Do you have a account?</span>
          <Link to={"/Login"}><button>Login</button></Link>
        </div>
        <div className="box22">
          <h1>Register</h1>
          <form action="#">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Create Username" />
            <input type="Email" placeholder="Email" />
            <input type="password" name="Password" id="password" placeholder="Password" />
            <button type="Submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
