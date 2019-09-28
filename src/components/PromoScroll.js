import React, { Component } from 'react'
import { HorizontalScroll, Avatar } from "@vkontakte/vkui"
import PromoScrollCard from './PromoScrollCard'


export class PromoScroll extends Component {
    render() {
        return (
            <HorizontalScroll>
                <div style={{display: 'flex'}}>
                    <PromoScrollCard/>
                </div>
            </HorizontalScroll>
        )
    }
}

export default PromoScroll
