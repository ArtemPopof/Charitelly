import React, { Component } from 'react'
import Man from '../img/man.png'

export class PrizeScrollCard extends Component {
    render() {
        return (
            <div style={cardStyle}>
                <div style={leftAndRight}>
                    <div style={headerLabel}>Ужин со звездой</div>
                    <div style={text}>Николай Дроздов</div>
                    <div style={date}>04.05.2019</div>
                    <div style={image}></div>
                </div>
                <div style={leftAndRight}>
                    <img style={image} src={Man}></img>
                </div>
            </div>
        )
    }
}

const cardStyle = {
    display: 'flex',
    background: 'linear-gradient(68.5deg, #F18627 8.69%, #FEE140 103.26%)',
    width: '229px',
    height: '111px',
    margin: '0px 12px 0px 0px',
    padding: '12px 8px 0px 16px',
    borderRadius: '8px',
}

const headerLabel = {
    fontWeight: 'bold',
    width: '100px',
    fontSize: '17px',
    lineHeight: '20px',
    letterSpacing: '-0.32px',
    color: 'white'
}

const text = {
    margin: '12px 0px 0px 0px',
    fontSize: '13px',
    lineHeight: '16px',

    color: 'white',
    opacity: '0.7'
}

const date = {
    fontWeight: 'bold',
    fontSize: '13px',
    width: '130px',
    lineHeight: '20px',
    letterSpacing: '-0.32px',
    color: 'white',
    margin: '6px 0px 0px 0px',
}

const image = {
    height: '100%',
    overflow: 'hidden',
    margin: '0px 40px 0px 0px'
}

const leftAndRight = {
    display: 'inline-block',
    flex: 1,
}

export default PrizeScrollCard
