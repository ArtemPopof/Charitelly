import React from "react"
import { Panel } from "@vkontakte/vkui";
import HomeHeader from "../components/HomeHeader"
import { Menu } from "../components/Menu";
import FeedCard from "../components/FeedCard";

const Profile = ({ id }) => (
    <Panel id={id}>
        <HomeHeader></HomeHeader>
        <Menu></Menu>
        <FeedCard></FeedCard>
    </Panel>
);

export default Profile
