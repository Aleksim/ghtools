import React from "react"
import Layout from "../components/Layout"
import Posts from '../components/Posts'
import SEO from '../components/SEO'
import {graphql} from 'gatsby'


const Home = ({data})=> {  
  const {allAirtable:{nodes:posts}}=data

 

  return (
    <Layout>
        <SEO title="Most Recent"/>
        <Posts posts={posts}/>
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(sort: {order: DESC, fields: data___published}) {
      nodes {
        data {
          published(formatString: "MMMM Do, YYYY")
          title
          url
          tag1
          tag2
          tag3
        }
        id
      }
    }
  }
`

export default Home