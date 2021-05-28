import React from "react"
import Layout from "../components/Layout"
import Posts from '../components/Posts'
import SEO from '../components/SEO'
import {graphql, Link} from 'gatsby'


const Home = ({data})=> {  
  const {allAirtable:{nodes:posts}}=data

  //const {}= images

 

  return (
    <Layout>
        <SEO title="Most Recent"/>
        <Posts posts={posts}/>
        <div className="">
          <div className="container is-max-desktop index-next-div">
            <Link className='pagination-next index-next' to='/2' rel="next">See more</Link>
          </div>
        </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(sort: {order: DESC, fields: data___published}) {
      nodes {
        data {
          published(formatString: "MMMM YYYY")
          title
          url
          tag1
          tag2
          tag3
          name
          notes
        }
        id
      }
    }
    imageSharp{
      fluid{
        src
      }
    }
  }
`

export default Home