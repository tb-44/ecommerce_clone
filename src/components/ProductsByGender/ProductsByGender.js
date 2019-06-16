import React, { Component } from 'react';
import { getLimitedProducts } from './../../services/axiosServices';
import LimitOuterwear from './../LimitOuterwear/LimitOuterwear';
import LimitShirts from './../LimitShirts/LimitShirts';
import LimitBottoms from './../LimitBottoms/LimitBottoms';
import LimitHats from './../LimitHats/LimitHats';
import LimitBackpacks from './../LimitBackpacks/LimitBackpacks';



export default class ProductsByGender extends Component {

    componentDidMount() {
        let urlGenderParam = this.props.match.params.gender;
        let categoriesArray = ['outerwear', 'tops', 'bottoms', 'hats', 'backpacks'];

        categoriesArray.forEach((category) => {
            getLimitedProducts(urlGenderParam, category, 4).then((response) =>
                this.setState({
                    category: response
                })
            );
        })
    }

    render() {

        return (
            <div className="limitContentContainer">
                <LimitOuterwear params={this.props.match.params} />
                <LimitShirts params={this.props.match.params} />
                <LimitBottoms params={this.props.match.params} />
                <LimitHats params={this.props.match.params} />
                <LimitBackpacks params={this.props.match.params} />
            </div>
        )
    }
}