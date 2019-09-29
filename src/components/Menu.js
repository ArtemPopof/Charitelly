import React, { Component } from 'react'
import {Group, Tabs, HorizontalScroll, TabsItem} from '@vkontakte/vkui'
import PropType from 'prop-types'

export class Menu extends Component {

  state = {
    currentTab: this.props.menuItems[0]
  }

  createTabs = () => {
    return this.props.menuItems.map((item) => (
      (item === this.state.currentTab) ?
      <TabsItem 
        selected={true}
        key={item}
        data-story={item}>
        {item}
      </TabsItem> 
      :
      <TabsItem 
        onClick={this.selected}
        key={item}
        data-story={item}>
      {item}
      </TabsItem> 
    ))

  }

  selected = (e) => {
    this.setState({currentTab: e.currentTarget.dataset.story})
    this.props.itemSelected(e.currentTarget.dataset.story)
  }

  render() {
      return (
          <div>
          <Group>
            <Tabs type="buttons">
               <HorizontalScroll>
                  {this.createTabs()}
                </HorizontalScroll>
              </Tabs>
            </Group>
            </div>
        )
    }
}

Menu.propTypes = {
  menuItems: PropType.array.isRequired,
  itemSelected: PropType.func.isRequired
}

export default Menu
