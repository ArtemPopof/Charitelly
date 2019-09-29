import React, { Component } from 'react'
import { HorizontalScroll } from "@vkontakte/vkui"
import TopDonatersCard from './TopDonatersCard'
import Cat from '../img/cat.jpg'
import Persik from '../img/persik.png'
import Man from '../img/man.png'


export class TopDonatersScroll extends Component {
    render() {
        return (
          <div style={container}>
            <div style={header}>Стабильность месяца</div>
            <HorizontalScroll>
            <div style={scroll}>
              <TopDonatersCard imageUrl={Persik} donationCount='55k'/>
              <TopDonatersCard imageUrl={Cat} donationCount='42k'/>
              <TopDonatersCard imageUrl={Man} donationCount='12.5k'/>
              <TopDonatersCard imageUrl={Persik} donationCount='10.5k'/>
              <TopDonatersCard imageUrl={Cat} donationCount='10.5k'/>
              <TopDonatersCard imageUrl={Man} donationCount='10.5k'/>
              <TopDonatersCard imageUrl={Persik} donationCount='10.5k'/>
              <TopDonatersCard imageUrl={Cat} donationCount='10.5k'/>
              <TopDonatersCard imageUrl={Man} donationCount='10.5k'/>
            </div>
            </HorizontalScroll>
          </div>
        )
    }
}

const container = {
    padding: '15px 16px',
    background: 'white',
}

const header = {
  margin: '0px 0px 13px 0px',
  fontFamily: 'SF UI Text',
  fontSize: '13px',
  lineHeight: '16px',
  letterSpacing: '-0.078px',
  color: '#909499'
}

const scroll = {
  padding: '0px',
  display: 'flex'
}

export default TopDonatersScroll
