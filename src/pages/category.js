import React from 'react'
import Category from '../components/Categories'
import Layout2 from '../components/Layout2'
import Nav3 from '../components/Nav3'
import Categories from '../components/Categories'
import SEO from '../components/SEO'

const category = () => {
    return (
        <div>
            <SEO title="Categories"/>
            <Layout2>
                <Nav3/>        
                <Categories/>
            </Layout2>
        </div>
    )
}

export default category
