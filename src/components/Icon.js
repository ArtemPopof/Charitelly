import React, { Component } from 'react'
import Cat from '../img/cat.jpg'

export class Icon extends Component {
    render() {
        return (
            <div>
                <img style={icon} src={Cat}></img>
            </div>
        )
    }
}

const icon = {
    width: '32px'
}

export default Icon
