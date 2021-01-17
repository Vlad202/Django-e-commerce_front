import React from 'react';
import LatestProducts from '../components/home/latest_products';
import settings from '../axios.config.js';
import axios from "axios";
import Latests from '../components/home/home_title';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: null
        };
    }

    requestProducts() {
        axios.get(`${settings.baseURL}/category/${this.props.match.params.categoryName}/`)
        .then(response => {
            this.setState({products: response.data.data});
            this.setState({title: response.data.name});
        })
        .catch(error => {
            console.log(error);
        })
    }

    // componentDidMount() {
    //     this.requestProducts();
    // }
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.products === this.state.products) {
    //         axios.get(`${settings.baseURL}/category/${this.props.match.params.categoryName}/`)
    //         .then(response => {
    //             this.setState({products: response.data.data});
    //             this.setState({title: response.data.name});
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    //     }
    // }

    render() {
        if (this.state.category !== this.props.match.params.categoryName) {
            this.setState({category: this.props.match.params.categoryName});
            this.requestProducts();
        }
        return (
            <div className='home_screen'>
                <Latests title={this.state.title} />
                <LatestProducts products={this.state.products} />
            </div>
        );
    }
}

export default Category;