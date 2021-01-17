import React from 'react';
import Quantity from './quantity';
// import { PathStorage } from 'pathstorage';

class ProductData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
            eventSize: null,
            quantity: 1,
            size: 'default'
        };
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    renderCost() {
        if (this.props.product.has_discount) {
            return (
                <div className='detailCostBlock'>
                    <h1>
                        {this.props.product.real_cost}
                        <span>{this.props.product.currency}</span> 
                    </h1>
                    <span className='discount_span detail_discount'><strike>{this.props.product.cost}</strike>{this.props.product.currency} </span>
                </div>
            )
        }
        return (
            <div className='detailCostBlock'>
                <h1>
                    {this.props.product.cost}<span>{this.props.product.currency}</span> 
                </h1>
            </div>
        )
    }

    changeSize = (item, id) => (event) => {
        if (this.state.eventSize) {
            this.state.eventSize.target.classList.remove('pickedSize');
            this.state.eventSize.target.classList.add('sizeItem');
        }
        event.target.classList.remove('sizeItem');
        event.target.classList.add('pickedSize');
        // this.setState({size_element_id: id});
        this.setState({size: item.size});
        this.setState({eventSize: event});
    }

    renderSizes() {
        if (this.props.product.sizes) {
            return (
                this.props.product.sizes.map((item, id) => {
                    return (
                        <div onClick={this.changeSize(item, id)} className='sizeItem' key={id}>
                            {item.size}
                        </div>
                    )
                })
            )
        }
        return null;
    }

    decrement() {
        if (this.state.quantity > 1) {
            this.setState({quantity: this.state.quantity-1});
        }
    }
    increment() {
        if (this.state.quantity < 10) { 
            this.setState({quantity: this.state.quantity+1});
        }
    }

    addToCart() {
        let storage_products = localStorage.getItem('products');
        let products = {};
        if(storage_products) {
            products = JSON.parse(storage_products);
        }
        let id = this.props.product.id;
        let size = this.state.size;
        let cart_id = id + size;
        let item = {        
            product: this.props.product,
            quantity: this.state.quantity,
            size: size
        }
        products[cart_id] = item;
        // PathStorage.setItem('products', JSON.stringify(products));
        // console.log('PATHSTORAGE');
        localStorage.setItem('products', JSON.stringify(products));
        console.log(localStorage.getItem('products'));
        let cart_block = document.querySelector('#cart_block');
        let shadow_block = document.getElementById('shadow');
        cart_block.style.right = 0;
        shadow_block.style.visibility = 'visible';
        shadow_block.style.opacity = '0.5';
    }

    render() {
        return (
            <div className='productDataBlock'>
                <div className='productDetaildHeaderBlock'>
                    <h1 className='productDetaildHeader'>{this.props.product.name}</h1>
                    <hr className='hr_product_details' />
                </div>
                {this.renderCost()}
                <div className='product_detail_item productDetailDescriptionBlock'>
                    <h1 className='product_detail_paragraph'>ОПИСАНИЕ: </h1>
                    <p className='productDetailDescription'>
                        {this.props.product.name}
                    </p>
                </div>
                <div className='product_detail_item productDetailCareBlock'>
                    <h1 className='product_detail_paragraph'>УХОД: </h1>
                    <p className='productDetailCare'>
                        {this.props.product.care}
                    </p>
                </div>
                <div className='product_detail_item productSizesBlock'>
                    {this.renderSizes()}
                </div>
                <div className='product_detail_item productQuantity'>
                    <Quantity quantity={this.state.quantity} decrement={this.decrement} increment={this.increment} />
                    <div className='orderBlock'>
                        <button className='order_btn' href="#" onClick={() => this.addToCart()}>ЗАКАЗАТЬ</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductData;