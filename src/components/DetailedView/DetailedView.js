import React, { Component } from 'react';
import { getProductById } from './../../services/axiosServices';
import './detailedView.css';
import { connect } from 'react-redux';
import { addToCart } from './../../ducks/reducer';

class DetailedView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            displayImg: this.props.selectedImg,
            displayImgColor: this.props.selectedImgColor,
            sizesArr: [],
            selectedSize: '',
            quantity: 1,
            addToCartClicked: this.props.addToCartClicked
        }

        this.sendClick = this.sendClick.bind(this);
    }

    componentDidMount() {
        getProductById(this.props.match.params.product_id).then(product => {
            this.setState({ product: product[0], sizesArr: product[0].sizes.split(',') })
        });
    }

    componentWillReceiveProps(newProps) {
        getProductById(newProps.match.params.product_id).then(product => {
            this.setState({ product: product[0], sizesArr: product[0].sizes.split(',') })
        });
    }

    sendClick() {
        this.setState({
            addToCartClicked: true
        })
    }

    render() {

        const productSizes = this.state.sizesArr.map((size, index, arr) => {
            return <div className="size" key={size} onClick={() => this.setState({ selectedSize: size })}><h1>{arr[index]}</h1></div>
        })

        return (
            <div className="detailedViewContainer">
                <div className="mobileViewContent">
                    <div className="detailProductInfo">
                        <h1>{this.state.product.name}</h1>
                        <h1>${this.state.product.price}.00</h1>
                    </div>

                    <img src={this.state.displayImg ? this.state.displayImg : this.state.product.img1} className="detailImg" alt="product" />

                    <div className="colorSwap">
                        <div className="detailImgColor">
                            {this.state.displayImgColor ? this.state.displayImgColor : this.state.product.color1}
                        </div>
                        <div className="detailThumbnails">
                            {this.state.product.img1 ? <img src={this.state.product.img1} alt="product thumbnail" onClick={() => {
                                this.setState({ displayImg: this.state.product.img1, displayImgColor: this.state.product.color1 })
                            }} /> : ''}

                            {this.state.product.img2 ? <img src={this.state.product.img2} alt="product thumbnail" onClick={() => {
                                this.setState({ displayImg: this.state.product.img2, displayImgColor: this.state.product.color2 })
                            }} /> : ''}

                            {this.state.product.img3 ? <img src={this.state.product.img3} alt="product thumbnail" onClick={() => {
                                this.setState({ displayImg: this.state.product.img3, displayImgColor: this.state.product.color3 })
                            }} /> : ''}

                            {this.state.product.img4 ? <img src={this.state.product.img4} alt="product thumbnail" onClick={() => {
                                this.setState({ displayImg: this.state.product.img4, displayImgColor: this.state.product.color4 })
                            }} /> : ''}
                        </div>
                    </div>

                    <div className="sizesDisplay">
                        <h1 className="selectedSize">
                            SIZE - {this.state.selectedSize}
                        </h1>
                        <div className="sizesContainer">
                            {productSizes}
                        </div>
                    </div>

                    <div className="addToCartButton" onClick={() => this.state.selectedSize ? this.props.addToCart(this.state, this.state.product.price) : alert("Please select size before adding item to cart.")}>
                        <h2>ADD TO CART</h2>
                    </div>
                </div>



                <div className="desktopViewContent">
                    <section className="desktopLeft">
                        <img src={this.state.displayImg ? this.state.displayImg : this.state.product.img1} className="detailImg" alt="product" />
                    </section>

                    <section className="desktopRight">
                        <div className="detailProductInfo">
                            <h1>{this.state.product.name}</h1>
                            <h1>${this.state.product.price}.00</h1>
                        </div>

                        <div className="colorSwap">
                            <div className="detailImgColor">
                                {this.state.displayImgColor ? this.state.displayImgColor : this.state.product.color1}
                            </div>
                            <div className="detailThumbnails">
                                {this.state.product.img1 ? <img src={this.state.product.img1} alt="product thumbnail" onClick={() => {
                                    this.setState({ displayImg: this.state.product.img1, displayImgColor: this.state.product.color1 })
                                }} /> : ''}

                                {this.state.product.img2 ? <img src={this.state.product.img2} alt="product thumbnail" onClick={() => {
                                    this.setState({ displayImg: this.state.product.img2, displayImgColor: this.state.product.color2 })
                                }} /> : ''}

                                {this.state.product.img3 ? <img src={this.state.product.img3} alt="product thumbnail" onClick={() => {
                                    this.setState({ displayImg: this.state.product.img3, displayImgColor: this.state.product.color3 })
                                }} /> : ''}

                                {this.state.product.img4 ? <img src={this.state.product.img4} alt="product thumbnail" onClick={() => {
                                    this.setState({ displayImg: this.state.product.img4, displayImgColor: this.state.product.color4 })
                                }} /> : ''}
                            </div>
                        </div>

                        <div className="sizesDisplay">
                            <h1 className="selectedSize">
                                SIZE - {this.state.selectedSize}
                            </h1>
                            <div className="sizesContainer">
                                {productSizes}
                            </div>
                        </div>

                        <h3 className="freeShipping">
                            FREE 3-DAY SHIPPING
                        </h3>

                        <div className="addToCartButton" onClick={() => this.state.selectedSize ? this.props.addToCart(this.state) : alert("Please select size before adding item to cart.")}>
                            <h2>ADD TO CART</h2>
                        </div>

                    </section>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedImg: state.detailedViewImg,
        selectedImgColor: state.detailViewImgName,
        addToCartClicked: state.addToCartClicked
    }
}

export default connect(mapStateToProps, { addToCart })(DetailedView);