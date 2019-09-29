import React, { Component } from 'react'
import { Cell, Div, Button } from '@vkontakte/vkui'
import Icon from './Icon'
import PropType from 'prop-types'

export default class PrizeCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={card}>
                <img style={leftPart} src={this.props.imageUrl}></img>
                <div style={rightPart}>
                    <div style={nameStyle}>{this.props.name}</div>
                    <Button style={btn}>Участвовать</Button>
                </div>
            </div>
        )
    }
}

PrizeCard.propTypes = {
    imageUrl: PropType.string.isRequired,
    name: PropType.string.isRequired
}

const card = {
    display: "flex",
    //margin: "16px",
    padding: '16px',
    borderRadius: "8px",
    height: "115px",
    background: 'white'
}

const leftPart = {
    height: "100%",
    //background: "green",
    borderRadius: "8px 0px 0px 8px",
    flex: "0 0 128px"
}

const rightPart = {
    height: "100%",
   // background: "red",
    flex: "1",
    borderRadius: "0px 8px 8px 0px",
    position: "relative",
    textAlign: "center"
}

const btn = {
    position: "absolute",
    background: "orange",
    margin: "0 -75px",
    width: "175px",
    bottom: "6%"
}

const nameStyle = {
}


