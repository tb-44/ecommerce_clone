import React, { Component } from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayShop: true,
      displayHelp: true,
      displayAbout: true,
      displayEvents: true,
      displayExplore: true

    }

    this.toggleShop = this.toggleShop.bind(this);
    this.toggleHelp = this.toggleHelp.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);
    this.toggleEvents = this.toggleEvents.bind(this);
    this.toggleExplore = this.toggleExplore.bind(this);





  }


  toggleShop() {
    this.setState({
      displayShop: !this.state.displayShop
    })
  }

  toggleHelp() {
    this.setState({
      displayHelp: !this.state.displayHelp
    })
  }

  toggleAbout() {
    this.setState({
      displayAbout: !this.state.displayAbout
    })
  }

  toggleEvents() {
    this.setState({
      displayEvents: !this.state.displayEvents
    })
  }

  toggleExplore() {
    this.setState({
      displayExplore: !this.state.displayExplore
    })
  }

  render() {

    let dropdownStyle = { display: 'none' }

    return (
      <div className="footerContainer">
        <div className="footerContent">
          <div className="linkColumns">

            <div className="container" onClick={this.toggleShop}>
              <header className="linksHeader">
                <h3>SHOP</h3>
                <img className="downArrow" src="http://cdn.onlinewebfonts.com/svg/download_144754.png" alt="Down Arrow Icon" />
              </header>

              <div className="footerDropdown" style={this.state.displayShop ? dropdownStyle : null}>
                <div className="footerDropdownLinks">
                  <p>Gifts</p>
                  <p>Gift Cards</p>
                  <p>{"Men's"}</p>
                  <p>{"Women's"}</p>
                  <p>Backpacks</p>
                </div>
              </div>

              <ul className="footerLinks">
                <li>Gifts</li>
                <li>Gift Cards</li>
                <li>{"Men's"}</li>
                <li>{"Women's"}</li>
                <li>Backpacks</li>
              </ul>
            </div>

            <div className="container" onClick={this.toggleHelp}>
              <header className="linksHeader">
                <h3>HELP</h3>
                <img className="downArrow" src="http://cdn.onlinewebfonts.com/svg/download_144754.png" alt="Down Arrow Icon" />
              </header>

              <div className="footerDropdown" style={this.state.displayHelp ? dropdownStyle : null}>
                <div className="footerDropdownLinks">
                  <p>FAQ?</p>
                  <p>Order Status</p>
                  <p>Sizing Charts</p>
                  <p>Return Policy</p>
                  <p>Contact Us</p>
                </div>
              </div>

              <ul className="footerLinks">
                <li>FAQ?</li>
                <li>Order Status</li>
                <li>Sizing Charts</li>
                <li>Return Policy</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="container" onClick={this.toggleAbout}>
              <header className="linksHeader">
                <h3>ABOUT TNF</h3>
                <img className="downArrow" src="http://cdn.onlinewebfonts.com/svg/download_144754.png" alt="Down Arrow Icon" />
              </header>

              <div className="footerDropdown" style={this.state.displayAbout ? dropdownStyle : null}>
                <div className="footerDropdownLinks">
                  <p>Our Story</p>
                  <p>Responsibility</p>
                  <p>Athlete Team</p>
                  <p>Expeditions</p>
                  <p>News</p>
                  <p>Careers</p>
                </div>
              </div>

              <ul className="footerLinks">
                <li>Our Story</li>
                <li>Responsibility</li>
                <li>Athlete Team</li>
                <li>Expeditions</li>
                <li>News</li>
                <li>Careers</li>
              </ul>
            </div>

            <div className="container" onClick={this.toggleEvents}>
              <header className="linksHeader">
                <h3>EVENTS</h3>
                <img className="downArrow" src="http://cdn.onlinewebfonts.com/svg/download_144754.png" alt="Down Arrow Icon" />
              </header>

              <div className="footerDropdown" style={this.state.displayEvents ? dropdownStyle : null}>
                <div className="footerDropdownLinks">
                  <p>Endurance Challenge</p>
                  <p>Speaker Series</p>
                </div>
              </div>

              <ul className="footerLinks">
                <li>Endurance Challenge</li>
                <li>Speaker Series</li>
              </ul>
            </div>

            <div className="container" onClick={this.toggleExplore}>
              <header className="linksHeader">
                <h3>EXPLORE</h3>
                <img className="downArrow" src="http://cdn.onlinewebfonts.com/svg/download_144754.png" alt="Down Arrow Icon" />
              </header>

              <div className="footerDropdown" style={this.state.displayExplore ? dropdownStyle : null}>
                <div className="footerDropdownLinks">
                  <p className="appMention">THE NORTH FACE APP</p>
                  <img className="appStoreFooter" src="./../../images/app-store.png" alt="app store logo" />
                </div>
              </div>

              <ul className="footerLinks">
                <li>THE NORTH FACE APP</li>
              </ul>
              <img className="appStore" src="./../../images/app-store.png" alt="app store logo" />
            </div>
          </div>

          <div className="byLine">
            <Link to="/">
              <img className="tnf-logo" src="./../../images/logo-tnf.svg" alt="The North Face Logo" />
            </Link>
            <div className="copyright">
              <p>TRENT BENNETT</p>
              <br />
              <p>AVAILABLE</p>
            </div>
          </div>

        </div>
        <div className="mobileViewFooterBar">
        </div>
      </div>
    )
  }
}