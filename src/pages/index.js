import React from "react"
import { Link } from "gatsby"
import "../components/styles.css";

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ textAlign: `center` }}>Hi Lisa!</h1>
    <p style={{ textAlign: `center` }}>You're doing great today!</p>
    <Link to="/page-2/">
      <div className="SCORE" style={{ 
      width: `1fr`, 
      height: `250px`, 
      backgroundColor: `#BC9CFF`, 
      marginBottom: `1.45rem`,
      borderRadius: `5px`,
      display: `block`,
      position: `relative`
      }}>

    </div></Link>
    <p style={{ fontWeight: `700`, textAlign: `center`, textTransform: `uppercase`}}>Recent Food Photos</p>
<Link to="/page-3/">
    <div className="photoGallery">
        <div className="GALLERY1"></div>
        <div className="GALLERY2"></div>
        <div className="GALLERY3"></div>
        <div className="GALLERY4"></div>
    </div></Link>

  </Layout>
)


export default IndexPage