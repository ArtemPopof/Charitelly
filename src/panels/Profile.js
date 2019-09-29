import React  from "react"
import { Panel } from "@vkontakte/vkui";
import Menu from "../components/Menu";
import HomeHeader from "../components/HomeHeader"
import FeedCard from "../components/FeedCard"
import PrizeScroll from "../components/PrizesScroll";
import Feed from "../components/Feed";

class Profile extends React.Component {
    Profile(id) {
        this.id = id;

        this.itemSelectedCallback = this.itemSelectedCallback.bind(this)
    }

    state = {
        currentTab: "Донаты"
    }

    render() {
        return (
            <Panel id={this.id}>
                <HomeHeader></HomeHeader>
                <Menu menuItems={["Донаты", "Розыгрыши", "Призы"]} 
                itemSelected={(item) => this.itemSelectedCallback(item)}></Menu>
                {/* {this.getContent(this.state.currentTab)} */}
                {/* <PrizeScroll/> */}
                <Feed menuEnabled="false"/>
            </Panel>
        )
    }

    itemSelectedCallback(item) {
        this.setState({currentTab: item})
    }

    getContent = (currentTab) => {
        if (currentTab === "Донаты") {
            return (
             <div style={container}>
                <FeedCard></FeedCard>
                <FeedCard></FeedCard>
            </div>
            )
        } else if (currentTab === "Розыгрыши") {
            return (
                <div style={container}>
                    Another tab!!!
               </div>
               ) 
        } else {
            return (
                <div style={container}>
                   One more tab!!!
               </div>
               )
        }
    }

}

const container = {
    padding: '0px 16px',
    backgroundColor: 'white'
}

export default Profile
