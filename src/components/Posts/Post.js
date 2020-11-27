import React, {useState} from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import { MdDateRange } from "react-icons/md";



const Post = ({ data}) => {
    const { published, tag1, tag2, tag3, title, url } = data
    
    const tag_value1 = tag1 ? 'tag is-link' : 'hide'
    const tag_value2 = tag2 ? 'tag is-link' : 'hide'
    const tag_value3 = tag3 ? 'tag is-link' : 'hide'

    const title_value= title ? '': 'hide'
    const url_value = url ? '': 'hide'
    const published_value = published ? '': 'hide'


    return (
         <ul className="item">
             <li className="list-items">
                 <div className="upper-row ">
                    <span className={`title-gh ${title_value}`}>
                        <a href={url} className="title-gh">{title}</a>
                    </span>
                    <span className={`url-gh ${url_value}`}>({url})</span>
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
                <span className={`published-gh ${published_value}`}>Published {published}</span>
                 </div>
             </li>
         </ul>
    )
}

export default Post
