import { Cell } from "@vkontakte/vkui";
import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import TopDonatersScroll from '../components/TopDonatersScroll'
import HomeHeader from '../components/HomeHeader'

// Home screen (list of all projects, profile info)

const Home = ({ id }) => (
	<Panel id={id} style={componentStyle}>
        <HomeHeader></HomeHeader>
        <div>
        <TopDonatersScroll></TopDonatersScroll>
        </div>
	</Panel>
);

const componentStyle = {
    
}


export default Home;