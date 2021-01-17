import React from 'react';
import settings from '../../axios.config.js';
import CrossfadeImage from 'react-crossfade-image';

class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div id="slide-image-block" className='sliderImage'>
                <CrossfadeImage src={`${settings.baseURL}/${this.props.image.image}`} />
            </div>
        );
    }
}

export default Slide;