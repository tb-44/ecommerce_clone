import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import DesktopDropdownMenu from './../DropdownMenu/DesktopDropdownMenu';
import { connect } from 'react-redux';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownActive: true
        }

        this.toggleMenu = this.toggleMenu.bind(this);
        this.enterMenu = this.enterMenu.bind(this);
        this.leaveMenu = this.leaveMenu.bind(this);
    }

    toggleMenu() {
        this.setState({
            dropdownActive: !this.state.dropdownActive
        })
    }

    enterMenu() {
        this.setState({
            dropdownActive: false
        })
    }

    leaveMenu() {
        this.setState({
            dropdownActive: true
        })
    }



    render() {

        let qtyCount = 0;

        this.props.cart.forEach(product => {
            qtyCount += parseInt(product.quantity, 10)
        })

        let cartButtonStyle = { backgroundColor: 'red', color: 'white' }

        return (
            <div className="navBarDesktop">
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
                            <li onClick={this.toggleMenu} onMouseEnter={this.enterMenu}
                                onMouseLeave={this.leaveMenu}><Link to="/shop/mens">{"MEN'S"}</Link><div className="hoverBridge" onMouseEnter={this.enterMenu}></div></li>

                            <li onClick={this.toggleMenu} onMouseEnter={this.enterMenu}
                                onMouseLeave={this.leaveMenu}><Link to="/shop/womens">{"WOMEN'S"}</Link><div className="hoverBridgeWomens" onMouseEnter={this.enterMenu}></div></li>


                            <li onClick={this.toggleMenu} onMouseEnter={this.enterMenu}
                                onMouseLeave={this.leaveMenu}><Link to="/Backpacks">BACKPACKS</Link><div className="hoverBridgeBackpacks" onMouseEnter={this.enterMenu}></div></li>


                            <li>EXPLORE</li>
                        </ul>

                    </div>

                    <div className="desktopDropdownInstanceContainer">
                        <DesktopDropdownMenu dropdownActive={this.state.dropdownActive} onMouseEnter={this.enterMenu} onMouseLeave={this.leaveMenu} toggleMenu={this.toggleMenu} />
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

export default connect(mapStateToProps)(NavBar)
