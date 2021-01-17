import React from 'react';


class Quantity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // quantity: 1,
        };
    }

    // decrement() {
    //     if (this.state.quantity > 1) {
    //         this.setState({quantity: this.state.quantity-1});
    //         // this.props.setQuantity(this.state.quantity);
    //     }
    // }
    // increment() {
    //     if (this.state.quantity < 10) {
    //         this.setState({quantity: this.state.quantity+1});
    //         // this.props.setQuantity(this.state.quantity);
    //     }
    // }

    render() {
        return (
            <div className='quantity_block'>
                <div className='crement decrementBtn' onClick={() => this.props.decrement()}>
                    <span>-</span>
                </div>
                <div className='quantiry_text'>
                    {this.props.quantity}
                </div>
                <div className='crement inrementBtn' onClick={() => this.props.increment()}>
                    <span>+</span>
                </div>
            </div>
        );
    }
}

export default Quantity;