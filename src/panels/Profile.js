import React from "react"
import { Panel } from "@vkontakte/vkui";
import HomeHeader from "../components/HomeHeader"

const Profile = ({ id }) => (
    <Panel id={id}>
        <HomeHeader></HomeHeader>
    </Panel>
);

export default Profile
