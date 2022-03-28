import React from 'react'
import Layout2 from '../components/Layout2'
import Posts from '../components/Posts'
import Hero2 from '../components/Hero2'
import Nav2 from '../components/Nav2'
import {graphql} from 'gatsby'
import Recent from '../components/Recent'
import SEO from '../components/SEO'


const CategoryTemplate = (props) => {

    const {pageContext:{tags}}=props

    const {data:{
                tag:{
                    nodes:posts}
                    }
            } = props

    return (
        <Layout2>
            <SEO title={`The ultimate source for the newest ${tags} marketing tools`} description={`Almost everyday a new ${tags} marketing tool is published on the internet. This site brings all of them to a one place.`}/>
            <Nav2 tag={`${tags}`}/>
            <Recent/>
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
        name
        notes
      }
    }
  }
}
`

export default CategoryTemplate