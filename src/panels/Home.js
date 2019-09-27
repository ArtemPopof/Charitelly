import { Cell } from "@vkontakte/vkui";
import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

// Home screen (list of all projects, profile info)

const Home = ({ id }) => (
	<Panel id={id}>
        <Cell style={ profileHeaderStyle }>
            Hello world
        </Cell>
	</Panel>
);

const profileHeaderStyle = {
    backgroundColor: '#ffff55'
}

export default Home;