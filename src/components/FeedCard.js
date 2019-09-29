import React, { Component } from 'react'
import Cat from '../img/cat.jpg'
import FundProgressbar from './FundProgressbar'
import PropTypes from 'prop-types';

export class FeedCard extends Component {

    state = {
        recentlyDonated: false
    }

    getDonationMask = () => {
        return <h1>lfkasjd</h1>
    }

    render() {
        this.props.recentlyDonated && this.setState({recentlyDonated: this.props.recentlyDonated})

        const donationMask = this.getDonationMask()

        const goal = getRandomInt(54444)
        const donated = goal - getRandomInt(goal)

        return (
            <div style={container}>
                <div>
                <img style={image} src={this.props.projectImg}></img>
                </div>
                <div style={header}>{this.props.projectName}</div>
                <div style={progress}>
                <FundProgressbar fundedUsd={donated} goalUsd={goal}></FundProgressbar>
                </div>
                <div style={description}>{this.props.projectDescription}</div>
            </div>
        )
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

const image = {
    height: '158px',
    borderRadius: '8px',
    width: '100%',
    objectFit: 'cover',
    backgroundColor: '#ee222277',
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
    margin: '0px 0px 0px 0px',
    padding: '26px 0px 6px 0px'
}

const progress = {
    margin: '8px 0px 0px 0px'
}

FeedCard.propTypes = {
    recentlyDonated: PropTypes.string,
    projectImg: PropTypes.string.isRequired,
    projectName: PropTypes.string.isRequired,
    projectDescription: PropTypes.string.isRequired
};

export default FeedCard
