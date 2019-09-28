import React from "react"
import { Panel } from "@vkontakte/vkui";
import HomeHeader from "../components/HomeHeader"
import { Menu } from "../components/Menu";
import FeedCard from "../components/FeedCard";


const Profile = ({ id }) => (
    <Panel id={id}>
        <HomeHeader></HomeHeader>
        <Menu menuItems={["Донаты", "Призы", "Достижения"]} 
        itemSelected={itemSelectedCallback}></Menu>
        <div style={container}>
            <FeedCard></FeedCard>
            <FeedCard></FeedCard>
        </div>
    </Panel>
);

function itemSelectedCallback(item) {
    console.log("item selected: " + item)
}

const container = {
    padding: '0px 16px',
    backgroundColor: 'white'
}

export default Profile
