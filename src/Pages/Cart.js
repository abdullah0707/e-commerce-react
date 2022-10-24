import React from "react";
// import CartItem from "../Components/CartItem";
import ShoppingTable from "../Components/ShoppingTable/ShoppingTable";
import { connect } from 'react-redux';
import { clearCart } from '../store/actions/actions';


class Cart extends React.Component{

    placeOrder = () => {
        // send the request to the server
        // clear cart
        this.props.clearCart();
        alert('We recieved your order, and we are working on it.');
    };
   


    render(){
        return (
            <div>
                <h1>Cart</h1>

                <div className="row mx-0">
                    {this.props.cartItems.map((item, index) => 
                        <div className={"col-12  px-0 justify-content-center"} key={index}>
                            {/* <CartItem item={item} index={index} /> */}
                            <ShoppingTable />
                        </div>
                    )}
                </div>

                <br />
                <h3>
                    Total: {this.props.total}
                </h3>
               

                <button className="btn btn-dark btn-block" onClick={this.placeOrder}>Place Order</button>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart,
        total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(clearCart()),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
