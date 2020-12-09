import React, {Component} from 'react';

import './index-page.styles.scss';
import SocialFooter from "../../components/social-footer/social-footer.component";
import BootstrapCarousel from "../../components/carousel/carousel.component";
import 'bootstrap/dist/css/bootstrap.min.css';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {

        return (
            <div className ='homePage'>
                <div className='bannerImage'>

                    <BootstrapCarousel></BootstrapCarousel>

                </div>

                <div className='featuredRecipes'>

                </div>

                <div className='appBanner'>
                    <div className='phoneImage'> </div>

                    <div className='ctaApp'>
                        <p className='ctaText'>Track your deliveries</p>
                        <br/>
                        <p className='ctaText'> with our <span className='highLight'>app</span></p>

                    </div>

                    <div className='ctaApp2'>

                        <p className='ctaText2'>Track your deliveries</p>
                        <br/>
                        <p className='ctaText2'> real time and command from anywhere</p>
                    </div>

                    <div className='google-play'/>
                    <div className='app-store'/>

                </div>

                <div className='bottomPart'> </div>
                <SocialFooter/>
            </div>
        );
    }
}

export default HomePage;