import React, { Component } from 'react'
import { Cell, Div, Button } from '@vkontakte/vkui'
import Icon from './Icon'

export default class PrizeCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={card}>
                <div style={prizeCardImageStyle}></div>
                <div style={prizeCardContentStyle}>
                    <Button style={prizeCardButtonStyle}>Участвовать</Button>
                </div>
            </div>
        )
    }
}

const card = {
    display: "flex",
    margin: "16px",
    background: "gray",
    borderRadius: "8px"
}

const prizeCardImageStyle = {
    height: "115px",
    width: "128px",
    background: "green",
    borderRadius: "8px 0px 0px 8px",
    float: "left",
}

const prizeCardContentStyle = {
    position: "relative",
    height: "100%",
    margin: "8px"
}

const prizeCardButtonStyle = {
    float: "left",
    bottom: "6.09%",
    left: "144px",
    background: "orange"
}
