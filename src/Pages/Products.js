import React from 'react';
import Productitem from "../Components/Productitem";
import ProductsApi from "../api/products";
import FilFashion from "../Components/SectionsFils/Fashion/FilFashion";

export default class products extends React.Component{

    state= {
        products: [],
    };


    componentDidMount(){
        ProductsApi.getAll()
        .then(date => {
            this.setState({
                products: date
            })
        });
    }

     render() {
        return(
            
            <div>
    <FilFashion />

                {/* <h1>Products</h1> */}

                <div className="row mx-0 mt-4">
                    {this.state.products.map(product =>
                    <div className={'col-sm-3 col-md-2 col-lg-2'} key={product.id}>
                        <Productitem product={product} />
                    </div>
                    )}
                </div>
            </div>
        );
    }
}
    