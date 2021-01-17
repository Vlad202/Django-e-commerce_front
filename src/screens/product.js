import React from 'react';
import settings from '../axios.config.js';
import axios from "axios";
import ImageSlider from '../components/product/image_slider';
import ProductData from '../components/product/product';


class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null
        };
    }

    componentDidMount() {
        axios.get(`${settings.baseURL}/product/${this.props.match.params.productID}/`)
        .then(response => {
            this.setState({product: response.data});
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }

    renderSlider() {
        if (this.state.product) {
            return <ImageSlider images={this.state.product.images} />
        }
        return <p>Loading...</p>
    }
    renderProduct() {
        if (this.state.product) {
            return <ProductData product={this.state.product} />
        }
        return <p>Loading...</p>
    }

    render() {
        return (
            <div className='product_detail_screen'>
                <div className='productScreen'>
                    {this.renderSlider()}
                    {this.renderProduct()}
                </div>
            </div>
        );
    }
}

export default Product;