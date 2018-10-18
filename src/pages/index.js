import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello World!</h1>
    <p>Welcome to my Gatsby site.</p>
    <p>I'm Devin Baldwin, I'm ready to create <br/>
    something AWESOME! This will be my starting point <br/>
    if I am chosen to participate.</p> 
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
