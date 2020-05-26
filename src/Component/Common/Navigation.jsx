import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./commonStyles.css";

const Styles = {
  logoName: {
    fontSize: 30,
    marginLeft: 10
  },
  navLink: {
    color: "black",
    padding: "8px 12px",
    fontSize: 18,
    textDecoration: "none",
    fontWeight: 300,
    opacity: 0.9
  }
};

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div>
          <span style={Styles.logoName}> React-Connect</span>

          <img
            width="100"
            className="img-fluid"
            src="https://st2.depositphotos.com/5142301/11420/v/950/depositphotos_114200716-stock-illustration-letter-r-logo-in-play.jpg"
            alt="logo react-connect"
          />
        </div>
        <ul className="nav justify-content-center">
          <li>
            <Link className="navLink" to="/" style={Styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/cart" style={Styles.navLink}>
              Cart
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/product" style={Styles.navLink}>
              Product
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/order" style={Styles.navLink}>
              Order
            </Link>
          </li>
        </ul>
      </>
    );
  }
}
