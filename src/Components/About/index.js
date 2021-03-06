import React from 'react';
import { CreativeSection, CreativeInfo, InfoTitle, Span, InfoDir, InfoDesc, Anchor } from './style.js';

const About = () => {
    return (
        <CreativeSection>
            <CreativeInfo>
                <div className="creative-info">
                    <InfoTitle><Span>This is</Span> Me</InfoTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor href="#">explicabo</Anchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                </div>
            </CreativeInfo>
        </CreativeSection>
    );

}

export default About;
