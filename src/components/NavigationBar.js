import React, { Component } from 'react'
import {
  Epic, Tabbar, TabbarItem, Panel,
  PanelHeader, View
} from '@vkontakte/vkui'
import Icon from '../components/Icon'
import Home from '../panels/Home'
import PrizePanel from '../panels/PrizePanel'
import Profile from '../panels/Profile'

export class NavigationBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeStory: 'prize',
    };
    this.onStoryChange = this.onStoryChange.bind(this);
  }

  onStoryChange (e) {
    this.setState({ activeStory: e.currentTarget.dataset.story })
  }

  
  render () {

    return (
      <Epic activeStory={this.state.activeStory} tabbar={
        <Tabbar>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'home'}
            data-story="home"
            text="Home"
          ><Icon/></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'prize'}
            data-story="prize"
          ><Icon/></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'profile'}
            data-story="profile"
          ><Icon/></TabbarItem>
        </Tabbar>
      }>
        <View id="home" activePanel="home">
          <Home id="home"/>
        </View>
        <View id="prize" activePanel="prize">
          <PrizePanel id="prize"/>
        </View>
        <View id="profile" activePanel="profile">
          <Profile id="profile"/>
        </View>
      </Epic>
    )
  }
}

export default NavigationBar
