import React, { Component } from 'react'
import FeedMenu from './FeedMenu'
import FeedCard from './FeedCard'

export class Feed extends Component {
    render() {
        return (
            <div style={container}>
                <FeedMenu/>
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>                
                <FeedCard/>
                <FeedCard/>        
            </div>
        )
    }
}

const container = {
    backgroundColor: 'white'
}

export default Feed
