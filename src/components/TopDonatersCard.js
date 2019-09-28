import React, { Component } from 'react'
import { Avatar } from "@vkontakte/vkui"
import AvaImage from '../img/cat.jpg'

export class TopDonatersCard extends Component {
    render() {
        return (
          <div style={{ ...itemStyle, paddingLeft: 4 }}>
            <Avatar src={AvaImage} size={64} style={{ marginBottom: 8 }}></Avatar>
            Элджей
          </div>
        )
    }
}

const itemStyle = {
    margin: '0px 12px 0px 0px'
}

export default TopDonatersCard
