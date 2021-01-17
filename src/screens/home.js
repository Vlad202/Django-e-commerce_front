import React from 'react';
import Latests from '../components/home/home_title';
import LatestProducts from '../components/home/latest_products';
import axios from "axios";
import settings from '../axios.config.js';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: null,
        };
    }

    componentDidMount() {
        axios.get(settings.baseURL+'/products/new/')
        .then(response => {
            this.setState({products: response.data});
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <div className='home_screen'>
                <Latests title="НОВИНКИ" />
                <LatestProducts products={this.state.products} />
            </div>
        );
    }
}

export default Home;