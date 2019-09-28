import React from 'react'
import { Tabs, HorizontalScroll, TabsItem } from "@vkontakte/vkui";

class PrizeMenu extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTabPrize: 'raffle',
        };
    }

    render() {
        return (
            <Tabs type="buttons">
                <HorizontalScroll>
                    <TabsItem
                        onClick={() => this.setState({ activeTabPrize: 'raffle' })}
                        selected={this.state.activeTabPrize === 'raffle'}>
                        Розыгрыши призов
                </TabsItem>
                    <TabsItem
                        onClick={() => this.setState({ activeTabPrize: 'achievements' })}
                        selected={this.state.activeTabPrize === 'achievements'}>
                        Награды
                </TabsItem>
                </HorizontalScroll>
            </Tabs>
        );
    }
}

export default PrizeMenu
