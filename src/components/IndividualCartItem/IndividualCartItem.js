import React, { Component } from 'react';
import './individualCartItem.css';
import { removeFromCart, updateTotalPrice } from './../../ducks/reducer';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { connect } from 'react-redux';

class IndividualCartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.logQtyChange = this.logQtyChange.bind(this);
    }

    logQtyChange(event) {
        this.setState({
        });
        this.props.updateTotalPrice({ newQty: event.value, id: this.props.item.product_id, size: this.props.item.productSize, color: this.props.item.displayImgColor })
    }

    render() {

        const options = [{ value: 1, label: 1 }, { value: 2, label: 2 }, { value: 3, label: 3 }, { value: 4, label: 4 }, { value: 5, label: 5 }, { value: 6, label: 6 }, { value: 7, label: 7 }, { value: 8, label: 8 }, { value: 9, label: 9 }];

        return (
            <div className="componentContainer">

                <div className="cartItemContaineriPhone">
                    <div className="cartItemSections">

                        <section className="cartItemLeft">
                            <img className="cartItemImg" src={this.props.item.displayImg} alt="product in cart" />
                        </section>

                        <section className="cartItemRight">
                            <p className="cartItemName">{this.props.item.name}</p>
                            <p className="cartItemColor">{this.props.item.displayImgColor}</p>
                            <p className="cartItemSize">Size - {this.props.item.productSize}</p>
                            <p className="availableNow">Available Now to Ship</p>

                            <div className="qtyPrice">
                                <Select
                                    className="qtySelector"
                                    value={this.props.item.quantity}
                                    options={options}
                                    onChange={(e) => {
                                        this.logQtyChange(e)
                                    }
                                    } />
                                <p className="cartItemPrice">${this.props.item.price}.00</p>
                            </div>
                            <div className="cartItemPriceTotal">
                                <p className="cartItemPriceTotal">${this.props.item.totalPriceByQty}.00</p>
                            </div>
                        </section>
                        <div className="removeButton" onClick={() => this.props.removeFromCart(this.props.index, this.props.item.totalPriceByQty)}>
                            <h1 className="removeItemLink">REMOVE</h1>
                        </div>
                    </div>
                </div>

                <div className="cartItemContaineriPad">
                    <div className="cartItemSections">

                        <section className="cartItemLeft">
                            <img className="cartItemImg" src={this.props.item.displayImg} alt="product in cart" />
                        </section>

                        <section className="cartItemRight">
                            <p className="cartItemName">{this.props.item.name}</p>
                            <p className="cartItemColor">{this.props.item.displayImgColor}</p>
                            <p className="cartItemSize">Size - {this.props.item.productSize}</p>
                            <p className="availableNow">Available Now to Ship</p>

                            <div className="qtyPrice">
                                <Select
                                    className="qtySelector"
                                    value={this.props.item.quantity}
                                    options={options}
                                    onChange={(e) => {
                                        this.logQtyChange(e)
                                    }
                                    } />
                                <div className="removeButton" onClick={() => this.props.removeFromCart(this.props.index, this.props.item.totalPriceByQty)}>
                                    <h1 className="removeItemLink">REMOVE</h1>
                                </div>
                                <div className="pricesContainer">
                                    <p className="cartItemPrice">${this.props.item.price}.00</p>
                                    <p className="cartItemPriceTotal">TOTAL ${this.props.item.totalPriceByQty}.00</p>

                                </div>
                            </div>

                        </section>
                    </div>
                </div>

                <div className="cartItemContainerDesktop">
                    <div className="cartItemSections">

                        <section className="cartItemLeft">
                            <img className="cartItemImg" src={this.props.item.displayImg} alt="product in cart" />

                            <div className="nameColorSize">
                                <p className="cartItemName">{this.props.item.name}</p>
                                <p className="cartItemColor">{this.props.item.displayImgColor}</p>
                                <p className="cartItemSize">Size - {this.props.item.productSize}</p>
                                <p className="availableNow">Available Now to Ship</p>
                            </div>

                        </section>

                        <section className="cartItemRight">

                            <div className="qtyAndRemove">
                                <div className="qtyPrice">
                                    <Select
                                        className="qtySelector"
                                        value={this.props.item.quantity}
                                        options={options}
                                        onChange={(e) => {
                                            this.logQtyChange(e)
                                        }
                                        } />
                                    <div className="removeButton" onClick={() => this.props.removeFromCart(this.props.index, this.props.item.totalPriceByQty)}>
                                        <h1 className="removeItemLink">REMOVE</h1>
                                    </div>

                                </div>
                            </div>

                            <div className="itemAndQtyPrices">
                                <div className="pricesContainer">
                                    <p className="cartItemPrice">${this.props.item.price}.00</p>
                                    <p className="cartItemPriceTotal">TOTAL ${this.props.item.totalPriceByQty}.00</p>
                                </div>
                            </div>

                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { updateTotalPrice, removeFromCart })(IndividualCartItem);