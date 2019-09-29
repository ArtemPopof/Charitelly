import React from "react"
import { Panel, Cell, List, Header, PanelHeader } from "@vkontakte/vkui";
import Menu from "../components/Menu";
import PrizeCard from "../components/PrizeCard";

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
            <Panel id={this.props.id}>
                <Menu
                    menuItems={["Розыгрыши призов", "Подарки"]}
                    itemSelected={this.itemSelected} />
                {this.addCards()}
            </Panel>
        );
    }
}

export default PrizePanel
