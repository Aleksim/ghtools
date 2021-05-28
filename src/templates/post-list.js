import React from 'react'
import Layout from "../components/Layout"
import Posts from '../components/Posts'
import SEO from '../components/SEO'
import {graphql, Link} from 'gatsby'
import '../css/main.css'



export default function PostList({data, pageContext}) {

    const {allAirtable:{nodes:posts}}=data
    const {currentPage, numPages} = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPagePath = currentPage - 1 === 1 ? '/' : '/' + (currentPage - 1).toString();
    const nextPagePath = '/' + (currentPage + 1).toString();
    const prevPageClassName = isFirst ? 'hide' : 'pagination-previous'
    const nextPageClassName = isLast ? 'hide' : 'pagination-next'


    return (
    <Layout>
        <SEO title="Most Recent"/>
        <Posts posts={posts}/>
        <div className="section">
            <div className="container is-max-desktop">
                <nav className="pagination pagination-flex">
                    <Link className={prevPageClassName} to={prevPagePath} rel="prev">Previous page</Link>
                    <Link className={nextPageClassName} to={nextPagePath} rel="next">Next page</Link>
                </nav>
            </div>
        </div>
    </Layout>
    )
}

export const postQuery = graphql`
query GetPost($skip: Int!, $limit: Int!) {
  allAirtable(sort: {fields: data___published, order: DESC}
    limit:$limit
    skip:$skip) {
    nodes {
      data {
        published(formatString: "MMMM YYYY")
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
