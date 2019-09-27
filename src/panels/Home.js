import { Cell } from "@vkontakte/vkui";

// Home screen (list of all projects, profile info)

const Home = ({ id }) => (
	<Panel id={id}>
        <Cell style="profileHeaderStyle">
        </Cell>
	</Panel>
);

const profileHeaderStyle = {
    background: 'linear-gradient(68.5deg, #F18627 8.69%, #FEE140 103.26%)'
}