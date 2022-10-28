import "../Components/Login/Login.css"
import { useSelector } from "react-redux";
function Login() {
    const url = useSelector((state) => state.url.value);

    const handleSubmit = (e) => {
        e.preventDefault()

        //fetch the api and get the token
        //save the token in local storage
        //redirect to home page

        fetch(url + 'token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: e.target[0].value,
                password: e.target[1].value
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.access) {
                localStorage.setItem('token', data.access)
                window.location.href = '/'
                }else{
                    alert('Invalid Credentials')
                }

            })
    }

    return (<>
        <div className="Login">
            <div className="Login-Container">
                <h1 className="Login-Title">Instagram</h1>
                <form onSubmit={handleSubmit}>
                    <input className="Login-Input" type="text" placeholder="Username" />
                    <input className="Login-Input" type="password" placeholder="Password" />
                    <button className="Login-Button">Login</button>
                </form>

                <span className="Login-Signup">Don't have an account? <a href="/signup">Sign up</a></span>

            </div>
        </div>
    </>);
}

export default Login;