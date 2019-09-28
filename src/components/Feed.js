import React, { Component } from 'react'
import FeedMenu from './FeedMenu'
import FeedCard from './FeedCard'

export class Feed extends Component {
    render() {
        return (
            <div>
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

export default Feed
