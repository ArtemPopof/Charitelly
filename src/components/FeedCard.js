import React, { Component } from 'react'
import Cat from '../img/cat.jpg'
import FundProgressbar from './FundProgressbar'

export class FeedCard extends Component {
    render() {
        return (
            <div style={container}>
                <img style={image} src={Cat}></img>
                <div style={header}>Fight for tigres</div>
                <div style={progress}>
                <FundProgressbar></FundProgressbar>
                </div>
                <div style={description}>Tigres are hungry and looking for a home, please don't be so rude, feed little tigre, he is so lonely</div>
            </div>
        )
    }
    
}

const image = {
    height: '158px',
    borderRadius: '8px',
}

const header = {
    margin: '14px 0px 0px 0px',
    fontWeight: '555',
    fontSize: '17px',
    lineHeight: '20px',

    color: 'black'
}

const description = {
    margin: '12px 0px 0px 0px',
    fontWeight: 'normal',
    fontSize: '13px',
    lineHeight: '15px',
    color: '#909499'
}

const container = {
    backgroundColor: 'white',
    margin: '26px 0px 0px 0px',
    padding: '0px 0px 6px 0px'
}

const progress = {
    margin: '8px 0px 0px 0px'
}

export default FeedCard
