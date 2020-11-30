import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'


const query = graphql`
    {
        allAirtable {
            distinct(field: data___tags)
        }
    }
`

const Categories = () => {

    const{
        allAirtable:{distinct}
    } = useStaticQuery(query)

    return (
        <ul className="category-frame">
            {distinct.map((category, index)=>{
                return <li className="category-item" key={index}>
                    <Link to={`/${category}`}>
                        {category}
                    </Link>
                </li>
            })}
        </ul>
    )
}

export default Categories
