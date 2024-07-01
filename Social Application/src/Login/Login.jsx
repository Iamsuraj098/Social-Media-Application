import "./Login.scss"
import "./image.jpg"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="Login1">
      <div className="Card1">
        <div className="box11">
          <h1>Hello World</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, voluptate ea. Porro velit exercitationem quaerat debitis eveniet, laboriosam necessitatibus ut reprehenderit sed assumenda reiciendis nam architecto officiis illum, quod obcaecati repellendus?</p>
          <span>Don't you have a account?</span>
          <Link to={"/register"}><button>Register</button></Link>
        </div>
        <div className="box21">
          <h1>Login</h1>
          <form action="#">
            <input type="text" placeholder="Username" />
            <input type="password" name="Password" id="password" placeholder="Password" />
            <button type="Submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login