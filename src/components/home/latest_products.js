import React from 'react';
import { Redirect } from 'react-router-dom';
import settings from '../../axios.config.js';
import { TransitionGroup } from 'react-transition-group';
import { CrossfadeImage } from 'react-crossfade-image';

class LatestProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    renderCost(item) {
        if (item.has_discount) {
            return (
                <div className='productCost_block'>
                    <h1>
                        {item.real_cost}
                        <span>{item.currency}</span> 
                    </h1>
                    <span className='discount_span detail_discount'><strike>{item.cost}</strike>{item.currency} </span>
                </div>
            )
        }
        return (
            <div className='productCost_block'>
                <h1>
                    {item.cost}<span>{item.currency}</span> 
                </h1>
            </div>
        )
    }
    
    handleClick = id => {
        console.log(id);
        this.setState({redirectToProduct: id});
    }

    renderProducts() {
        if (this.props.products) {
            return (
                this.props.products.map((item, id) => {
                    return (
                        <div key={id} className='productCard' onClick={() => this.handleClick(item.id)}>
                            <div className='productCardHeader'>
                                <h1 className='productHeader'>{item.name}</h1>
                                <div className='hr'>
                                    <hr />
                                </div>
                            </div>
                            <div className='productCardImage'>
                                <img className='latestProductsImage' src={settings.baseURL+item.image} />
                            </div>
                            <div className='productCardCost'>
                                {this.renderCost(item)}
                            </div>
                        </div>
                    )
                })
            )
        }
    }

    render() {
        if (this.state.redirectToProduct) {
            return <Redirect to={`/product/${this.state.redirectToProduct}/`} />
        }
        return (
            <div className='productsLatestMain'>
                <div className="productsBlock">
                    {this.renderProducts()}
                </div>

            </div>
        );
    }
}

export default LatestProducts;