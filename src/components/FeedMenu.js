import React, { Component } from 'react'
import {Group, Tabs, HorizontalScroll, TabsItem} from '@vkontakte/vkui'

export class FeedMenu extends Component {
    render() {
        return (
            <div>
            <Group>
              <Tabs type="buttons">
                <HorizontalScroll>
                  <TabsItem
                    onClick={() => this.setState({ activeTab3: 'all' })}
                    selected={true}
                  >
                    Все
                  </TabsItem>
                  <TabsItem
                    onClick={() => this.setState({ activeTab3: 'user' })}
                    selected={false}
                  >
                    Выбор редакции
                  </TabsItem>
                  <TabsItem
                    onClick={() => this.setState({ activeTab3: 'inter' })}
                    selected={false}
                  >
                    Сначала интересные
                  </TabsItem>
                  <TabsItem
                    onClick={() => this.setState({ activeTab3: 'top' })}
                    selected={false}
                  >
                    Топ 10 интересных
                  </TabsItem>
                </HorizontalScroll>
              </Tabs>
            </Group>
            </div>
        )
    }
}

export default FeedMenu
