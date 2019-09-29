import React, { Component } from 'react'
import {
  Epic, Tabbar, TabbarItem, Panel,
  PanelHeader, View
} from '@vkontakte/vkui'
import Icon from '../components/Icon'
import Home from '../panels/Home'
import PrizePanel from '../panels/PrizePanel'
import Profile from '../panels/Profile'
import Cat from '../img/cat.jpg'
import User from '../img/user.png'
import HomeIcon from '../img/home.png'
import Prize from '../img/gift.png'

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
          ><Icon url={HomeIcon}/></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'prize'}
            data-story="prize"
          ><Icon url={Prize}/></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'profile'}
            data-story="profile"
          ><Icon url={User}/></TabbarItem>
        </Tabbar>
      }>
        <View header={false} id="home" activePanel="home">
          <Home id="home"/>
        </View>
        <View  header={false} id="prize" activePanel="prize">
          <PrizePanel id="prize" cards={[1, 2, 3,4,5]}/>
        </View>
        <View  header={false} id="profile" activePanel="profile">
          <Profile id="profile"></Profile>
        </View>
      </Epic>
    )
  }
}

const style = {
    backgroundColor: 'red'
}

export default NavigationBar
