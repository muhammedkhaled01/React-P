import React from 'react';
import { HomeSection, Information, HomeTitle, HomeInfo, HomeDesc, Special, HomeButton } from './style.js';

const Home = () => {
    return (

        <HomeSection>
            <div className="container">
                <Information>
                    <HomeTitle>Mohamed khaled</HomeTitle>
                    <HomeInfo>
                        <HomeDesc>
                            Iam a professional <Special>Frontend developer</Special>  creating modern and resposive designs to Web and Mobile. Let us work together. Thank you.
                        </HomeDesc>
                        <HomeButton>Let's Begin</HomeButton>
                    </HomeInfo>
                </Information>
            </div>
        </HomeSection>
    );

}

export default Home;
