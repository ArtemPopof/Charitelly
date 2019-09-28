import React, { Component } from 'react'

export class PromoScrollCard extends Component {
    render() {
        return (
            <div style={cardStyle}>
                <div style={headerLabel}>Приведи друга</div>
                <div style={text}>10 баллов за каждого приглашенного друга</div>
            </div>
        )
    }
}

const cardStyle = {
    width: '226px',
    height: '80px',
    margin: '0px 12px 0px 0px',
    padding: '12px 8px 0px 16px',
    backgroundColor: 'white',
    borderRadius: '8px',
    fontWeight: 'normal',

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
    fontSize: '13px',
    lineHeight: '16px',

    color: '#909499'
}

export default PromoScrollCard
