import axios from 'axios';
import React, { Component } from 'react';
import { SocialSection, Social, Icon, Pra, Span } from './style.js';

class SocialMedia extends Component {
    state = {
        socail: []
    }
    componentDidMount() {
        axios.get('js/data.json').then(res => { this.setState({ socail: res.data.social }) })
    }
    render() {
        const { socail } = this.state;
        const socialList = socail.map((socialItem) => {
            return (
                <Social bg = {socialItem.id} key={socialItem.id}>
                    <Icon className={socialItem.icon}></Icon>
                    <Pra>
                        <Span info1>{socialItem.title}</Span>
                        <Span info2>{socialItem.body}</Span>
                    </Pra>
                </Social>
            )
        })
        return (
            <SocialSection>

                {socialList}
            </SocialSection>
        );
    }


}

export default SocialMedia;
