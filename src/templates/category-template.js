import React from 'react'
import Layout2 from '../components/Layout2'
import Posts from '../components/Posts'
import Hero2 from '../components/Hero2'
import {graphql} from 'gatsby'

const CategoryTemplate = (props) => {

    const {pageContext:{tags}}=props

    const {data:{
                tag:{
                    nodes:posts}
                    }
            } = props

    return (
        <Layout2>
            <Hero2 tag={`${tags}`}/>
            <Posts posts={posts} title={`${tags}`}/>
        </Layout2>
    )
}

export const query = graphql`
query GetTag($tags: String) {
  tag: allAirtable(sort: {fields: data___published, order: DESC}, filter: {data: {tags: {eq: $tags}}}) {
    nodes {
      data {
        published(formatString: "MMMM Do, YYYY")
        tag1
        tag2
        tag3
        tags
        title
        url
      }
    }
  }
}
`

export default CategoryTemplate