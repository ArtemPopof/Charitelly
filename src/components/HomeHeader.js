import React, { Component } from 'react'
import avatar from '../img/cat.jpg'
import PromoScroll from '../components/PromoScroll'

export default class HomeHeader extends Component {
    render() {
        return (
            <div id="header" style={ profileHeaderStyle }>
            <img src={avatar} style={avatarStyle}></img>
            <div style={pointsAndDonationStyle}>
                <div style={donationTotalStyle}>
                    <div>0 ₽</div>
                    <div style={pointsLabelStyle}>Пожертвовано</div>
                </div>
                <div style={pointsTotalStyle}>
                    <div>0 $</div>
                    <div style={pointsLabelStyle}>у Вас на счету</div>
                </div>
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
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    margin: '16px'
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

    margin: '0px 0px 0px 68px',

    fontFamily: 'SF UI Display',
    fontSize: '36px',
    lineHeight: '28px',
    /* identical to box height, or 78% */

    letterSpacing: '0.326451px',

    color: '#FFFFFF'
}

const pointsAndDonationStyle = {
    margin: '7px 0px 0px 16px'
}

const pointsLabelStyle = {
    margin: '8px 0px 0px 0px',

    fontFamily: 'SF UI Text',
    fontSize: '14px',
    lineHeight: '18px',
    /* identical to box height, or 129% */

    letterSpacing: '-0.154px'
}

const promosScrollStyle = {
    margin: '23px 0px 0px 0px'
}