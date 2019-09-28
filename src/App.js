// our app

import React, { useState, useEffect } from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';

import Achievments from './panels/Achievements';
import Persik from './panels/Persik';

const App = () => {
	return (
		<View>
			{/* <Home id='home'/> */}
            <Achievments id='achievments'/>
		</View>
	);
}

export default App;