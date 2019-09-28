import React from "react"
import PrizeMenu from "../components/PrizeMenu";
import { Panel } from "@vkontakte/vkui";

const PrizePanel = ({ id }) => (
    <Panel id={id}>
        <PrizeMenu />
    </Panel>
);

export default PrizePanel
