import React, {useState} from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby'



const Post = ({ data}) => {
    const { published, tag1, tag2, tag3, title, url, name, notes } = data
    
    const tag_value1 = tag1 ? 'tag' : 'hide'
    const tag_value2 = tag2 ? 'tag' : 'hide'
    const tag_value3 = tag3 ? 'tag' : 'hide'

    const title_value= title ? '': 'hide'
    const url_value = url ? '': 'hide'
    const published_value = published ? '': 'hide'
    const element_value =title? 'item':'hide'


    return (
         <ul className={`${element_value}`}>
             <li className="list-items">
                    <h2 className={`date-post${published_value}`}>{published}</h2>
                    <div className="section-topic-picks">
                        <Link to={url}><h2 className="daily-title">{name}</h2></Link>
                    </div>
                    <div className="upper-row ">
                        <span className={`${title_value}`}>
                            <p to={url} className="tool-text">Description: {title}</p>
                        </span>
                        <span className={`url-gh ${url_value}`}>({url})</span>
                    </div>
                    <div>
                        <p className="tool-text2">
                            Alexi> <span>"{notes}"</span>
                        </p>
                    </div>
                 <div className="bottom-row">
                <div className="tag-flex">
                    <Link to={`/${tag1}`}>
                        <span className={`tags-gh ${tag_value1}`}>{tag1}</span>
                    </Link>
                    <Link to={`/${tag2}`}>
                        <span className={`tags-gh ${tag_value2}`}>{tag2}</span>
                    </Link>
                    <Link to={`/${tag3}`}>
                        <span className={`tags-gh ${tag_value3}`}>{tag3}</span>
                    </Link>
                </div>
                 </div>
             </li>
         </ul>
    )
}

export default Post
