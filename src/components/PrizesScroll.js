import React, { Component } from 'react'
import { HorizontalScroll, Avatar } from "@vkontakte/vkui"
import PrizeScrollCard from './PrizeScrollCard'


export class PrizeScroll extends Component {
    render() {
        return (
            <HorizontalScroll>
                <div style={{display: 'flex'}}>
                    <PrizeScrollCard/>
                    <PrizeScrollCard/>

                </div>
            </HorizontalScroll>
        )
    }
}

export default PrizeScroll
