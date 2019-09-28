import React  from "react"
import { Panel } from "@vkontakte/vkui";
import Menu from "../components/Menu";
import HomeHeader from "../components/HomeHeader"
import FeedCard from "../components/FeedCard"

// const container = {
//     padding: '0px 16px',
//     backgroundColor: 'white'
// }

// const donationsContent =  
// <div style={container}>
//     <FeedCard></FeedCard>
//     <FeedCard></FeedCard>
// </div>

// const giveawaysContent = <div>HERES ANOTHER VIEW</div>

// const prizesContent = <div>HERES PRIZES VIEW</div>

// var currentContent = donationsContent


// export default class Profile extends Component {
//     Profile(id) {
//         this.id = id;
//     }

//     render() {
//         return (
//             <Panel id={this.id}>
//                 {/* <HomeHeader></HomeHeader>
//                 <Menu menuItems={["Донаты", "Розыгрыши", "Призы"]} 
//                 itemSelected={this.itemSelectedCallback}></Menu>
//                 {this.getContent()} */}
//             </Panel>
//         )
//     }


//     getContent() {
//         // return currentContent
//     }

//     itemSelectedCallback(item) {
//         // if (item === "Донаты") {
//         //     currentContent = donationsContent
//         // } else if (item == "Призы") {
//         //     currentContent = prizesContent
//         // } else {
//         //     currentContent = giveawaysContent
//         // }
//     }
// }

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
                {this.getContent(this.state.currentTab)}
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
