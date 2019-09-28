import { Panel, Tabs, HorizontalScroll, TabsItem } from "@vkontakte/vkui";
import React from 'react'

const PrizePanel = ({ id }) => (
    <Panel id={id}>
        <Tabs>
            <HorizontalScroll>
                <TabsItem>Розыгрыши призов</TabsItem>
                <TabsItem>Награды</TabsItem>
            </HorizontalScroll>
        </Tabs>
    </Panel>
);

export default PrizePanel
