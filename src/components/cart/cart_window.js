import React from 'react';
import settings from '../../axios.config.js';


class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
            cart_style: {
                right: -400,
            },
            data: {}
        };
    }

    componentDidMount() {
        let cart = document.querySelector('#cart_menu');
        let cart_block = document.querySelector('#cart_block');
        cart.addEventListener('click', function(e){
            if (cart_block.style.right === 0) {
                return cart_block.style.right = '-400px';
            }
            cart_block.style.right = 0;
            let shadow_block = document.getElementById('shadow');
            shadow_block.style.visibility = 'visible';
            // shadow_block.style.position = 'static';
            shadow_block.style.opacity = '0.5';
            return 0;
        })
        document.querySelector('#shadow').addEventListener('click', function(e){
            if (!cart.contains(e.target)) {
                // self.setState({cart_style: {right: -400}}); 
                let shadow_block = document.getElementById('shadow');
                cart_block.style.right = '-400px';
                shadow_block.style.visibility = 'hidden';
                shadow_block.style.opacity = '0';
            }
        })
    }

    cartData() {
        // this.setState({data: data});
        if (this.state.data) {
            return (
                Object.keys(this.state.data).map((key, id) => {
                    return (
                        <div className='cart-item' key={id}>
                            <div className='cart-item-image-block'>
                                <img className='latestProductsImage' src={`${settings.baseURL}/${this.state.data[key].product.images[0].image}`} />
                            </div>
                            <div className='cart-item-content-block'>
                                <h1>{this.state.data[key].product.name}</h1>
                            </div>
                        </div>
                    )
                })
            )
        }
        return (
            <div className='cart-item'>
                Loading...
            </div>
        )
    }

    render() {
        return (
            <div className='cart_block' id='cart_block'>
                <div className='cart-modal-content'>
                    {this.cartData()}
                </div>
            </div>
        );
    }
}

export default Cart;