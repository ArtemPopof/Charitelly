import React, { Component } from 'react'
import {Progress} from '@vkontakte/vkui'

export class FundProgressbar extends Component {
    render() {
        return (
            <div>
                <div style={label}>
                    <div style={funded}><span style={progressInfo}>41%</span> funded</div>
                    <div style={goal}><span style={progressInfo}>2000000$</span> goal</div>
                </div>
                <div style={progress}>
                <Progress value={40} />
                </div>
            </div>
        )
    }
}

const label = {
}

const funded = {
    float: 'left'
}

const goal = {
    float: 'right',
    textAlign: 'right'
}

const progress = {
    clear: 'left',
    padding: '8px 0px 0px 0px'
}

const progressInfo = {
    fontWeight: 'bold',
    fontSize: '15px'
}

export default FundProgressbar
