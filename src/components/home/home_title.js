import React from 'react';

class Latests extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div className='block'>
                <div className='categoryHeader'>
                    <h1>{this.props.title}</h1>
                </div>
            </div>
        );
    }
}

export default Latests;