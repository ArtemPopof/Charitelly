import React, { Component } from 'react'
import avatar from '../img/cat.jpg'
import PromoScroll from '../components/PromoScroll'

export default class HomeHeader extends Component {
    render() {
        return (
            <div id="header" style={ profileHeaderStyle }>
            <div style={pointsAndDonationStyle}>
                <img src={avatar} style={avatarStyle}></img>
                <div style={donationTotalStyle}>
                    <div>600 ₽</div>
                    <div style={pointsLabelStyle}>Пожертвовано</div>
                </div>
                <div style={pointsTotalStyle}>
                    <div>500 $</div>
                    <div style={pointsLabelStyle}>у Вас на счету</div>
                </div>
                <div style={tutorial}>Получай баллы за пожертвования и участвуй в розыгрыше призов</div>
                <div style={promosScrollStyle}>
                    <PromoScroll></PromoScroll>
                </div>
            </div>
        </div>
        )
    }
}

const profileHeaderStyle = {
    background: 'linear-gradient(68.5deg, #F18627 8.69%, #FEE140 103.26%)',
    height: '276px'
}

const avatarStyle = {
    display: 'inline-block',
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    margin: '0px 32px 0px 0px'
}

const donationTotalStyle = {
    display: 'inline-block',

    height: '28px',

    fontFamily: 'SF UI Display',
    fontSize: '36px',
    lineHeight: '28px',
    /* identical to box height, or 78% */

    letterSpacing: '0.326451px',

    color: '#FFFFFF'
}

const pointsTotalStyle = {
    display: 'inline-block',
    height: '28px',

    margin: '0px 0px 0px 26px',

    fontSize: '36px',
    lineHeight: '28px',
    /* identical to box height, or 78% */

    letterSpacing: '0.326451px',

    color: '#FFFFFF'
}

const pointsAndDonationStyle = {
    margin: '0px 0px 0px 16px',
    padding: '30px 0px 0px 0px',
    fontWeight: 'bold'
}

const pointsLabelStyle = {
    margin: '8px 0px 0px 0px',

    fontSize: '14px',
    lineHeight: '18px',
    /* identical to box height, or 129% */

    letterSpacing: '-0.154px'
}

const promosScrollStyle = {
    margin: '23px 0px 0px 0px'
}

const tutorial = {
    margin: '23px 0px 0px 0px',
    fontWeight: 'bold',
    fontSize: '15px',
    lineHeight: '20px',
    color: 'white'
}