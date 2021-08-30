import styled from 'styled-components';
// import home from '././public/images/Home/home-bg.jpg';

export const HomeSection = styled.div`
    height: 500px;
    background-image:url('images/Home/home-bg.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
`

export const Information = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
`

export const HomeTitle = styled.h2`
    font-size: 60px;
    font-weight: bold;
    color: #5e5e5e;
`

export const HomeInfo = styled.h4`
    font-size: 35px;
    color: #eb5424;
    margin-bottom: 20px;
`

export const HomeDesc = styled.p`
    font-size: 20px;
    line-height: 1.5;
    color: #888;
    margin-bottom: 20px
`

export const Special = styled.span`
    color: #000
`

export const HomeButton = styled.button`
    background: #eb5424;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;
    transition: all .3s ease-in-out;
    border-radius:5px;
    &:hover {
        background: #fff;
        color: #eb5424
    }
`
