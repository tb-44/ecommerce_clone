import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import IPadDropdownMenu from './../DropdownMenu/iPadDropdownMenu';
import { connect } from 'react-redux';

class NavBariPad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownActive: true
        }

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({
            dropdownActive: !this.state.dropdownActive
        })
    }

    render() {

        let qtyCount = 0;

        this.props.cart.forEach(product => {
            qtyCount += parseInt(product.quantity, 10)
        })

        let cartButtonStyle = { backgroundColor: 'red', color: 'white' }

        return (
            <div className="navBariPad">
                <div className="navBarContainer">
                    <div className="topNav">
                        <div className="userLinks">
                            <p>Find a Store</p>
                            <p>Sign In</p>

                            <Link to="/cart">
                                <div className="cartButton" style={qtyCount ? cartButtonStyle : null}>
                                    <p>Cart ({qtyCount})</p>
                                </div>
                            </Link>

                        </div>
                        <ul className="navLinks">
                            <li onClick={this.toggleMenu}>{"MEN'S"}</li>
                            <li onClick={this.toggleMenu}>{"WOMEN'S"}</li>
                            <li onClick={this.toggleMenu}>BACKPACKS</li>
                            <li>EXPLORE</li>
                        </ul>
                    </div>

                    <div className="iPadDropdownInstanceContainer">
                        <IPadDropdownMenu dropdownActive={this.state.dropdownActive} toggleMenu={this.toggleMenu} />
                    </div>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(NavBariPad)