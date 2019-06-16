import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateDetailImg } from './../../ducks/reducer';

class IndividualProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayImg: props.product.img1,
            displayImgName: props.product.color1
        }

        this.saveSelectedImg = this.saveSelectedImg.bind(this);

    }

    saveSelectedImg() {
        this.props.updateDetailImg(this.state.displayImg, this.state.displayImgName)
    }


    render() {
        return (
            <div key={this.props.id} className={this.props.containerStyle}>
                <Link to={'/product/' + this.props.product.product_id} onClick={this.saveSelectedImg}><img src={this.state.displayImg} className="productImg" alt="Product" /> </Link>

                <div className="thumbnails">
                    {this.props.product.img1 ? <img src={this.props.product.img1} alt="product thumbnail" onClick={() => {
                        this.setState({ displayImg: this.props.product.img1, displayImgName: this.props.product.color1 })
                    }} /> : ''}

                    {this.props.product.img2 ? <img src={this.props.product.img2} alt="product thumbnail" onClick={() => {
                        this.setState({ displayImg: this.props.product.img2, displayImgName: this.props.product.color2 })
                    }} /> : ''}

                    {this.props.product.img3 ? <img src={this.props.product.img3} alt="product thumbnail" onClick={() => {
                        this.setState({ displayImg: this.props.product.img3, displayImgName: this.props.product.color3 })
                    }} /> : ''}

                    {this.props.product.img4 ? <img src={this.props.product.img4} alt="product thumbnail" onClick={() => {
                        this.setState({ displayImg: this.props.product.img4, displayImgName: this.props.product.color4 })
                    }} /> : ''}
                </div>

                <h3 className="productName">
                    {this.props.product.name}
                </h3>
                <p>${this.props.product.price}.00</p>

                <div className="detailedViewButton" onClick={this.saveSelectedImg}>
                    <Link to={'/product/' + this.props.product.product_id}>
                        <h2>QUICK VIEW</h2>
                    </Link>
                </div>

            </div>
        )
    }
}


export default connect(null, { updateDetailImg })(IndividualProduct);