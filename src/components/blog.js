import React from "react"
import { Button, Image, NavDropdown } from "react-bootstrap"
import Ceo from "../images/ceo1.png"
import blogModule from "../components/blog.module.css"

export default class blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lgbtx: "Login",
      showImage: false,
      drop: false,
    }

    this.showDrop = this.showDrop.bind(this)
  }

  changeState = () => {
    if (this.state.lgbtx === "Login") {
      this.setState({ lgbtx: "Logout", showImage: true })
    } else {
      this.setState({ lgbtx: "Login", showImage: false })
    }
  }

  showDrop() {
    this.setState({ drop: true })
  }

  dropsDown() {
    return (
      <>
        <div className={`${blogModule.arrow_box}`}>
          <p className={`${blogModule.drop_title}`}>Welcome Oracle !
            <br/>
            You are logged in with google
          </p>
          <li>Market placee</li>
          <li>Market placee</li>
          <li>Market placee</li>
        </div>
      </>
    )
  }

  render() {
    return (
      <div>
        {this.state.showImage ? <Image src={Ceo} roundedCircle /> : <p></p>}
        <Button onClick={this.changeState}>{this.state.lgbtx}</Button>

        <NavDropdown title={<span style={{ color: "red" }}>Dropdown</span>}>
          <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">
            Something else here
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <br></br>
        <p onClick={this.showDrop}>Customdropdown</p>
        <br></br>
        {this.state.drop ? this.dropsDown() : null}
      </div>
    )
  }
}
