import React, { Component } from 'react'
import { HorizontalScroll, Avatar } from "@vkontakte/vkui"
import Icon24User from '../img/cat.jpg'


export class PromoScroll extends Component {
    render() {
        return (
            <HorizontalScroll>
            <div style={{ display: 'flex' }}>
              <div style={{ ...itemStyle, paddingLeft: 4 }}>
                <Avatar size={64} style={{ marginBottom: 8 }}></Avatar>
                Элджей
              </div>
              <div style={itemStyle}>
                <Avatar size={64} style={{ marginBottom: 8 }}></Avatar>
                Ольга
              </div>
              <div style={itemStyle}>
                <Avatar size={64} style={{ marginBottom: 8 }}></Avatar>
                Сергей
              </div>
              <div style={itemStyle}>
                <Avatar size={64} style={{ marginBottom: 8 }}></Avatar>
                Илья
              </div>
              <div style={itemStyle}>
                <Avatar size={64} style={{ marginBottom: 8 }}></Avatar>
                Алексей
              </div>
              <div style={itemStyle}>
                <Avatar size={64} style={{ marginBottom: 8 }}></Avatar>
                Костя
              </div>
              <div style={itemStyle}>
                <Avatar size={64} style={{ marginBottom: 8 }}></Avatar>
                Миша
              </div>
              <div style={{ ...itemStyle, paddingRight: 4 }}>
                <Avatar size={64} style={{ marginBottom: 8 }}></Avatar>
                Вадим
              </div>
            </div>
          </HorizontalScroll>
        )
    }
}

const itemStyle = {
    margin: '0px 12px 0px 0px'
}

export default PromoScroll
