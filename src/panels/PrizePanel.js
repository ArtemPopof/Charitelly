import React  from "react"
import { Panel } from "@vkontakte/vkui";
import Menu from "../components/Menu";

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
            </Panel>
        )
    }
}

export default PrizePanel
