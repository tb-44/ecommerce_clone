import React, { Component } from 'react';
import './dropdownMenu.css';
import { Link } from 'react-router-dom';

export default class DropdownMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMens: true,
            displayWomens: true,
            displayBackpacks: true
        }

        this.toggleMens = this.toggleMens.bind(this);
        this.toggleWomens = this.toggleWomens.bind(this);
        this.toggleBackpacks = this.toggleBackpacks.bind(this);
    }

    toggleMens() {
        this.setState({
            displayMens: !this.state.displayMens
        })
    }

    toggleWomens() {
        this.setState({
            displayWomens: !this.state.displayWomens
        })
    }

    toggleBackpacks() {
        this.setState({
            displayBackpacks: !this.state.displayBackpacks
        })
    }


    render() {
        let menuDisplay = { display: 'none' }
        let submenuDisplay = { display: 'none' }

        return (
            <div className="dropdownMenuContainer" style={this.props.menuActive ? menuDisplay : null}>
                <div className="categoryContainer">

                    <div className="dropdownContainer">
                        <div className="dropdownCategory" onClick={this.toggleMens}>
                            <h1>{"MEN'S"}</h1>
                            <img className="downArrow" src="http://cdn.onlinewebfonts.com/svg/download_144754.png" alt="Down Arrow Icon" />
                        </div>
                        <div
                            className="submenu"
                            style={this.state.displayMens ? submenuDisplay : null}>
                            <h1 onClick={this.props.toggleMenu}><Link to="/shop/mens">SHOP ALL {"MEN'S"}</Link></h1>
                            <h1 onClick={this.props.toggleMenu}><Link to="/shop/mens/outerwear">OUTERWEAR</Link></h1>
                            <h1 onClick={this.props.toggleMenu}><Link to="/shop/mens/shirts">SHIRTS</Link></h1>
                            <h1 onClick={this.props.toggleMenu}><Link to="/shop/mens/bottoms">BOTTOMS</Link></h1>
                            <h1 onClick={this.props.toggleMenu}><Link to="/shop/mens/hats">HATS</Link></h1>
                        </div>
                    </div>


                    <div className="dropdownContainer">
                        <div className="dropdownCategory" onClick={this.toggleWomens}>
                            <h1>{"WOMEN'S"}</h1>
                            <img className="downArrow" src="http://cdn.onlinewebfonts.com/svg/download_144754.png" alt="Down Arrow Icon" />
                        </div>
                        <div className="submenu" style={this.state.displayWomens ? submenuDisplay : null}>
                            <h1 onClick={this.props.toggleMenu}><Link to="/shop/womens">SHOP ALL {"WOMEN'S"}</Link></h1>
                            <h1 onClick={this.props.toggleMenu}><Link to="/shop/womens/outerwear">OUTERWEAR</Link></h1>
                            <h1 onClick={this.props.toggleMenu}><Link to="/shop/womens/shirts">SHIRTS</Link></h1>
                            <h1 onClick={this.props.toggleMenu}><Link to="/shop/womens/bottoms">BOTTOMS</Link></h1>
                            <h1 onClick={this.props.toggleMenu}><Link to="/shop/womens/hats">HATS</Link></h1>
                        </div>
                    </div>

                    {/*NEED TO LINK BACKPACKS TO COMPONENT ONCE CREATED*/}

                    <div className="dropdownContainer">
                        <div className="dropdownCategory" onClick={this.toggleBackpacks}>
                            <h1>BACKPACKS</h1>
                            <img className="downArrow" src="http://cdn.onlinewebfonts.com/svg/download_144754.png" alt="Down Arrow Icon" />
                        </div>
                        <div className="submenu backpacks" style={this.state.displayBackpacks ? submenuDisplay : null}>
                            <h1 onClick={this.props.toggleMenu}><Link to="/backpacks">SHOP ALL BACKPACKS</Link></h1>
                            <h1 onClick={this.props.toggleMenu}><Link to="/shop/mens/backpacks">{"MEN'S"}</Link></h1>
                            <h1 onClick={this.props.toggleMenu}><Link to="/shop/womens/backpacks">{"WOMEN'S"}</Link></h1>
                        </div>
                    </div>
                    <div className="dropdownUserLinks">
                        <h1>FIND A STORE</h1>
                        <h1>SIGN IN</h1>
                    </div>

                </div>

            </div>
        )
    }
}
