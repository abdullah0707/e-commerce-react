import React from 'react';
import Information from "../Components/Information/Information";
import {getById} from "../api/products";
import { connect } from 'react-redux';
import {addToCart} from "../store/actions/actions";
import './Home.css';


class Product extends React.Component{
    
state={
    loading: true,
    quantity: 0,
    product: {}
}
decrease = () => {
    this.setState({ quantity: this.state.quantity - 1 });
  }

  increase = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  }

componentDidMount(){
    const id = this.props.match.params.id;

    getById(parseInt(id))
        .then(product => {
            this.setState({
                product,
                loading: false
            });
        })
    }

    handleDecrease = (event)=>{
        const quantity = event.target.quantity;

        if(quantity < 0){
            return;
        }

        this.setState({
            quantity: quantity
        })
    }

    addToCart = (product) =>{
        this.props.addToCart(product, this.state.quantity);
    }

render(){

    if(this.state.loading)

        return 'loading..';

        const product = this.state.product;
        const quantity = this.state.quantity;

        return(
    <div className="container my-4">
        <div className={'row'}>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
      {/* <!--Slides--> */}
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img className="d-block w-100" src={product.image1} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={product.image2} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={product.image3} alt="Third slide" />
        </div>
      </div>
      {/* <!--/.Slides--> */}
      
      {/* <!--Controls--> */}
      <a className="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
        {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
        {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
        <span className="sr-only">Next</span>
      </a>
      {/* <!--/.Controls--> */}
      <ol className="carousel-indicators justify-content-center mx-1">
    <li data-target="#carousel-thumb" data-slide-to="0" className="active">
      <img src={product.image1} width="100"/>
    </li>
    <li data-target="#carousel-thumb" data-slide-to="1">
      <img src={product.image2} width="100"/>
    </li>
    <li data-target="#carousel-thumb" data-slide-to="2">
      <img src={product.image3} width="100"/>
    </li>
  </ol>
    </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
            <h1>{product.name}</h1>

                <p>Price: {product.price}$</p>

                <p>{product.description}</p>

                <br /><br />
                <div className="def-number-input number-input">
                <button onClick={this.decrease} className="minus"></button>
                <input className="quantity" name="quantity" value={this.state.quantity}  onChange={this.handleDecrease} type="number" />
                <button onClick={this.increase} className="plus"></button>
                </div>
                {/* <input type="number" value={quantity} onChange={this.handleQuantity} /> */}
                <br /><br />

                <p>Total: {quantity * product.price}$</p>

                <button className="btn btn-dark" onClick={()=> this.addToCart(product)}>
                    Add To Cart
                </button>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6">
              <a className="text-ed">
              <i className="fa fa-podcast fa-fw" aria-hidden="true"></i>
                  1 year warranty
              </a>

              <div>
                <br /><br />
                <a className="text-ed">
                <i className="fa fa-shopping-bag fa-fw" aria-hidden="true"></i>{' '}{' '}
                  Sold by Story Shopping
                </a>
              </div>
              <br /><br />
              <div>
                <a className="text-ed">
                <i className="fa fa-reply fa-fw" aria-hidden="true"> </i>{' '}{' '}
                  FREE RETURNS
                <br /><span className="text-muted"> Get free returns on eligible items</span> 
                </a>
              </div><br /><br />
                <a className="text-ed">
                <i className="fa fa-truck fa-flip-horizontal fa-fw" aria-hidden="true"> </i>{' '}{' '}
                  TRUSTED SHIPPING
                <br /><span className="text-muted">Free shipping when you spend EGP 350 and above</span> 
                </a>
            </div>

        </div>
<Information />
    </div>

        );  
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (productinfo, quantity) => dispatch(addToCart(productinfo, quantity)), 
    };
}

export default connect(null, mapDispatchToProps)(Product);

 