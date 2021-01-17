import React from 'react';
import settings from '../../axios.config.js';
import axios from "axios";
import Slide from './slide';
import LeftArrow from '../../img/left-arrow.svg';
import RightArrow from '../../img/right-arrow.svg';

class ImageSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current_slide: 1,
            slider_length: 4,
            images: []
        };
    }

    componentDidMount() {
        this.setState({slider_length: this.props.images.length});
    }

    renderImages() {
        return (
            <Slide image={this.props.images[this.state.current_slide-1]} />
        )
    }

    slideRight() {
        if (this.state.current_slide >= this.state.slider_length) {
            return this.setState({current_slide: 1});
        }
        this.setState({current_slide: this.state.current_slide + 1});
    }
    slideLeft() {
        if (this.state.current_slide <= 1) {
            return this.setState({current_slide: this.state.slider_length});
        }
        this.setState({current_slide: this.state.current_slide - 1});
    }

    render() {
        return (
            <div id="thumbnails">
                <div className='sliderBtnContainer' onClick={() => this.slideLeft()}>
                    <img src={LeftArrow} className='sliderBtn sliderLeft' />
                </div>
                {this.renderImages()}
                <div className='sliderBtnContainer' onClick={() => this.slideRight()}>
                    <img src={RightArrow} className='sliderBtn sliderRight' />
                </div>
            </div>
        );
    }
}

export default ImageSlider;