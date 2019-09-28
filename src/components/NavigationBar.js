import React, { Component } from 'react'
import {Epic, Tabbar, TabbarItem, Panel,
      PanelHeader, View} from '@vkontakte/vkui'
import Icon from '../components/Icon'
import Home from '../panels/Home'
import PrizePanel from '../panels/PrizePanel'

export class NavigationBar extends Component {
    state = {
        activeStory: 'home'
    }


   onStoryChange = (e, panel) => {
       this.setState ({
           activeStory: panel
       })
   }

    render() {
        return (
            <Epic activeStory="home" tabbar={
                <Tabbar>
                  <TabbarItem
                    onClick={this.onStoryChange(this, "home")}
                    data-story="home"
                    text="Проекты"
                    selected={this.state.activeStory === 'home'}
                  ><Icon/></TabbarItem>
                  <TabbarItem
                    onClick={this.onStoryChange("prizes")}
                    data-story="prizes"
                    text="Призы"
                    selected={this.state.activeStory === 'prizes'}
                  ><Icon/></TabbarItem>
                  <TabbarItem
                    data-story="messages"
                    label="12"
                    text="Что-то еще"
                  ><Icon/></TabbarItem>
                </Tabbar>
              }>
                <View id="home" activePanel="home">
                    <Home id="home"/>
                </View>
                <View id="prizes" activePanel="prizes">
                    <PrizePanel id="prizes"/>
                </View>
                <View id="messages" activePanel="messages">
                </View>
                <View id="notifications" activePanel="notifications">
                </View>
                <View id="more" activePanel="more">
                </View>
              </Epic>
        )
    }
}

export default NavigationBar
