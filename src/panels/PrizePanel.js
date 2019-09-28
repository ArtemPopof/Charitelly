import React  from "react"
import { Panel } from "@vkontakte/vkui";
import Menu from "../components/Menu";

class PrizePanel extends React.Component {
    PrizePanel(id) {
        this.id = id;
    }

    itemSelected(item) {
        console.log(item);
    }

    render() {
        return (
            <Panel id={this.id}>
                <Menu
                    menuItems={["Розыгрыши призов", "Подарки"]} 
                    itemSelected={this.itemSelected} />
            </Panel>
        )
    }
}

export default PrizePanel
