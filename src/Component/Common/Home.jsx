import React from "react";
import "./commonStyles.css";
import ProductCard from "./ProductCard";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div>Home page</div>

        <div className="container">
          <div className="row justify-content-center">
            {[1, 2, 3, 4].map(ele => (
              <ProductCard key={ele} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
