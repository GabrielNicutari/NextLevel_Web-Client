import React, { Component } from "react";

import "./index-page.styles.scss";
import SocialFooter from "../../components/social-footer/social-footer.component";
//import { Carousel } from "react-bootstrap/Carousel";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="homePage">
        <div className="bannerImage">
          {/* <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel> */}
        </div>

        <div className="featuredRecipes"></div>

        <div className="appBanner">
          <div className="phoneImage"> </div>

          <div className="ctaApp">
            <p className="ctaText">Track your deliveries</p>
            <br />
            <p className="ctaText">
              {" "}
              with our <span className="highLight">app</span>
            </p>
          </div>

          <div className="ctaApp2">
            <p className="ctaText2">Track your deliveries</p>
            <br />
            <p className="ctaText2"> real time and command from anywhere</p>
          </div>

          <div className="google-play" />
          <div className="app-store" />
        </div>

        <div className="bottomPart"> </div>
        <SocialFooter />
      </div>
    );
  }
}

export default HomePage;
