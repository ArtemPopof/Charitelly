import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import './css/fonts.css'

import Home from './panels/Home';
import Persik from './panels/Persik';
import Achievements from './panels/Achievements';
import NavigationBar from './components/NavigationBar';

const OldApp = () => {
	const [activePanel, setActivePanel] = useState('navigation');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	return (
		<NavigationBar id='navigation' />
	);
}

export default OldApp;

