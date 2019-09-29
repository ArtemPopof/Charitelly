import React, { Component } from 'react'
import FeedMenu from './Menu'
import Menu from './Menu'
import FeedCard from './FeedCard'
import Cat from '../img/cat.jpg'
import Tigre from '../img/tigre.jpg'
import Golub from '../img/golub.jpg'
import Neva from '../img/neva.jpg'
import PropType from 'prop-types'

export class Feed extends Component {
    render() {
        return (
            <div style={container}>
                {this.props.menuEnabled && this.props.menuEnabled ? <p></p>: <Menu menuItems={["Все", "Избранное", "Акции"]} itemSelected={() => {}}/> 
                    }
                <div style={{padding: '0px 16px'}}>
                    <FeedCard projectName="Save Tigres" projectDescription="Tigres are hungry and looking for a home, please don't be so rude, feed little tigre, he is so lonely" projectImg={Tigre}/>
                    <FeedCard projectName="Help clean Neva river" projectDescription="Something terrible happend with our lovely Neva river, help us clean bottles and other garbage from river!" projectImg={Neva}/>
                    <FeedCard projectName="Raise money for starving pink pigeons" projectDescription="Little berdies want to eat, they cant find food on their own. Please support this project so we can feed starving pink pigeons." projectImg={Golub}/>
                    <FeedCard projectName="Let's find home for very rare polite cat" projectDescription="This little good boy needs home. He's very polite and kind. Just don't forget to feed him right on clock." projectImg={Cat}/>
                </div>      
            </div>
        )
    }
}

const container = {
    backgroundColor: 'white',
}

Feed.propTypes = {
    menuEnabled: PropType.bool
}

export default Feed
