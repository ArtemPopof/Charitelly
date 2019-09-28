import React from "react"
import { Panel } from "@vkontakte/vkui";
import HomeHeader from "../components/HomeHeader"
import { Menu } from "../components/Menu";
import FeedCard from "../components/FeedCard";

const Profile = ({ id }) => (
    <Panel id={id}>
        <HomeHeader></HomeHeader>
        <Menu></Menu>
        <div style={container}>
            <FeedCard></FeedCard>
            <FeedCard></FeedCard>
        </div>
    </Panel>
);

const container = {
    padding: '0px 16px',
    backgroundColor: 'white'
}

export default Profile
