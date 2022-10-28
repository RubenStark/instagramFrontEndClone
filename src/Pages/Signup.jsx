import "../Components/Login/Login.css"

function Signup() {
    return ( 
        <div className="Login">
        <div className="Login-Container">
            <h1 className="Login-Title">Instagram</h1>
            <input className="Login-Input" name="username" type="text" placeholder="Username" />
            <input className="Login-Input" name="password" type="password" placeholder="Password" />
            <button className="Login-Button">Sign Up</button>
            <span className="Login-Signup">Already have an account? <a href="/signup">Login</a></span>

        </div>
    </div>
     );
}

export default Signup;