

import React from "react";
import "./commonStyles.css"

export default class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
          <div>

            <div class="card" style={{width: "14rem",borderRadius:6,margin:8}}>
            <img src="https://hausimg.imgix.net/s/files/1/0053/2792/products/ReverseTableLamp.png?v=1588926891&auto=format&w=1280&" class="card-img-top" alt="lamp"/>
            <div class="card-body bg-light">
              <h6 class="card-text">Revesre Table Lamp</h6>
              <h6 class="card-text text-secondary">By Menu</h6>
              <h6 class="card-text">price: $409</h6>
              <button class="card-text" style={{backgroundColor:"black",color:"#E0E0E1",border:"none",borderRadius:6,padding:"4px 10px"}}>Add to cart</button>
            </div>
            </div>
          </div>
       
      </>
    );
  }
}
