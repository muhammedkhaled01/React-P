import React, { useState, useEffect } from 'react';
import { ProfileSkills, ProfileSection, ProfileList, ProfileItem, ItemSpan, Skills, SkillsDisc, Bar, Title, Perc, Parent, ParentSpan, SkillsTitle, TitleSpan } from './style.js';
import axios from 'axios';

const Profile = () => {

    const [ skills, setSkills ] = useState([])
    useEffect(() => {
        axios.get('js/data.json').then(res => { setSkills(res.data.skills) })
    }, [])



    const BarSkills = skills.map( (skillItem) => {
        return (
            <Bar key= {skillItem.id}>
                <Title>{skillItem.title}</Title>
                <Perc>{skillItem.percentage}</Perc>
                <Parent>
                    <ParentSpan sp={skillItem.id}></ParentSpan>
                </Parent>
            </Bar>
        )
    })

    return (
        <ProfileSkills>
            <div className="container">
                <ProfileSection>
                    <SkillsTitle><TitleSpan>My </TitleSpan>Profile</SkillsTitle>
                    <ProfileList>
                        <ProfileItem>
                            <ItemSpan>Name</ItemSpan>
                            Hamza Nabil
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Birthday</ItemSpan>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Address</ItemSpan>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Phone</ItemSpan>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Email</ItemSpan>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Website</ItemSpan>
                            <ItemSpan web>www.google.com</ItemSpan>
                        </ProfileItem>
                    </ProfileList>
                </ProfileSection>

                <Skills>
                    <SkillsTitle>Some <TitleSpan>skills</TitleSpan></SkillsTitle>
                    <SkillsDisc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDisc>

                    {BarSkills}
                </Skills>

            </div>
        </ProfileSkills>
    );

}

export default Profile;
