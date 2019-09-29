import React, { Component } from 'react'
import { Progress } from '@vkontakte/vkui'
import PropType from 'prop-types'

export class FundProgressbar extends Component {
    render() {
        return (
            <div>
                <div style={label}>
                    <div style={funded}><span style={progressInfo}>{this.getPercent()}%</span> funded</div>
                    <div style={goal}><span style={progressInfo}>{this.props.goalUsd}$</span> goal</div>
                </div>
                <div style={progress}>
                    <Progress value={Math.round(this.getPercent())} />
                </div>
            </div>
        )
    }

    getPercent() {
        return ((this.props.fundedUsd / this.props.goalUsd) * 100).toFixed(2)
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

FundProgressbar.propTypes = {
    goalUsd: PropType.number.isRequired,
    fundedUsd: PropType.number.isRequired
}

export default FundProgressbar
