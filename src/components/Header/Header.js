import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import NavBarDesktop from './../NavBar/NavBarDesktop';
import NavBariPad from './../NavBar/NavBariPad';
import DropdownMenu from './../DropdownMenu/DropdownMenu';
import { connect } from 'react-redux';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuActive: true,
        }

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        console.log(this.state.menuActive)
        this.setState({
            menuActive: !this.state.menuActive
        })
    }

    render() {

        let qtyCount = 0;

        this.props.cart.forEach(product => {
            qtyCount += parseInt(product.quantity, 10)
        })

        let cartCountStyle = { backgroundColor: 'red' }

        return (

            <div className="headerContainer">
                <div className="freeReturns">
                    <p>FREE 3-DAY SHIPPING & FREE RETURNS</p>
                </div>
                <div className="header">


                    <div className="logoContainer">
                        <Link to="/" className="logoLink">
                            <img className="tnfLogo" src="./../../images/logo-tnf.svg" alt="The North Face Logo" />
                        </Link>
                    </div>

                    <div className="mobileNavIcons">

                        <Link to="/cart">
                            <div className="cartAndCount">
                                <div className="cartItemsCount" style={qtyCount ? cartCountStyle : null}>
                                    <p className="cartCount">
                                        {qtyCount}</p>
                                </div>
                                <img className="cartIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Shopping_cart_font_awesome.svg/2000px-Shopping_cart_font_awesome.svg.png" alt="Cart icon" />
                            </div>
                        </Link>
                        <div className="hamIcon" onClick={this.toggleMenu} >
                            <div className="hamRow"></div>
                            <div className="hamRow"></div>
                            <div className="hamRow"></div>
                        </div>
                    </div>

                    <div className="linksContainer">
                        <NavBarDesktop />
                        <NavBariPad />
                    </div>
                </div>

                <DropdownMenu menuActive={this.state.menuActive} toggleMenu={this.toggleMenu} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Header);