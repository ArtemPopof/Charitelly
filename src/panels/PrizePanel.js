import React from "react"
import { Panel, Cell, List, Header, PanelHeader } from "@vkontakte/vkui";
import Menu from "../components/Menu";
import PrizeCard from "../components/PrizeCard";
import PrizeScroll from "../components/PrizesScroll";
import prize1 from '../img/prize1.png'
import prize2 from '../img/prize2.png'
import prize3 from '../img/prize3.png'

class PrizePanel extends React.Component {
    constructor(props) {
        super(props);
    }

    itemSelected(item) {
        console.log(item);
    }

    addCards() {
        return this.props.cards.map(element =>
            <PrizeCard key={element}>element</PrizeCard>
        );
    }

    render() {
        return (
            <List style={container}>
                <Panel id={this.props.id}>
                    <Menu
                        menuItems={["Розыгрыши призов", "Подарки"]}
                        itemSelected={this.itemSelected} />
                    <PrizeScroll />
                    <PrizeCard imageUrl={prize1} name="Gym sale"></PrizeCard>
                    <PrizeCard imageUrl={prize2} name="100$ Gift card"></PrizeCard>
                    <PrizeCard imageUrl={prize3} name="Red Hat"></PrizeCard>
                </Panel>
            </List>
        );
    }
}

const container = {
    backgroundColor: 'white',
    background: 'white'
}

export default PrizePanel
