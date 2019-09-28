import React, { Component } from 'react'
import {Epic, Tabbar, TabbarItem, Panel,
      PanelHeader, View} from '@vkontakte/vkui'
import Icon from '../components/Icon'
import Home from '../panels/Home'
import Achievements from '../panels/Achievements'

export class NavigationBar extends Component {
    render() {
        return (
            <Epic activeStory="home" tabbar={
                <Tabbar>
                  <TabbarItem
                    onClick={this.onStoryChange}
                    data-story="home"
                    text="Новости"
                  ><Icon/></TabbarItem>
                  <TabbarItem
                    onClick={this.onStoryChange}
                    data-story="achievments"
                    text="Поиск"
                  ><Icon/></TabbarItem>
                  <TabbarItem
                    onClick={this.onStoryChange}
                    data-story="messages"
                    label="12"
                    text="Сообщения"
                  ><Icon/></TabbarItem>
                </Tabbar>
              }>
                <View id="home" activePanel="home">
                    <Home id="home"/>
                </View>
                <View id="achievments" activePanel="achievments">
                    <Achievements id="achievements"/>
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
