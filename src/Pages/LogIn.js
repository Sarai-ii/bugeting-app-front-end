import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function LogIn() {
    const [login, setLogin] = useState("")

    const handleTextChange = (event) => {setLogin(event.target.value)}

    return (
      <div className="Login">
        <h2>Hi, Please Sign In</h2>
        <section className="card">
          <form>
            <label htmlFor="username">UserName</label>
            <input
            id="username"
            type="text"
            value=""
            name="username"
            onChange={handleTextChange}
            required
             />
            <label htmlFor="password">Password</label>
            <input 
                id="password"
                type="password"
                value=""
                name="password"
                onChange={handleTextChange}
                required
            />
            <input type="submit" />
          </form>
        </section>
      </div>
    );
}
export default LogIn;