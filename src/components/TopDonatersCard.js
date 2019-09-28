import React, { Component } from 'react'
import { Avatar } from "@vkontakte/vkui"

export class TopDonatersCard extends Component {
    render() {
        return (
          <div style={{ ...itemStyle, paddingLeft: 4 }}>
            <Avatar size={64} style={{ marginBottom: 8 }}></Avatar>
            Элджей
          </div>
        )
    }
}

const itemStyle = {
    margin: '0px 12px 0px 0px'
}

export default TopDonatersCard
