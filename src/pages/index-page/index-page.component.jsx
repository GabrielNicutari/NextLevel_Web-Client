import React, { Component } from "react";

import "./index-page.styles.scss";
import SocialFooter from "../../components/social-footer/social-footer.component";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { Text } from '@morpheus-ui/core'

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="homePage">
        <div className="bannerImage">
            <Carousel>
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
          </Carousel>
        </div>


    render() {
        const AutoplaySlider = withAutoplay(AwesomeSlider);

        <div className="appBanner">
          <div className="phoneImage"> </div>



                    <AutoplaySlider className='bannerSlider'
                        play={true}
                        cancelOnInteraction={false} // should stop playing on user interaction
                        interval={10000}
                    >
                        <div className='slide slide1' style={{
                            backgroundImage: "url(" + "https://www.amd.com/system/files/2020-07/530171-Assassins-Creed-Valhalla-key-banner-fade-1920x600.jpg" + ")",
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}
                        >
                        </div>
                        <div className='slide slide2' style={{
                            backgroundImage: "url(" + "https://i.imgur.com/K5eJl84.jpg" + ")",
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}
                        ></div>
                        <div className='slide slide3' style={{
                            backgroundImage: "url(" + "https://i.redd.it/qmjbo59wwvhy.jpg" + ")",
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}
                        ></div>
                    </AutoplaySlider>

                </div>

                <div className='featuredRecipes'>

                </div>

                <div className='appBanner'>
                    <div className='phoneImage'> </div>

                    <div className='ctaApp'>
                        <p className='ctaText'>YOUR DESTINY</p>
                        <br/>
                        <p><span className='highLight'>AWAITS YOU</span></p>
                        <p className='ctaText2'>Start your adventure today,</p>
                        <br/>
                        <p className='ctaText2'> buy witcher 3 NOW, the best rated game of 2020.</p>
                    </div>


                    <button className="btn-large btn-cta" onClick={(e) => {
                        e.preventDefault();
                        window.location.href='http://localhost:8081/games/1';
                    }}>BUY NOW!</button>

                </div>

                <div className='appBanner appBanner2'>
                    <div className='phoneImage phoneImage2'> </div>

                    <div className='ctaApp'>
                        <p className='ctaText ctaText3'>WE HOPE YOU</p>
                        <br/>
                        <p><span className='highLight highLight2'>ARE READY</span></p>
                        <p className='ctaText2 blackText'>Cyberpunkt 2077 the most anticipated game</p>
                        <br/>
                        <p className='ctaText2 blackText'> of the year, releases TODAY!</p>
                    </div>


                    <button className="btn-large btn-cta btn-cta2" onClick={(e) => {
                        e.preventDefault();
                        window.location.href='http://localhost:8081/games/1';
                    }}>BUY NOW!</button>

                </div>

                <div className='bottomPart'> </div>
                <SocialFooter/>
            </div>
        );
    }
}

export default HomePage;
