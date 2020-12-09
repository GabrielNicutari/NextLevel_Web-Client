import React, {Component} from 'react';

import './index-page.styles.scss';
import SocialFooter from "../../components/social-footer/social-footer.component";

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

                    <div className='companyLogo'> </div>

                    <div className='bannerText'> </div>

                    <div className='cta'>
                        <p className='bannerText'>Tailor your weekly menu so you get the most delicious recipes</p>
                        <br/>
                        <p className='bannerText'>and fresh ingredients delivered to your door.</p>
                        <button className="btn-large btn-cta">Order now</button>
                    </div>

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