import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import settings from '../../axios.config.js';
import CartIcon from '../../img/shopping-cart.svg';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            cart_style: {
                right: -400,
            },
        };
    }

    componentDidMount() {
        axios.get(settings.baseURL+'/categories/')
        .then(response => {
            this.setState({categories: response.data});
        })
        .catch(error => {
            console.log(error);
        })
    }

    categoryItems() {
        if(this.state.categories) {
            return (
                this.state.categories.map((item, id) => {
                    return (
                        <li key={id}  className='header_li'>
                            <Link to={{pathname:`/category/${item.category_name}/`,
                            state: {title: item.name}
                        }} className='header_link'>{item.name}</Link>
                        <hr className='menu_hr'/>
                        </li>
                    )
                })
            );
        }
        return null;
    }

    render() {
        return (
            <div className='header' id='headeer'>
                <ul className='header_menu'>
                    <li className='header_logo'>
                        <Link to={'/'} className='header_link'>eShop</Link>
                        <hr className='menu_hr'/>
                    </li>
                </ul>
                <ul className='header_menu'>
                    <li className='header_li'>
                        <Link to={'/'} className='header_link'>Главная</Link>
                        <hr className='menu_hr'/>
                    </li>
                    {this.categoryItems()}
                </ul>
                <ul className='header_menu'>
                    <li className='header_li' id='cart_menu'>
                        <span className='header_link'><img className='cart-icon' src={CartIcon} /><span>КОРЗИНА</span></span>
                        <hr className='menu_hr'/>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;