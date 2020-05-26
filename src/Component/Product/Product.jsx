
import React from "react";
import {connect} from "react-redux"
import {addProduct, removeProductData, modifyProductData} from "../../Redux/actionCreators"
import "./styles.css"

export class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
      name:"",
      cost:"",
      id:"",
      desc:"",
      imageUrl:"",
      company:""
     

    };
  }
  handleChange = e=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleClick = (product)=>{
    console.log(product)
  }

  
  render() {
    const {name,cost,id,desc,imageUrl,company} = this.state
    const product={name,cost,id,desc,imageUrl,company}
    return (
      <>
        <div className="container">
          <div className="row ml-3">
            <div>

            <h1>Admin Dashboard</h1>
            <h6 style={{fontWeight:"bold", color:"#3176FF"}}><i style={{fontSize:24}} class="far fa-chart-bar"></i> Product added till now : </h6>
            <h6 style={{fontWeight:"bold",color:"#FA058B"}}><i style={{fontSize:24}}  class="far fa-list-alt"></i> Total Count :{"0"}</h6>
            <h6 style={{fontWeight:"bold",color:"#7405FA"}}><i style={{fontSize:24}} class="fas fa-undo-alt"></i> Modify Count:{"0"}</h6>
            <h6 style={{fontWeight:"bold",color:"#FA058B"}}><i style={{fontSize:24}} class="far fa-trash-alt"></i> Removed Count:{"0"}</h6>
            </div>
          </div>
        </div>
        <div className="container">
          
          <div className="row text-center">
            <div class="col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6">

              <div style={{boxShadow:"0px 4px 10px 0px rgba(0,0,0,0.45)",borderRadius:10}}>

                  <div class="border rounded-top text-center p-2" style={{fontWeight:"bold",fontSize:24,color:"black"}}>
                      product management panel
                  </div>
                  <div className="border" style={{height:200}}>
                      <button data-toggle="modal" data-target="#staticBackdrop" style={{backgroundColor:"black",fontSize:16,color:"#E0E0E1",border:"none",borderRadius:5,padding:"6px 16px",margin:4}}>Add Product</button>
                      <button data-toggle="modal" data-target="#staticBackdrop1" style={{backgroundColor:"white",fontSize:16,color:"black",border:"0.8px solid black",borderRadius:5,padding:"6px 14px",margin:4}}>Remove Product</button>
                      <button data-toggle="modal" data-target="#staticBackdrop2" style={{backgroundColor:"white",fontSize:16,color:"black",border:"0.8px solid black",borderRadius:5,padding:"6px 14px",margin:4}}>Modify Product</button>
                      <br/>
                      <div style={{height:30,width:30,borderRadius:15,backgroundColor:"#FA058B"}} className="animate"></div>
                  </div>
                  <div class="text-center border rounded-bottom" style={{height:40}}>
                      <img
                          width="38"
                          className="img-fluid"
                          src="https://st2.depositphotos.com/5142301/11420/v/950/depositphotos_114200716-stock-illustration-letter-r-logo-in-play.jpg"
                          alt="logo react-connect"
                          />
                          React-Connect Admin
                  </div>
              </div>
            </div>
          </div>
        </div>

 {/* modal code for add product  */}
<div class="modal fade " id="staticBackdrop" data-backdrop="static"  aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Admin Add your product</h5>
      </div>
      <div class="modal-body">
        <div>
          <span style={{margin:10,padding:10}}>Name:</span>
           <input name="name" value={name} 
           onChange={this.handleChange}
            placeholder="Tela Carafe" style={{margin:10,border:"none",borderBottom:"0.6px solid #C9C0D3",outline:"none",}} />
        </div>

        <div>
          <span style={{margin:10,padding:10}}>UUID:</span>
           <input name="id" value={id} 
           onChange={this.handleChange}  placeholder="RC-P100" style={{margin:10,border:"none",borderBottom:"0.6px solid #C9C0D3",outline:"none"}} />
        </div>

        <div>
          <span style={{margin:10,padding:10}}>Cost:</span> 
          <input name="cost" value={cost} 
           onChange={this.handleChange}
            placeholder="$49" style={{margin:10,border:"none",borderBottom:"0.6px solid #C9C0D3",outline:"none"}} />
        </div>

        <div>
          <span style={{margin:10,padding:10}}>Decription:</span> 
          <input name="desc" value={desc} 
           onChange={this.handleChange} placeholder=" A progressive glass collection evolved through material experimentation." style={{margin:10,border:"none",borderBottom:"0.6px solid #C9C0D3",outline:"none"}} />
        </div>

        <div>
          <span style={{margin:10,padding:10}}>Company:</span>
           <input name="company" value={company} 
           onChange={this.handleChange} placeholder="Hay" style={{margin:10,border:"none",borderBottom:"0.6px solid #C9C0D3",outline:"none"}} />
        </div>

        <div>
          <span style={{margin:10,padding:10}}>Image url:</span> 
          <input name="imageUrl" value={imageUrl} 
           onChange={this.handleChange} placeholder="https://hausimg.imgix.net" style={{margin:10,border:"none",borderBottom:"0.6px solid #C9C0D3",outline:"none"}} />
        </div>

      <div class="modal-footer text-center">
          <button data-dismiss="modal" onClick={()=>this.props.handleProduct(product)}   style={{backgroundColor:"black",fontSize:16,color:"#E0E0E1",border:"none",borderRadius:5,padding:"6px 16px",margin:10}}>Add Product</button>
      </div>
      </div>
    </div>
  </div>
</div> 


{/* modal code for remove product */}
{/* <div class="modal fade " id="staticBackdrop1" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Admin remove your product</h5>
      </div>
      <div class="modal-body">
        
        <div>
          <span style={{margin:10,padding:10}}>Name:</span> <input placeholder="Tela Carafe" style={{margin:10,border:"none",borderBottom:"0.6px solid #C9C0D3",outline:"none",}} />
        </div>
        <div>
          <span style={{margin:10,padding:10}}>UUID:</span> <input placeholder="RC-P100" style={{margin:10,border:"none",borderBottom:"0.6px solid #C9C0D3",outline:"none"}} />
        </div>
      </div>
      <div class="modal-footer text-center">
          <button data-dismiss="modal" style={{backgroundColor:"black",fontSize:16,color:"#E0E0E1",border:"none",borderRadius:5,padding:"6px 16px",margin:10}}>Remove Product</button>
      </div>
    </div>
  </div>
</div> */}

{/* modal code for modify product */}
{/* <div class="modal fade " id="staticBackdrop2" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Admin remove your product</h5>
      </div>
      <div class="modal-body">
        
        <div>
          <span style={{margin:10,padding:10}}>Name:</span> <input placeholder="Tela Carafe" style={{margin:10,border:"none",borderBottom:"0.6px solid #C9C0D3",outline:"none",}} />
        </div>
        <div>
          <span style={{margin:10,padding:10}}>UUID:</span> <input placeholder="RC-P100" style={{margin:10,border:"none",borderBottom:"0.6px solid #C9C0D3",outline:"none"}} />
        </div>
      </div>
      <div class="modal-footer text-center">
          <button data-dismiss="modal" style={{backgroundColor:"black",fontSize:16,color:"#E0E0E1",border:"none",borderRadius:5,padding:"6px 16px",margin:10}}>Modify Product</button>
      </div>
    </div>
  </div>
</div> */}
      </>
    );
  }
}

  const mapStateToProps= state =>({
    productData:state.productData
  })
  const mapDispatchToProps = dispatch=>({
     handleProduct: product=>dispatch(addProduct(product))
  })

  export default connect(mapStateToProps,mapDispatchToProps)(Product)
