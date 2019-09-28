import React, { Component } from 'react'

export class PromoScrollCard extends Component {
    render() {
        return (
            <div style={cardStyle}>
                <div style={headerLabel}>Header</div>
                <div style={text}>this is very important promo use should consider participate in it</div>
            </div>
        )
    }
}

const cardStyle = {
    width: '226px',
    height: '80px',
    margin: '0px 12px 0px 0px',
    padding: '12px 12px 0px 16px',
    backgroundColor: 'white',
    borderRadius: '8px'
}

const headerLabel = {
    fontFamily: 'SF UI Text',
    fontSize: '15px',
    lineHeight: '20px',
    letterSpacing: '-0.32px',
    color: '#F18627'
}

const text = {
    margin: '4px 0px 0px 0px',
    fontFamily: 'SF UI Text',
    fontSize: '13px',
    lineHeight: '16px',

    color: '#909499'
}

export default PromoScrollCard
