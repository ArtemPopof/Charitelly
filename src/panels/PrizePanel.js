import React from "react"
import { Panel, Cell, List, Header, PanelHeader } from "@vkontakte/vkui";
import Menu from "../components/Menu";
import PrizeCard from "../components/PrizeCard";

class PrizePanel extends React.Component {
    constructor(props) {
        super(props)
    }

    itemSelected(item) {
        console.log(item);
    }

    render() {
        return (
            <Panel id={this.props.id}>
                <Menu
                    menuItems={["Розыгрыши призов", "Подарки"]}
                    itemSelected={this.itemSelected} />
                <List>
                    <PrizeCard>s</PrizeCard>
                    <PrizeCard>s</PrizeCard>
                    <PrizeCard>s</PrizeCard>
                </List>
            </Panel>
        );
    }
}

export default PrizePanel
