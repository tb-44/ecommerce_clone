import React, { Component } from 'react';
import { getLimitedProducts } from './../../services/axiosServices';
import IndividualProduct from './../IndividualProduct/IndividualProduct';
import './../../styles/limitCategories.css';
import { Link } from 'react-router-dom';

export default class LimitShirts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shirts: []
        }
    }

    componentDidMount() {
        getLimitedProducts(this.props.params, 'shirts', 4).then((response) =>
            this.setState({
                shirts: response
            })
        );
    }

    componentWillReceiveProps(newProps) {
        getLimitedProducts(newProps.params.gender, 'shirts', 4).then((response) =>
            this.setState({
                shirts: response
            })
        );
    }

    render() {


        let shirtsLimit = this.state.shirts.map((product, index, arr) => {
            return (
                <IndividualProduct key={product.product_id} id={product.product_id} product={product} containerStyle={'limitedProductContainer'} />
            )
        })

        return (
            <div className="limitCategoryContainer">
                <div className="limitBreadcrumb">
                    <h1>SHIRTS</h1>
                    <Link to={`/shop/${this.props.params.gender}/shirts`}>
                        <h2>VIEW ALL ({this.state.shirts.length * 4}) <span className="rightArrow"> > </span> </h2>
                    </Link>
                </div>
                <div className="limitProductsDisplay">
                    {shirtsLimit}
                </div>
            </div>
        )
    }
}