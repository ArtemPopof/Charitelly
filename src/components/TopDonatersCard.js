import React, { Component } from 'react'
import { Avatar } from "@vkontakte/vkui"
import AvaImage from '../img/cat.jpg'
import PropType from 'prop-types'

export class TopDonatersCard extends Component {
    render() {
        return (
          <div style={{ ...itemStyle, paddingLeft: 4 }}>
            <Avatar src={this.props.imageUrl} size={64} style={{ marginBottom: 8 }}></Avatar>
            <div style={donation}>{this.props.donationCount}</div>
          </div>
        )
    }
}

const itemStyle = {
    margin: '0px 12px 0px 0px'
}

const donation = {
    margin: '0px 0px 0px 16px',
    fontSize: '12px',
    color: '#909499'
}

TopDonatersCard.propTypes = {
    imageUrl: PropType.string.isRequired,
    donationCount: PropType.string.isRequired
}

export default TopDonatersCard
