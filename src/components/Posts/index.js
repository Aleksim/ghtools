import React from 'react'
import Post from './Post'
import "../../css/main.css"

const Posts = ({posts, title}) => {
    return (
        <div className="section item-bg list-block-upper">
            <div className="container list-block is-max-desktop">
                <div className="">
                    {posts.map(post=>{
                        return <Post key={post.id} {...post}  />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Posts
