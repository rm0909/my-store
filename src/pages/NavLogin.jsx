/*dependencies*/
import { useRef, useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Nav } from "react-bootstrap";
import axios from "axios";
import jwtDecode from "jwt-decode";
/*local components*/
import { Context } from "../context/ContextProvider";
import { baseURL } from "../helper/url";
function NavLogin() {
  //context
  const [userName, setUserName] = useState("");
  const { authorized, setAuth } = useContext(Context);
  //states
  let emailRef = useRef();
  let passwordRef = useRef();
  useEffect(() => checkUserName(), []);
  //handlechange
  function handleChange(e) {
    const { id, value } = e.target;
    switch (id) {
      case "email":
        return (emailRef.current.value = value);
      case "password":
        return (passwordRef.current.value = value);
      default:
        return;
    }
  }
  //post request login
  async function loginUser(e) {
    e.preventDefault();
    if (emailRef.current.value === null || passwordRef.current.value === null) return
    const response = await axios.post(`${baseURL}/user/login`, {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    if (response.data) {
      const { _id, name } = jwtDecode(response.data.token);
      const [firstName] = name.split(" ");
      let userData = {
        userID: _id,
        userName: firstName,
      };
      localStorage.setItem("storeUserData", JSON.stringify(userData));
      checkUserName();
      setAuth();
    }
  }
  const checkUserName = () => {
    const data = JSON.parse(localStorage.getItem("storeUserData"));
    if (!data) return;
    setUserName(data.userName);
  };
  const clearStorage = () => {
    localStorage.removeItem("storeUserData");
    window.location.reload();
    return;
  };
  return (
    <Nav>
      <h1>MERCADO DIBRE</h1>
      <div className="nav">
        <Link to="/my-store/">HOME</Link>

        {!authorized ? (
          <div className="space-even">
            <form>
              <label htmlFor="text">
                email
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  id="email"
                  value="johndoe@email.com"
                  placeholder="johndoe@email.com"
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="password">
                password
                <input
                  ref={passwordRef}
                  type="password"
                  name="password"
                  id="password"
                  value="123456"
                  placeholder="123456"
                  onChange={handleChange}
                />
              </label>
              <Link to="/my-store/" replace={true}><Button variant="primary" onClick={loginUser}>
                Login
              </Button></Link>
            </form>{" "}
           <Link to="/my-store/register">register</Link>
          </div> 
        ) : (
          <div>
            <Link to="/my-store/user">{userName}</Link>{" "}
            <Link to="/my-store/">
            <Button variant="secondary" onClick={clearStorage}>
              Log out
            </Button></Link>
          </div>
        )}
      </div>
    </Nav>
  );
}
export { NavLogin };
