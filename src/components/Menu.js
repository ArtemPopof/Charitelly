import React, { Component } from 'react'
import {Group, Tabs, HorizontalScroll, TabsItem} from '@vkontakte/vkui'
import PropType from 'prop-types'

export class Menu extends Component {

  state = {
    currentTab: this.props.menuItems[0]
  }

  createTabs = () => {
    return this.props.menuItems.map((item) => (
      (item == this.state.currentTab) ?
      <TabsItem selected={true}>
        {item}
      </TabsItem> 
      :
      <TabsItem>
      {item}
      </TabsItem> 
    ))

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
