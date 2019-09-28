import React, { Component } from 'react'
import { HorizontalScroll } from "@vkontakte/vkui"
import TopDonatersCard from './TopDonatersCard'


export class TopDonatersScroll extends Component {
    render() {
        return (
          <div style={container}>
            <div style={header}>Стабильность месяца</div>
            <HorizontalScroll>
            <div style={{display: 'flex'}}>
              <TopDonatersCard/>
              <TopDonatersCard/>
              <TopDonatersCard/>
              <TopDonatersCard/>
              <TopDonatersCard/>
              <TopDonatersCard/>
              <TopDonatersCard/>
              <TopDonatersCard/>              
              <TopDonatersCard/>
            </div>
            </HorizontalScroll>
          </div>
        )
    }
}

const container = {
    background: 'white',
    padding: '15px 16px'
}

const header = {
  margin: '0px 0px 13px 0px',
  fontFamily: 'SF UI Text',
  fontSize: '13px',
  lineHeight: '16px',
  letterSpacing: '-0.078px',
  color: '#909499'
}

export default TopDonatersScroll
