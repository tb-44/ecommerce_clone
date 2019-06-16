import React from 'react';
import { Link } from 'react-router-dom';
import './../../styles/contentContainer.css';
import './homepage.css';

export default function Homepage(props) {
  return (

    <main className="homepageContainer">
      <section className="topSectionContainer">
        <div className="topContent">
          <div className="tlContent">
            <div className="tlContentInner">
              <h1>BUILT TO LAST</h1>
              <h2>Backed by a Lifetime Warranty.</h2>

              <Link to='/backpacks' className="button">
                <div>
                  <h3>FIND THE PERFECT PACK</h3>
                </div>

              </Link>
            </div>
          </div>
          <div className="trContent">
          </div>
        </div>
      </section>

      <section className="bottomSectionContainer">
        <div className="feature">
          <div className="imgContainer imgLeft">
          </div>
          <h1>{"WE'VE GOT YOUR BACK"}</h1>
          <p>A lifetime warranty for a lifetime of adventure.</p>
          <Link to="/backpacks" className="button featureButton">
            <div>
              <h3>SHOP BACKPACKS</h3>
            </div>
          </Link>



        </div>

        <div className="feature">
          <div className="imgContainer imgMiddle">
          </div>
          <h1>{"SHOW THEM WHO'S BOSS"}</h1>
          <p>Get your hands on the best form-fitting gear for fall.</p>

          <Link to="/shop/womens" className="button featureButton">
            <div>
              <h3>{"SHOP WOMEN'S"}</h3>
            </div>
          </Link>
        </div>

        <div className="feature">
          <div className="imgContainer imgRight">
          </div>
          <h1>PREPARE FOR ADVENTURE</h1>
          <p>Look good when you get there.</p>
          <Link to="/shop/mens" className="button featureButton">
            <div>
              <h3>{"SHOP MEN'S"}</h3>
            </div>
          </Link>
        </div>
      </section>
    </main>

  )
}
