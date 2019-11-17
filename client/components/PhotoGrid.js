import React, { Component } from 'react'
import { Link } from 'react-router'
import Photo from './Photo'


class PhotoGrid extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.posts, this.props.comments)
        return (
            <div className="photo-grid">
                {this.props.posts.map((post, i) => <Photo key={i} i={i} post={post} {...this.props} />)}
            </div>
        )
    }
}


export default PhotoGrid




