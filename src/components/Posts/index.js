import React from 'react'
import Post from './Post'
import "../../css/main.css"
//päivitys

const Posts = ({posts, title}) => {
    return (
        <div className="section item-bg">
            <div className="container is-max-desktop">
                <div className="">
                    {posts.slice(0,5).map(post=>{
                        return <Post key={post.id} {...post}  />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Posts
