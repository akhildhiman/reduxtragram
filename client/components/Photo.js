import React from 'react'
import { Link } from 'react-router'
import CSSTransitionGroup from 'react-addons-css-transition-group'

class Photo extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        // console.log(this.props.posts.map((post) => post.code))
        const { post, comments, i } = this.props
        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${post.code}`}>
                        <img className='grid-photo' src={post.display_src} alt={post.caption} />
                        {/* {post.caption} */}
                    </Link>


                    <CSSTransitionGroup transitionName='like'
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                        <span key={post.likes} className='likes-heart'>{post.likes}</span>
                    </CSSTransitionGroup>
                </div>


                <figcaption>
                    <p>{post.caption}</p>
                    <div className='control-buttons'>
                        <button className='likes'> &hearts; {post.likes}</button>
                        <Link className='button' to={`/view/{post.code}`}>
                            <span className='comment-count'>
                                <span className='speech-bubble'></span>
                                {comments[post.code] ? comments[post.code].length : null}
                            </span>
                        </Link>
                    </div>
                </figcaption>
            </figure>




        )
    }
}


export default Photo