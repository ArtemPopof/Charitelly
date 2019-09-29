import React, { Component } from 'react'
import PropType from 'prop-types'

export class Icon extends Component {
    render() {
        return (
            <div>
                <img style={icon} src={this.props.url}></img>
            </div>
        )
    }
}

const icon = {
    width: '32px',
    height: '32px'
}

Icon.propTypes = {
    url: PropType.string.isRequired,
}

export default Icon
