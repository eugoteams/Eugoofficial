import React, { Component } from "react"
import { GoogleLogin, GoogleLogout } from "react-google-login"
import { Image, NavDropdown, Button } from "react-bootstrap"
import { BiLogInCircle } from "react-icons/bi"
import { FiLogOut } from "react-icons/fi"
import { IoMdArrowDropdown } from "react-icons/io"
import { handleLogin } from "../services/auth"
import { navigate } from "gatsby"
import loginSytle from "../components/login.module.css"

export default class login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginbtx: true,
      userimage: "",
      username: "",
      modalShow: false,
      showDropDown: false,
    }
  }

  responseLoginGoogle = response => {
    handleLogin("true")
    this.setState({
      loginbtx: false,
      userimage: response.profileObj.imageUrl,
      username: response.profileObj.givenName,
      modalShow: false,
    })
  }

  secureSignOut() {
    const auth2 = window.gapi.auth2.getAuthInstance()
    if (auth2 != null) {
      auth2.signOut().then(auth2.disconnect().then(this.props.onLogoutSuccess))
    }
  }

  responseLogoutGoogle = response => {
    handleLogin("false")
    this.secureSignOut()
    this.setState({
      loginbtx: true,
      userimage: "",
      username: "",
    })
  }

  login() {
    console.log("Click in")
    return (
      <>
        <GoogleLogin
          clientId="641473102840-j4470inpeiqoavbih3e3v6jk5ks8qm5a.apps.googleusercontent.com"
          render={renderProps => (
            <div
              role="button"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="border-0"
            >
              <BiLogInCircle /> Login with Gmail
            </div>
          )}
          buttonText="Login"
          isSignedIn={true}
          onSuccess={this.responseLoginGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </>
    )
  }

  logout() {
    return (
      <>
        <GoogleLogout
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          render={renderProps => (
            <div className="d-flex flex-row justify-content-center">
              <Image
                src={this.state.userimage}
                roundedCircle
                width="35"
                height="35"
              />
              <NavDropdown
                title={
                  <span className={loginSytle.dropdowntitle}>
                    {this.state.username}
                  </span>
                }
              >
                <div style={{ width: "350px" }} className="text-center">
                  <NavDropdown.Item
                    className={`${loginSytle.drop_title}`}
                    style={{ backgroundColor: "#FFFFFF" }}
                  >
                    <i>
                      Welcome, <b>{this.state.username}</b> <br />
                      You're on a Google account.
                    </i>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    onClick={() => navigate("/app/market")}
                    className="py-2"
                  >
                    {" "}
                    Market place
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => navigate("/app/rent")}
                    className="py-2"
                  >
                    {" "}
                    Accomodation
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => navigate("/app/market")}
                    className="py-2"
                  >
                    Finance
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item eventKey="4.4">
                    <Button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      style={{ backgroundColor: "#011A32", width: "100%" }}
                    >
                      {" "}
                      <FiLogOut /> Logout
                    </Button>
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
            </div>
          )}
          buttonText="Logout"
          onLogoutSuccess={this.responseLogoutGoogle}
        ></GoogleLogout>
      </>
    )
  }

  render() {
    return <div>{this.state.loginbtx ? this.login() : this.logout()}</div>
  }
}
